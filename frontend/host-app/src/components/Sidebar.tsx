import {
  HomeIcon,
  UsersIcon,
  ChartBarIcon,
  ShoppingBagIcon,
  ArrowRightOnRectangleIcon,
} from '@heroicons/react/24/outline';
import { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { useAuth } from '../context/AuthContext';

type SidebarProps = {
  className?: string;
};

const navItems = [
  { name: 'Dashboard', icon: HomeIcon, href: '/dashboard' },
  { name: 'Menu Management', icon: ShoppingBagIcon, href: '/MenuManagement' },
  { name: 'Orders', icon: ChartBarIcon, href: '/Orders' },
  { name: 'Roles Management', icon: UsersIcon, href: '/RoleAndUserManagement' },
];

export default function Sidebar({ className }: SidebarProps) {
  const pathname = usePathname();
  const router = useRouter();
  const { logout } = useAuth();
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setSidebarOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleLogout = async () => {
    try {
      logout();
      setSidebarOpen(false);
      await router.push('/login');
    } catch (error) {
      console.error('Logout redirect failed:', error);
      window.location.href = '/login';
    }
  };

  return (
      <>
        <aside
            className={`fixed md:static z-40 w-56 md:w-64 bg-gradient-to-b from-gray-800 to-gray-900 text-white flex flex-col shadow-2xl transform transition-all duration-300 ease-in-out ${className} ${
                sidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
            } h-screen`}
        >
          <div className="p-6 text-2xl font-bold border-b border-gray-700 flex items-center gap-3">
            <span className="text-yellow-400">🍽️</span>
            <span className="tracking-tight">Restaurant Admin</span>
          </div>
          <nav className="mt-6 flex-1 space-y-1 px-4">
            {navItems.map(({ name, icon: Icon, href }) => (
                <a
                    key={name}
                    href={href}
                    className={`flex items-center px-4 py-3 rounded-lg transition-all duration-200 ${
                        pathname === href
                            ? 'bg-gray-700 text-white shadow-md'
                            : 'text-gray-200 hover:bg-gray-700 hover:text-white'
                    }`}
                    onClick={() => setSidebarOpen(false)}
                >
                  <Icon className="w-5 h-5 mr-3" />
                  <span className="text-sm font-medium">{name}</span>
                </a>
            ))}
          </nav>
          <div className="p-4 border-t border-gray-700">
            <button
                onClick={handleLogout}
                className="w-full flex items-center px-4 py-3 rounded-lg text-gray-200 hover:bg-red-600 hover:text-white transition-all duration-200"
            >
              <ArrowRightOnRectangleIcon className="w-5 h-5 mr-3" />
              <span className="text-sm font-medium">Logout</span>
            </button>
          </div>
        </aside>
        {sidebarOpen && (
            <div
                className="fixed inset-0 bg-black/50 z-30 md:hidden"
                onClick={() => setSidebarOpen(false)}
            />
        )}
      </>
  );
}