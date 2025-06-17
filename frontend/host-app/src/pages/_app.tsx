import { useState, useEffect } from 'react';
import { AppProps } from 'next/app';
import { AuthProvider, useAuth } from '../context/AuthContext';
import Sidebar from '../components/Sidebar';
import 'shared-tailwind/styles';

type CustomAppProps = AppProps & {
    router: AppProps['router'];
};

function AppContent({ Component, pageProps, router }: CustomAppProps) {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(false);
    const { isAuthenticated, isLoading } = useAuth();

    useEffect(() => {
        document.documentElement.classList.toggle('dark', darkMode);
    }, [darkMode]);

    const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
    const toggleDarkMode = () => setDarkMode(!darkMode);

    if (isLoading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
            </div>
        );
    }

    return (
        <div className={`flex min-h-screen ${darkMode ? 'dark' : ''}`}>
            {isAuthenticated && <Sidebar className={sidebarOpen ? 'translate-x-0' : ''} />}
            <div className="flex-1 flex flex-col">
                <header className="fixed top-0 left-0 right-0 bg-gray-800 text-white flex items-center justify-between p-4 z-30 md:hidden">
                    <button onClick={toggleSidebar} className="p-2">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                    <span className="text-lg font-semibold">Restaurant Admin</span>
                    <button onClick={toggleDarkMode} className="p-2">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={darkMode ? 'M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z' : 'M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z'} />
                        </svg>
                    </button>
                </header>
                <main className="flex-1 pt-16 md:pl-64">
                    <Component {...pageProps} />
                </main>
            </div>
        </div>
    );
}

export default function MyApp({ Component, pageProps, router }: CustomAppProps) {
    return (
        <AuthProvider>
            <AppContent Component={Component} pageProps={pageProps} router={router} />
        </AuthProvider>
    );
}