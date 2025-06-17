import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../context/AuthContext';
import { createOrder } from '../services/OrderService';
import { fetchProducts } from '../services/ProductService';
import { fetchCategories } from '../services/CategoryService';
import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/outline';

interface Product {
  _id: string;
  name: string;
  price: number;
  category_id: string;
  categoryName: string;
  description: string;
  pictureUrl?: string | null;
  created_by?: string;
  createdAt?: string;
  updatedAt?: string;
  displayPrice: string;
}

interface Category {
  _id: string;
  name: string;
  description?: string;
  created_by?: string;
  createdAt?: string;
  updatedAt?: string;
  __v?: number;
}

interface OrderItem {
  product_id: string;
  quantity: number;
  name: string;
  price: number;
}

interface Order {
  _id: string;
  user_id: string | null;
  order_date: string;
  created_by: string;
  total_amount: number;
  status: string;
  delivery_address: string | null;
  order_type: string;
  payment_method: string | null;
  payment_status: string;
  received_amount: number;
  order_number: number;
  createdAt: string;
  updatedAt: string;
  service_type: 'dine_in' | 'take_away';
  items: { product_id: string; quantity: number }[];
  __v: number;
}

export default function CreateOrder() {
  const { isAuthenticated, isLoading, token, logout, user } = useAuth();
  const router = useRouter();
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [orderItems, setOrderItems] = useState<OrderItem[]>([]);
  const [serviceType, setServiceType] = useState<'dine_in' | 'take_away'>('dine_in');
  const [message, setMessage] = useState('');
  const [localLoading, setLocalLoading] = useState(false);
  const [showReceipt, setShowReceipt] = useState(false);
  const [createdOrder, setCreatedOrder] = useState<Order | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [sortBy, setSortBy] = useState('name-asc');

  useEffect(() => {
    if (isLoading) return;
    if (!isAuthenticated || !token) {
      router.push('/login');
      return;
    }

    const fetchData = async () => {
      setLocalLoading(true);
      try {
        const fetchedCategories = await fetchCategories(token, logout);
        setCategories(fetchedCategories);
        if (fetchedCategories.length > 0) {
          setSelectedCategory(fetchedCategories[0]._id);
        }
        const fetchedProducts = await fetchProducts(token, logout, fetchedCategories);
        setProducts(fetchedProducts);
      } catch (error) {
        setMessage(error instanceof Error ? error.message : 'Failed to fetch data');
        setProducts([]);
        setCategories([]);
      } finally {
        setLocalLoading(false);
      }
    };

    fetchData();
  }, [isAuthenticated, isLoading, token, router, logout]);

  const addProductToOrder = (product: Product) => {
    const existingItem = orderItems.find((item) => item.product_id === product._id);
    if (existingItem) {
      setOrderItems(
          orderItems.map((item) =>
              item.product_id === product._id ? { ...item, quantity: item.quantity + 1 } : item
          )
      );
    } else {
      setOrderItems([
        ...orderItems,
        {
          product_id: product._id,
          quantity: 1,
          name: product.name,
          price: product.price,
        },
      ]);
    }
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity >= 0) {
      if (quantity === 0) {
        setOrderItems(orderItems.filter((item) => item.product_id !== productId));
      } else {
        setOrderItems(
            orderItems.map((item) =>
                item.product_id === productId ? { ...item, quantity } : item
            )
        );
      }
    }
  };

  const calculateTotal = () => {
    return orderItems
        .reduce((total, item) => total + item.price * item.quantity, 0)
        .toFixed(2);
  };

  const handleCreateOrder = async () => {
    if (!token || !user?._id) {
      setMessage('Please log in to create order');
      router.push('/login');
      return;
    }
    if (orderItems.length === 0) {
      setMessage('Please add at least one product');
      return;
    }

    setLocalLoading(true);
    try {
      const orderData = {
        user_id: user._id,
        created_by: user._id,
        total_amount: parseFloat(calculateTotal()),
        order_type: 'physical',
        payment_status: 'not_paid',
        received_amount: 0,
        service_type: serviceType,
      };
      const items = orderItems.map((item) => ({
        product_id: item.product_id,
        quantity: item.quantity,
      }));
      const response = await createOrder(token, logout, items, orderData);
      setCreatedOrder(response);
      setShowReceipt(true);
      setMessage('Order created successfully');
      setOrderItems([]);
    } catch (error) {
      setMessage(error instanceof Error ? error.message : 'Failed to create order');
    } finally {
      setLocalLoading(false);
    }
  };

  const handlePrintReceipt = () => {
    const printWindow = window.open('', '_blank');
    const currentDate = new Date().toLocaleString('en-US', {
      dateStyle: 'full',
      timeStyle: 'short',
      timeZone: 'Asia/Karachi',
    });
    if (printWindow && createdOrder) {
      printWindow.document.write(`
        <!DOCTYPE html>
        <html>
          <head>
            <title>Order Receipt</title>
            <style>
              body { font-family: Arial, sans-serif; text-align: center; }
              h1 { font-size: 24px; }
              .receipt { max-width: 400px; margin: 0 auto; padding: 20px; }
              .items { text-align: left; }
              .total { font-weight: bold; margin-top: 20px; }
              .footer { margin-top: 20px; font-style: italic; }
              button { margin: 10px; padding: 10px 20px; cursor: pointer; }
            </style>
          </head>
          <body>
            <div class="receipt">
              <h1>Rasnat</h1>
              <p><strong>Order #${createdOrder.order_number}</strong></p>
              <p>Date & Time: ${currentDate}</p>
              <p>Type: ${createdOrder.service_type === 'dine_in' ? 'Dine-In' : 'Takeaway'}</p>
              <div class="items">
                ${orderItems
          .map(
              (item) =>
                  `<p>${item.name} x${item.quantity} - $${(
                      item.price * item.quantity
                  ).toFixed(2)}</p>`
          )
          .join('')}
              </div>
              <p class="total">Total: $${createdOrder.total_amount.toFixed(2)}</p>
              <p class="footer">Thank you for choosing Rasnat! Visit us again.</p>
              <button onclick="window.print()">Print Receipt</button>
            </div>
          </body>
        </html>
      `);
      printWindow.document.close();
    }
  };

  const filteredProducts = products
      .filter(
          (product) =>
              (!selectedCategory || product.category_id === selectedCategory) &&
              product.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .sort((a, b) => {
        const [key, direction] = sortBy.split('-');
        if (key === 'name') {
          return direction === 'asc'
              ? a.name.localeCompare(b.name)
              : b.name.localeCompare(a.name);
        } else if (key === 'price') {
          return direction === 'asc' ? a.price - b.price : b.price - a.price;
        }
        return 0;
      });

  if (isLoading || localLoading) {
    return <div>Loading...</div>;
  }

  return (
      <div className="max-w-7xl mx-auto p-4">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Create Restaurant Order</h1>
          <div className="flex gap-2">
            <button
                onClick={() => router.push('/orders')}
                className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors"
            >
              Back to Orders
            </button>
            <button
                onClick={() => logout()}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors"
            >
              Logout
            </button>
          </div>
        </div>

        {message && (
            <div className="mb-4 p-4 bg-red-100 text-red-700 rounded-lg">{message}</div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-xl font-semibold mb-4">Select Menu Items</h2>
            <div className="space-y-4">
              <div className="relative">
                <MagnifyingGlassIcon className="absolute left-3 top-2.5 w-5 h-5 text-gray-500" />
                <input
                    type="text"
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                />
                {searchTerm && (
                    <button
                        onClick={() => setSearchTerm('')}
                        className="absolute right-2 top-2 text-gray-500 hover:text-gray-700"
                    >
                      <XMarkIcon className="w-5 h-5" />
                    </button>
                )}
              </div>

              <div className="flex gap-4">
                <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="">All Categories</option>
                  {categories.map((category) => (
                      <option key={category._id} value={category._id}>
                        {category.name}
                      </option>
                  ))}
                </select>
                <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="name-asc">Name (A-Z)</option>
                  <option value="name-desc">Name (Z-A)</option>
                  <option value="price-asc">Price (Low to High)</option>
                  <option value="price-desc">Price (High to Low)</option>
                </select>
              </div>

              <div className="order-type">
                <label className="block text-sm font-medium mb-1">Order Type</label>
                <select
                    value={serviceType}
                    onChange={(e) => setServiceType(e.target.value as 'dine_in' | 'take_away')}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="dine_in">Dine-In</option>
                  <option value="take_away">Takeaway</option>
                </select>
              </div>

              <div className="space-y-2">
                {filteredProducts.length === 0 ? (
                    <p>No items found</p>
                ) : (
                    filteredProducts.map((product) => (
                        <div
                            key={product._id}
                            className="flex justify-between items-center p-3 border rounded-lg"
                        >
                          <div>
                            <p className="font-medium">{product.name}</p>
                            <p>{product.displayPrice}</p>
                            <p className="text-sm text-gray-500">{product.categoryName}</p>
                          </div>
                          <button
                              onClick={() => addProductToOrder(product)}
                              className="px-3 py-1 rounded-lg text-white bg-indigo-500 hover:bg-indigo-600 transition-colors"
                          >
                            Add
                          </button>
                        </div>
                    ))
                )}
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            {orderItems.length === 0 ? (
                <p>No items added</p>
            ) : (
                <div>
                  <table className="w-full border-collapse">
                    <thead>
                    <tr className="bg-gray-100">
                      <th className="p-2 text-left">Item</th>
                      <th className="p-2 text-left">Price</th>
                      <th className="p-2 text-left">Qty</th>
                      <th className="p-2 text-left">Total</th>
                      <th className="p-2"></th>
                    </tr>
                    </thead>
                    <tbody>
                    {orderItems.map((item) => (
                        <tr key={item.product_id} className="border-b">
                          <td className="p-2">{item.name}</td>
                          <td className="p-2">${item.price.toFixed(2)}</td>
                          <td className="p-2">
                            <input
                                type="number"
                                value={item.quantity}
                                onChange={(e) => updateQuantity(item.product_id, Number(e.target.value))}
                                className="w-full p-1 border rounded"
                                min="1"
                            />
                          </td>
                          <td className="p-2">${(item.price * item.quantity).toFixed(2)}</td>
                          <td className="p-2">
                            <button
                                onClick={() => updateQuantity(item.product_id, 0)}
                                className="text-red-500 hover:text-red-700"
                            >
                              <XMarkIcon className="w-5 h-5" />
                            </button>
                          </td>
                        </tr>
                    ))}
                    </tbody>
                    <tfoot>
                    <tr>
                      <td colSpan={3} className="p-2 font-bold">
                        Total:
                      </td>
                      <td className="p-2 font-bold">${calculateTotal()}</td>
                      <td></td>
                    </tr>
                    </tfoot>
                  </table>
                  <button
                      onClick={handleCreateOrder}
                      disabled={localLoading}
                      className={`mt-4 w-full p-2 rounded-lg text-white ${
                          localLoading ? 'bg-gray-400' : 'bg-indigo-500 hover:bg-indigo-600'
                      } transition-colors`}
                  >
                    {localLoading ? 'Creating Order...' : 'Place Order'}
                  </button>
                </div>
            )}
          </div>
        </div>

        {showReceipt && createdOrder && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="bg-white p-6 rounded-lg max-w-md w-full">
                <h2 className="text-xl font-semibold mb-4">Order Receipt</h2>
                <p>
                  Order #{createdOrder.order_number} has been created successfully!
                </p>
                <div className="mt-4">
                  <button
                      onClick={handlePrintReceipt}
                      className="bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600 transition-colors mr-2"
                  >
                    Print Receipt
                  </button>
                  <button
                      onClick={() => {
                        setShowReceipt(false);
                        setCreatedOrder(null);
                      }}
                      className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-400 transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
        )}
      </div>
  );
}