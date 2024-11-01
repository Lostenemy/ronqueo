import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Home } from 'lucide-react';

export default function ThankYou() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="text-center">
        <div className="flex justify-center mb-6">
          <CheckCircle className="h-16 w-16 text-green-500" />
        </div>
        <h1 className="text-4xl font-bold mb-4 text-green-800">¡Gracias por registrarte!</h1>
        <p className="text-xl text-gray-600 mb-8">
          Nos pondremos en contacto contigo pronto con más detalles sobre el evento.
        </p>
        <Link
          to="/"
          className="inline-flex items-center bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
        >
          <Home className="mr-2 h-5 w-5" />
          Volver al inicio
        </Link>
      </div>
    </div>
  );
}