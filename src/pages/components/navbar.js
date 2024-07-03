import React from 'react';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <img className="hidden lg:block h-8 w-auto" src="/logo.svg" alt="Logo" />
          </div>
          <div className="flex">
            <a href="/" className="text-gray-900 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium">Início</a>
            <a href="/veiculos" className="text-gray-900 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium">Veículos</a>
            <a href="/sobre" className="text-gray-900 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium">Sobre</a>
            <a href="/contato" className="text-gray-900 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium">Contato</a>
          </div>
        </div>
      </div>
    </nav>
  );
}
