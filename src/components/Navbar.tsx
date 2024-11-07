import React from 'react';
import { Link } from 'react-router-dom';
import { Car, User, LogIn } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Car className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">DriveMate</span>
            </Link>
            
            <div className="hidden md:flex items-center space-x-4 ml-8">
              <Link to="/cars" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                Cars
              </Link>
              <Link to="/about" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                About
              </Link>
              <Link to="/contact" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                Contact
              </Link>
              <Link to="/dashboard" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                Dashboard
              </Link>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link to="/register" className="inline-flex items-center space-x-1 bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700">
              <User className="h-4 w-4" />
              <span>Register</span>
            </Link>
            <Link to="/login" className="inline-flex items-center space-x-1 border border-blue-600 text-blue-600 px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-50">
              <LogIn className="h-4 w-4" />
              <span>Login</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}