import React from 'react';
import { Link } from 'react-router-dom';
import { Fish } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-green-800 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Fish className="h-8 w-8" />
            <span className="font-bold text-xl">El Pasaje de Zabalburu</span>
          </Link>
          <div className="flex space-x-4">
            <Link to="/" className="hover:text-green-200 transition">Inicio</Link>
            <Link to="/registro" className="hover:text-green-200 transition">Registro</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}