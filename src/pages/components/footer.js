import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-200 py-4 text-center">
      <div className="container mx-auto">
        <p>&copy; {new Date().getFullYear()} Seu Site. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
