import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, Target, Camera, Home, DollarSign, Car, Zap, Gem, Rocket } from "lucide-react";
import foodImage from "@/assets/food-before-after-complete.jpg";
import realEstateImage from "@/assets/real-estate-before-after-new.jpg";
import automotiveImage from "@/assets/automotive-before-after-complete.jpg";

const Services = () => {
  const services = [
    {
      title: "Restaurantes & iFood",
      description: "Transformamos suas fotos de pratos em imagens irresistíveis que aumentam pedidos e conversões no delivery.",
      image: foodImage,
      benefits: [
        { icon: TrendingUp, text: "65% mais pedidos" },
        { icon: Target, text: "Destaque no app" },
        { icon: Camera, text: "Fotos profissionais" }
      ],
      category: "food"
    },
    {
      title: "Imóveis",
      description: "Valorizamos seus imóveis com fotos que destacam o potencial e aceleram vendas e locações.",
      image: realEstateImage,
      benefits: [
        { icon: Home, text: "Venda mais rápida" },
        { icon: DollarSign, text: "Maior valor percebido" },
        { icon: TrendingUp, text: "Mais visitas" }
      ],
      category: "realestate"
    },
    {
      title: "Automóveis",
      description: "Suas fotos de veículos ganham qualidade showroom, atraindo mais compradores interessados.",
      image: automotiveImage,
      benefits: [
        { icon: Car, text: "Aparência premium" },
        { icon: Zap, text: "Venda acelerada" },
        { icon: Gem, text: "Maior valorização" }
      ],
      category: "automotive"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Nossos Serviços
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Especializados em diferentes segmentos, oferecemos soluções personalizadas 
            para cada tipo de negócio
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className="group card-futuristic transition-all duration-500 hover:-translate-y-2 overflow-hidden">
              <div className="relative overflow-hidden">
                <img 
                  src={service.image} 
                  alt={`${service.title} - Antes e Depois`}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <CardHeader className="space-y-3">
                <CardTitle className="text-xl font-bold text-foreground">
                  {service.title}
                </CardTitle>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  {service.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center text-sm text-accent font-medium">
                      <benefit.icon className="h-4 w-4 mr-2" />
                      {benefit.text}
                    </div>
                  ))}
                </div>
                
                <Button 
                  variant="futuristic" 
                  className="w-full mt-4"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <Rocket className="h-5 w-5 mr-2" />
                  Solicitar Orçamento
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="primary" size="lg">
            Ver Todos os Serviços
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;