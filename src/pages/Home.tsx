import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="space-y-16 py-8">
      {/* Hero Section */}
      <div className="relative h-[70vh]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80"
            alt="Restaurante interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-5xl font-bold mb-4">El Arte del Ronqueo</h1>
            <p className="text-xl mb-8">Descubre la tradición del despiece del atún en El Pasaje de Zabalburu</p>
            <Link
              to="/registro"
              className="inline-flex items-center bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
            >
              Reserva tu plaza
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80"
            alt="Murcia ciudad"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2 text-green-800">Cultura Murciana</h3>
            <p className="text-gray-600">Fusión de tradición pesquera y gastronomía local</p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1528825871115-3581a5387919?auto=format&fit=crop&q=80"
            alt="Pescado fresco"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2 text-green-800">Maestría Artesanal</h3>
            <p className="text-gray-600">Aprende de expertos ronqueadores profesionales</p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&q=80"
            alt="Gastronomía"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2 text-green-800">Experiencia Única</h3>
            <p className="text-gray-600">Vive una demostración gastronómica inolvidable</p>
          </div>
        </div>
      </div>
    </div>
  );
}