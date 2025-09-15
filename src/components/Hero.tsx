import { Button } from "@/components/ui/button";
import foodImage from "@/assets/food-before-after.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-hero opacity-90" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Logo/Brand */}
          <div className="mb-8 flex flex-col items-center">
            <img 
              src="/lovable-uploads/f8f15b49-9d50-49de-876f-1ffddfa2c3c9.png" 
              alt="Visuarte Logo"
              className="h-48 w-auto mb-6 drop-shadow-2xl filter brightness-0 invert"
            />
            <p className="text-xl md:text-2xl font-light tracking-wide opacity-90">
              Visuarte: imagens que vendem por você
            </p>
          </div>

          {/* Main Headline */}
          <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
            Aumente suas vendas com imagens que <span className="text-white bg-secondary/20 px-2 py-1 rounded-lg">vendem mais</span>
          </h2>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Nossa equipe especializada transforma suas fotos de produtos, cardápios e imóveis em 
            imagens profissionais que convertem visitantes em clientes. Porque quem vê, compra.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-10">
            <Button variant="futuristic" size="lg" className="min-w-[200px]">
              🚀 Solicitar Orçamento
            </Button>
            <Button variant="outline-hero" size="lg" className="min-w-[200px]">
              ⭐ Ver Portfólio
            </Button>
          </div>

          {/* Social Proof */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <p className="text-white/60 mb-4">Já transformamos mais de 500 negócios</p>
            <div className="flex justify-center items-center gap-8 text-sm text-white/50">
              <span>📱 iFood</span>
              <span>🏠 Imóveis</span>
              <span>🚗 Automóveis</span>
              <span>🍕 Restaurantes</span>
            </div>
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