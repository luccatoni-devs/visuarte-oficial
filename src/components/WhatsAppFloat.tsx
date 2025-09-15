import { MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";

const WhatsAppFloat = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [showTooltip, setShowTooltip] = useState(false);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Olá, acabei de visitar o site da Visuarte e gostaria de solicitar um orçamento gratuito para melhoria de imagens.");
    const phoneNumber = "5532999940335";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    
    window.open(whatsappUrl, '_blank');
  };

  // Mostrar tooltip após 3 segundos
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Botão Principal */}
      <button
        onClick={handleWhatsAppClick}
        className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 group relative mb-20 sm:mb-0"
        aria-label="Conversar no WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
        
        {/* Tooltip */}
        <div className={`absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white text-sm px-3 py-2 rounded-lg transition-opacity duration-300 whitespace-nowrap pointer-events-none ${
          showTooltip ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
        }`}>
          Fale conosco no WhatsApp!
          <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-l-gray-900"></div>
        </div>
      </button>

      {/* Animação de Pulsação */}
      <div className="absolute top-0 left-0 bg-green-500 rounded-full p-4 animate-ping opacity-20 pointer-events-none">
        <MessageCircle className="h-6 w-6 text-white" />
      </div>

      {/* Botão de Fechar */}
      <button
        onClick={() => setIsVisible(false)}
        className="absolute -top-12 right-0 bg-gray-500 hover:bg-gray-600 text-white rounded-full p-2 shadow-lg transition-all duration-300 text-xs"
        aria-label="Fechar botão do WhatsApp"
      >
        ✕
      </button>
    </div>
  );
};

export default WhatsAppFloat;
