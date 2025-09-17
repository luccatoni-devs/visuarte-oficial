import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { TrendingUp, Target, Camera, Home, DollarSign, Car, Zap, Gem, Play, Sparkles, Image, ChevronLeft, ChevronRight, MousePointer2 } from "lucide-react";
import { useState, useEffect } from "react";
import foodImage from "@/assets/food-before-after-complete.jpg";
import realEstateImage from "@/assets/real-estate-before-after-new.jpg";
import automotiveImage from "@/assets/automotive-before-after-complete.jpg";
import ServiceModal from "./services/ServiceModal";

const Services = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [api, setApi] = useState<any>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

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
      category: "food",
      detailedInfo: {
        fullDescription: "Especializados em fotografia gastronômica para delivery, transformamos pratos simples em imagens que despertam o apetite e aumentam significativamente as vendas online.",
        process: [
          "Análise do cardápio atual",
          "Sessão fotográfica profissional",
          "Edição e otimização das imagens",
          "Entrega em formatos otimizados"
        ],
        pricing: "A partir de R$ 299",
        deliveryTime: "3-5 dias úteis",
        includes: [
          "10 fotos editadas",
          "Formatos para iFood e Uber Eats",
          "Consultoria de apresentação",
          "Revisões ilimitadas"
        ]
      }
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
      category: "realestate",
      detailedInfo: {
        fullDescription: "Criamos imagens que valorizam cada ambiente do seu imóvel, destacando os pontos fortes e criando uma apresentação visual que acelera vendas e locações.",
        process: [
          "Visita técnica ao imóvel",
          "Planejamento dos ângulos",
          "Captura e edição profissional",
          "Entrega otimizada para portais"
        ],
        pricing: "A partir de R$ 399",
        deliveryTime: "2-4 dias úteis",
        includes: [
          "15 fotos editadas",
          "Tour virtual 360°",
          "Otimização para portais",
          "Certificado de qualidade"
        ]
      }
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
      category: "automotive",
      detailedInfo: {
        fullDescription: "Transformamos fotos amadoras de veículos em imagens profissionais que destacam cada detalhe, criando uma apresentação premium que atrai compradores.",
        process: [
          "Preparação do veículo",
          "Sessão em estúdio virtual",
          "Retoque de imperfeições",
          "Criação de variações"
        ],
        pricing: "A partir de R$ 199",
        deliveryTime: "24-48 horas",
        includes: [
          "8 ângulos diferentes",
          "Remoção de riscos menores",
          "Fundo personalizado",
          "Otimização para OLX/Webmotors"
        ]
      }
    },
    {
      title: "Live Photo",
      description: "Transformamos suas fotos estáticas em imagens dinâmicas e interativas que capturam a atenção.",
      image: foodImage,
      benefits: [
        { icon: Play, text: "Movimento dinâmico" },
        { icon: Sparkles, text: "Efeito cinematográfico" },
        { icon: Image, text: "Engagement 3x maior" }
      ],
      category: "livephoto",
      detailedInfo: {
        fullDescription: "Criamos imagens com movimento sutil e efeitos cinematográficos que tornam suas fotos mais envolventes e chamativas em redes sociais e apresentações.",
        process: [
          "Análise da imagem original",
          "Criação de camadas de movimento",
          "Aplicação de efeitos visuais",
          "Renderização em alta qualidade"
        ],
        pricing: "A partir de R$ 99",
        deliveryTime: "1-2 dias úteis",
        includes: [
          "Efeito de paralaxe",
          "Movimento suave",
          "Formatos para redes sociais",
          "Versão estática incluída"
        ]
      }
    }
  ];

  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setCurrentSlide(api.selectedScrollSnap());
      setCanScrollPrev(api.canScrollPrev());
      setCanScrollNext(api.canScrollNext());
    };

    api.on("select", onSelect);
    api.on("reInit", onSelect);
    onSelect();

    return () => {
      api.off("select", onSelect);
      api.off("reInit", onSelect);
    };
  }, [api]);

  // Calculate number of pages based on visible slides
  const getVisibleSlides = () => {
    if (!api) return 1;
    return Math.ceil(services.length / api.slidesInView().length);
  };

  const getTotalPages = () => {
    if (!api) return Math.ceil(services.length / 3); // Default assumption
    return api.scrollSnapList().length;
  };

  const scrollTo = (index: number) => {
    api?.scrollTo(index);
  };

  const scrollPrev = () => {
    api?.scrollPrev();
  };

  const scrollNext = () => {
    api?.scrollNext();
  };

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

        <div className="max-w-6xl mx-auto">
          <Carousel setApi={setApi} className="w-full">
            <CarouselContent className="-ml-2 md:-ml-4">
              {services.map((service, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Card className="group card-futuristic transition-all duration-500 hover:-translate-y-2 overflow-hidden h-full cursor-pointer">
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
                          
                          <div className="text-center text-sm text-muted-foreground mt-4 flex items-center justify-center gap-2">
                            <MousePointer2 className="h-4 w-4" />
                            Clique para ver mais detalhes
                          </div>
                        </CardContent>
                      </Card>
                    </DialogTrigger>
                    
                    <ServiceModal service={service} />
                  </Dialog>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          
          {/* Custom Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full"
              onClick={scrollPrev}
              disabled={!canScrollPrev}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            
            <div className="flex gap-2">
              {Array.from({ length: getTotalPages() }).map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'bg-primary w-6' : 'bg-muted-foreground/30'
                  }`}
                  onClick={() => scrollTo(index)}
                />
              ))}
            </div>
            
            <Button
              variant="outline"
              size="icon"
              className="rounded-full"
              onClick={scrollNext}
              disabled={!canScrollNext}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;