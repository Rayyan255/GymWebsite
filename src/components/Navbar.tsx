import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Dumbbell, Menu, X, Phone, Mail } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black/95 fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Dumbbell className="h-8 w-8 text-red-600" />
              <span className="text-2xl font-bold">Ray Fitness</span>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <Link to="/" className="hover:text-red-600 transition-colors">Home</Link>
              <Link to="/about" className="hover:text-red-600 transition-colors">About</Link>
              <Link to="/coaches" className="hover:text-red-600 transition-colors">Fitness Coaches</Link>
              <Link to="/contact" className="hover:text-red-600 transition-colors">Contact</Link>
              <a href="tel:+1234567890" className="flex items-center space-x-1 bg-red-600 px-4 py-2 rounded-md hover:bg-red-700 transition-colors">
                <Phone className="h-4 w-4" />
                <span>Call Now</span>
              </a>
            </div>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/95">
            <Link to="/" className="block px-3 py-2 hover:text-red-600">Home</Link>
            <Link to="/about" className="block px-3 py-2 hover:text-red-600">About</Link>
            <Link to="/coaches" className="block px-3 py-2 hover:text-red-600">Fitness Coaches</Link>
            <Link to="/contact" className="block px-3 py-2 hover:text-red-600">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;