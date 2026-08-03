import React from 'react';

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5549991052315?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20serviços."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 p-3.5 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full shadow-[0_4px_14px_0_rgba(37,211,102,0.39)] hover:shadow-[0_6px_20px_rgba(37,211,102,0.23)] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center group"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-7 h-7"
      >
        <path d="M16.6 14c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.2-.6.8-.8 1-.1.2-.3.2-.5.1-.7-.3-1.4-.7-2-1.2-.5-.5-1-1.1-1.4-1.7-.1-.2 0-.4.1-.5.1-.1.2-.3.4-.4.1-.1.2-.3.2-.4.1-.2 0-.4 0-.5C10 9 9.3 7.6 9 7c-.1-.4-.3-.5-.5-.5h-.5c-.2 0-.5.2-.8.4-.7.6-1.3 1.5-1.3 2.5 0 1.2.6 2.3 1.6 3.6 1.4 1.7 3.2 3 5.4 3.7.8.2 1.5.3 2.3.3.9 0 1.8-.2 2.6-.7.6-.4 1.1-1.1 1.2-1.8.1-.6 0-1.1-.1-1.2-.1-.2-.3-.2-.5-.3z"/>
        <path d="M12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.4 5l-1.3 4.8 4.9-1.3C8.4 21.5 10.2 22 12 22c5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18c-1.5 0-3-.4-4.2-1.1l-.3-.2-3.1.8.8-3-.2-.3C4.4 14.9 4 13.5 4 12c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8z"/>
      </svg>
      <span className="absolute right-full mr-4 bg-gray-900/90 backdrop-blur text-white text-xs px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-gray-800 shadow-xl">
        Fale conosco no WhatsApp
      </span>
    </a>
  );
}
