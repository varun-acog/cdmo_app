'use client';
import Link from 'next/link';
import { Home, Package, Users, BarChart3, MessageSquare, Bell, LogOut } from 'lucide-react';
import { useNav } from '@/context/NavContext';

export default function Navbar() {
  const { active, setActive } = useNav();

  const navItems = [
    { id: 'home', label: 'Home', icon: Home, path: '/' },
    { id: 'materials', label: 'Materials', icon: Package, path: '/materials' },
    { id: 'suppliers', label: 'Suppliers', icon: Users, path: '/suppliers' },
    { id: 'programs', label: 'Programs', icon: Users, path: '/programs' },
    { id: 'analytics', label: 'Analytics', icon: BarChart3, path: '/analytics' },
    { id: 'demo', label: 'Demo', icon: MessageSquare, path: '/demo' },
  ];

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={item.path}
                onClick={() => setActive(item.id)}
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                  active === item.id
                    ? 'border-indigo-500 text-gray-900'
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                }`}
              >
                <item.icon className="w-5 h-5 mr-2" />
                {item.label}
              </Link>
            ))}
          </div>
          <div className="flex items-center">
            <button className="p-2 text-gray-500 hover:text-gray-700">
              <Bell className="w-5 h-5" />
            </button>
            <button className="ml-4 p-2 text-gray-500 hover:text-gray-700">
              <LogOut className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}