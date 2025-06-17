import toast from 'react-hot-toast';

interface OrderItem {
  product_id: string;
  quantity: number;
}

interface OrderData {
  user_id: string;
  created_by: string;
  total_amount: number;
  order_type: string;
  payment_status: string;
  received_amount: number;
  service_type: 'dine_in' | 'take_away';
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
  items: OrderItem[];
  __v: number;
}

interface ApiResponse<T> {
  statusCode: number;
  message: string;
  success: boolean;
  type: number;
  data: { data: T } | T;
  error?: string;
}

const handleApiError = (response: ApiResponse<any>, logout: () => void): string => {
  if (!response.success) {
    console.error('API Error:', response);
    switch (response.statusCode) {
      case 400: return response.message || 'Invalid input provided';
      case 401:
        logout();
        window.location.href = '/pos-system/login';
        return 'Please log in to continue';
      case 403: return 'Access denied';
      case 404: return response.message || 'Resource not found';
      case 409: return response.message || 'Duplicate entry';
      case 500: return 'An unexpected server error occurred';
      default: return 'An unexpected error occurred';
    }
  }
  return '';
};

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://192.168.18.107:3000';

export const getAllOrders = async (token: string, logout: () => void): Promise<Order[]> => {
  try {
    const response = await fetch(`${API_BASE_URL}/orders/api/v1/list`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data: ApiResponse<Order[]> = await response.json();
    if (!data.success) {
      throw new Error(handleApiError(data, logout));
    }
    return 'data' in data.data ? data.data.data : data.data || [];
  } catch (err) {
    console.error('Error in getAllOrders:', err);
    throw new Error(err instanceof Error ? err.message : 'Failed to fetch orders');
  }
};

export const createOrder = async (
    token: string,
    logout: () => void,
    items: OrderItem[],
    orderData: OrderData
): Promise<Order> => {
  try {
    const response = await fetch(`${API_BASE_URL}/orders/api/v1/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ items, ...orderData }),
    });
    if (response.status === 401) {
      logout();
      window.location.href = '/pos-system/login';
      throw new Error('Unauthorized');
    }
    const data: ApiResponse<Order> = await response.json();
    if (!response.ok || !data.success) {
      throw new Error(handleApiError(data, logout));
    }
    if ('data' in data.data) {
      return data.data.data;
    }
    return data.data;
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Failed to create order';
    toast.error(message);
    throw err;
  }
};

export const updateOrder = async (
    token: string,
    logout: () => void,
    order_id: string,
    items: OrderItem[]
): Promise<Order> => {
  try {
    const response = await fetch(`${API_BASE_URL}/orders/api/v1/update`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ order_id, items }),
    });
    const data: ApiResponse<Order> = await response.json();
    if (!response.ok || !data.success) {
      throw new Error(handleApiError(data, logout));
    }
    if ('data' in data.data) {
      return data.data.data;
    }
    return data.data;
  } catch (err) {
    throw new Error(err instanceof Error ? err.message : 'Failed to update order');
  }
};

export const confirmOrder = async (
    token: string,
    logout: () => void,
    order_id: string,
    preparation_time: number
): Promise<void> => {
  try {
    const response = await fetch(`${API_BASE_URL}/orders/api/v1/confirm`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ order_id, preparation_time }),
    });
    const data: ApiResponse<void> = await response.json();
    if (!response.ok || !data.success) {
      throw new Error(handleApiError(data, logout));
    }
  } catch (err) {
    throw new Error(err instanceof Error ? err.message : 'Failed to confirm order');
  }
};

export const markOrderAsReady = async (token: string, logout: () => void, order_number: number): Promise<void> => {
  try {
    const response = await fetch(`${API_BASE_URL}/orders/api/v1/ready`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ order_number }),
    });
    const data: ApiResponse<void> = await response.json();
    if (!response.ok || !data.success) {
      throw new Error(handleApiError(data, logout));
    }
  } catch (err) {
    throw new Error(err instanceof Error ? err.message : 'Failed to mark order as ready');
  }
};

export const markOrderAsPicked = async (token: string, logout: () => void, order_number: number): Promise<void> => {
  try {
    const response = await fetch(`${API_BASE_URL}/orders/api/v1/picked`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ order_number }),
    });
    const data: ApiResponse<void> = await response.json();
    if (!response.ok || !data.success) {
      throw new Error(handleApiError(data, logout));
    }
  } catch (err) {
    throw new Error(err instanceof Error ? err.message : 'Failed to mark order as picked');
  }
};

export const cancelOrder = async (token: string, logout: () => void, order_id: string): Promise<void> => {
  try {
    const response = await fetch(`${API_BASE_URL}/orders/api/v1/cancel`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ order_id }),
    });
    const data: ApiResponse<void> = await response.json();
    if (!response.ok || !data.success) {
      throw new Error(handleApiError(data, logout));
    }
  } catch (err) {
    throw new Error(err instanceof Error ? err.message : 'Failed to cancel order');
  }
};