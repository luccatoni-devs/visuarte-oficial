import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Rocket, Star, Smartphone, Home, Car, ChefHat } from "lucide-react";
import foodImage from "@/assets/food-before-after.jpg";
// Logo servida do diretório public

const Hero = () => {
  const [spotlight, setSpotlight] = useState<{ x: number; y: number; active: boolean }>({
    x: 0,
    y: 0,
    active: false,
  });
  return (
    <section
      className="relative flex items-center justify-center overflow-hidden py-8 md:py-10"
      onMouseMove={(e) => {
        const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
        setSpotlight({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
          active: true,
        });
      }}
      onMouseLeave={() => setSpotlight((s) => ({ ...s, active: false }))}
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-hero opacity-90" />
      {/* Spotlight hover highlight */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-300"
        style={{
          background: spotlight.active
            ? `radial-gradient(600px circle at ${spotlight.x}px ${spotlight.y}px, rgba(255,255,255,0.18), rgba(255,255,255,0.08), transparent 70%)`
            : "transparent",
          opacity: spotlight.active ? 1 : 0,
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Logo/Brand */}
          <div className="mb-2 flex flex-col items-center">
            <img 
              src="/lovable-uploads/logo.png" 
              alt="Visuarte Logo"
              className="h-30 w-auto mb-2 drop-shadow-2xl filter brightness-0 invert hover:scale-110 transition-all duration-300"
            />
          </div>

          {/* Main Headline */}
          <h2 className="text-3xl md:text-5xl font-bold leading-snug pt-1 pb-1 mb-6 hero-title-shine">
            Aumente suas vendas com imagens que <span className="text-white px-2 py-1 rounded-lg">vendem mais</span>
          </h2>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Nossa equipe especializada transforma suas fotos de produtos, cardápios e imóveis em 
            imagens profissionais que convertem visitantes em clientes. Porque quem vê, compra.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-10">
            <Button 
              variant="futuristic" 
              size="lg" 
              className="min-w-[200px]"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Rocket className="h-5 w-5 mr-2" />
              Solicitar Orçamento
            </Button>
            <Button 
              variant="outline-hero" 
              size="lg" 
              className="min-w-[200px] hover:scale-110 transition-all duration-300"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Star className="h-5 w-5 mr-2" />
              Ver Portfólio
            </Button>
          </div>
        </div>
      </div>

      {/* Floating Elements - Futuristic */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-neon opacity-20 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-gradient-futuristic opacity-30 rounded-full blur-lg animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-10 w-16 h-16 bg-primary/20 rounded-full blur-md animate-pulse delay-500" />
      <div className="absolute bottom-1/3 right-10 w-20 h-20 bg-accent/20 rounded-full blur-lg animate-pulse delay-2000" />
    </section>
  );
};

export default Hero;