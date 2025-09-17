import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Phone, Clock, MessageCircle } from "lucide-react";
import { useState } from "react";

const Satisfaction = () => {
  const [spotlight, setSpotlight] = useState<{ x: number; y: number; active: boolean }>({
    x: 0,
    y: 0,
    active: false,
  });
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-primary/10 text-primary mb-3">
            Garantia de satisfação
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Transforme fotos em vendas reais
          </h2>
          <p className="text-lg text-muted-foreground">
            Imagens profissionais que aumentam o interesse, elevam o ticket médio e aceleram a decisão de compra.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-10">
          <Card className="border-0 shadow-large transform transition duration-300 hover:scale-110">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center text-xl">
                <Target className="h-5 w-5 mr-2 text-primary" />
                Resultado que importa
              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              Mais cliques e conversões nas suas ofertas com fotos que vendem.
            </CardContent>
          </Card>

          <Card className="border-0 shadow-large transform transition duration-300 hover:scale-110">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center text-xl">
                <Clock className="h-5 w-5 mr-2 text-primary" />
                Entrega rápida
              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              Prazos ágeis para você começar a vender melhor o quanto antes.
            </CardContent>
          </Card>

          <Card className="border-0 shadow-large transform transition duration-300 hover:scale-110">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center text-xl">
                <Phone className="h-5 w-5 mr-2 text-primary" />
                Atendimento humano
              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              Fale direto no WhatsApp para receber uma recomendação e um valor justo.
            </CardContent>
          </Card>
        </div>

        <div 
          className="relative bg-gradient-hero rounded-3xl p-8 md:p-12 text-white max-w-6xl mx-auto overflow-hidden"
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
          <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="max-w-2xl">
              <h3 className="text-3xl font-bold mb-2">Pronto para vender mais com fotos melhores?</h3>
              <p className="text-white">
                Fale agora no WhatsApp, receba uma análise gratuita e um plano simples para suas imagens.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                variant="service"
                className="min-w-[260px]"
                onClick={() =>
                  window.open(
                    'https://wa.me/5532999940335?text=Olá,%20vi%20o%20site%20da%20Visuarte%20e%20quero%20melhorar%20minhas%20imagens%20para%20vender%20mais.',
                    '_blank'
                  )
                }
              >
                <MessageCircle className="h-4 w-4 mr-2" />
                Conversar no WhatsApp
              </Button>
              <Button
                variant="secondary"
                className="bg-white text-foreground hover:bg-white/90"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Ver serviços
              </Button>
            </div>
          </div>
          <div className="relative z-10 flex flex-wrap items-center gap-4 mt-6 text-sm text-white/80">
            <span>500+ negócios atendidos</span>
            <span className="opacity-50">•</span>
            <span>Média de 4,9/5 em satisfação</span>
            <span className="opacity-50">•</span>
            <span>Desconto para volumes maiores</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Satisfaction;