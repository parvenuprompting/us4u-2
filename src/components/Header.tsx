import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`relative text-gray-600 hover:text-brand transition-colors group ${
        isActive ? 'text-brand' : ''
      }`}
    >
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand transition-all group-hover:w-full" />
    </Link>
  );
};

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link to="/">
              <img src="https://i.imgur.com/diSP3eH.png" alt="Us4U Security Logo" className="h-16 w-auto hover:opacity-90 transition-opacity" />
            </Link>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <NavLink to="/services">Diensten</NavLink>
            <NavLink to="/about">Over Ons</NavLink>
            <NavLink to="/careers">Werken bij</NavLink>
            <NavLink to="/quote">Offerte</NavLink>
          </nav>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-brand"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg">
            <Link
              to="/services"
              className="block px-3 py-2 text-gray-600 hover:text-brand"
              onClick={() => setIsOpen(false)}
            >
              Diensten
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 text-gray-600 hover:text-brand"
              onClick={() => setIsOpen(false)}
            >
              Over Ons
            </Link>
            <Link
              to="/careers"
              className="block px-3 py-2 text-gray-600 hover:text-brand"
              onClick={() => setIsOpen(false)}
            >
              Werken bij
            </Link>
            <Link
              to="/quote"
              className="block px-3 py-2 text-gray-600 hover:text-brand"
              onClick={() => setIsOpen(false)}
            >
              Offerte
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}