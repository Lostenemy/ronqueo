import React from 'react';
import { Fish } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-green-800 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Fish className="h-6 w-6" />
            <span>El Pasaje de Zabalburu © {new Date().getFullYear()}</span>
          </div>
          <div className="text-sm">
            <p>Tradición y Cultura del Atún</p>
          </div>
        </div>
      </div>
    </footer>
  );
}