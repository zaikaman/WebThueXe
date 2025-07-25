'use client';
import { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const menuItems = [
    { label: 'TRANG CHỦ', href: '/' },
    { label: 'BÀI VIẾT', href: '/blog' },
    { label: 'BẢNG GIÁ LIMO VŨNG TÀU', href: '/bang-gia-limo-vung-tau' },
    { label: 'BẢNG GIÁ LIMO PHAN THIẾT', href: '/bang-gia-limo-phan-thiet' },
    { label: 'BẢNG GIÁ THUÊ XE 4 CHỖ', href: '/bang-gia-xe-4-cho' },
    { label: 'BẢNG GIÁ THUÊ XE 7 CHỖ', href: '/bang-gia-xe-7-cho' },
    { label: 'LOGIN', href: '/login' },
    { label: 'NEWSLETTER', href: '/newsletter' },
  ];

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <header className="bg-white shadow-lg sticky top-0 z-40">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center">
                <div className="bg-blue-900 text-white px-3 py-2 lg:px-4 lg:py-2 rounded-lg font-bold text-sm lg:text-lg">
                  THUÊ XE LIÊN TỈNH 24H
                </div>
              </Link>
            </div>

            {/* Right side: Menu button + CTA button */}
            <div className="flex items-center gap-3">
              {/* CTA Button */}
              <a
                href="tel:0962229122"
                className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 lg:px-6 lg:py-3 rounded-full font-semibold transition-colors duration-200 inline-flex items-center gap-2 text-sm lg:text-base"
              >
                <svg className="w-4 h-4 lg:w-5 lg:h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span className="hidden sm:inline">GỌI NGAY HOTLINE</span>
                <span className="sm:hidden">GỌI</span>
              </a>
              
              {/* Menu Button */}
              <button
                onClick={toggleSidebar}
                className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
                aria-label="Menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 z-40"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }}
          onClick={toggleSidebar}
        />
      )}
      
      {/* Sidebar */}
      <div className={`fixed top-0 left-0 h-full w-80 bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-50 ${
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        {/* Sidebar Header */}
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div className="bg-blue-900 text-white px-3 py-2 rounded-lg font-bold text-sm">
              THUÊ XE LIÊN TỈNH 24H
            </div>
            <button
              onClick={toggleSidebar}
              className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Search Box */}
        <div className="p-4 border-b border-gray-200">
          <div className="relative">
            <input
              type="search"
              placeholder="Search..."
              className="w-full px-4 py-2 pl-4 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white bg-orange-500 hover:bg-orange-600 rounded px-2 py-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Menu Items */}
        <div className="flex-1 overflow-y-auto">
          <nav className="p-4">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="block py-3 text-gray-700 hover:text-blue-600 font-medium border-b border-gray-100 last:border-b-0 transition-colors"
                onClick={toggleSidebar}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Newsletter Icon */}
        <div className="p-4 border-t border-gray-200">
          <div className="flex justify-center">
            <button className="text-blue-600 hover:text-blue-700 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header; 