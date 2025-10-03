import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Clock, Users, Shield, Gift, Play, Star } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const OfertaEspecial = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { hours: prev.hours, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const whatsappNumber = "5511999999999";
  const whatsappMessage = encodeURIComponent("Olá! Vim pela oferta especial e quero saber mais sobre os planos!");

  const handleCTA = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, "_blank");
  };

  const plans = [
    {
      name: "Destaque",
      price: "R$ 99,90",
      originalPrice: "R$ 147,00",
      priceInstallment: "12x de R$ 10,23",
      photos: "3",
      features: [
        "3 fotos editadas profissionalmente",
        "Entrega em 24-48h",
        "Suporte por Whatsapp",
        "1 Revisão incluída",
        "Ajuste de cores e luz"
      ],
      paymentLink: "https://pay.kirvano.com/48246797-026e-42cf-94b0-07db7542cdf7"
    },
    {
      name: "Premium",
      price: "R$ 147,00",
      originalPrice: "R$ 247,00",
      priceInstallment: "12x de R$ 15,06",
      photos: "5",
      popular: true,
      features: [
        "5 fotos editadas profissionalmente",
        "Entrega em 24-48h",
        "Suporte prioritário",
        "3 revisões incluídas",
        "Orientações práticas de uso"
      ],
      paymentLink: "https://pay.kirvano.com/41737fd6-7f6c-41b1-8731-c6f77b0b6dcf"
    },
    {
      name: "Supreme",
      price: "R$ 197,00",
      originalPrice: "R$ 397,00",
      priceInstallment: "12x de R$ 20,19",
      photos: "10",
      features: [
        "10 fotos editadas profissionalmente",
        "Entrega em 12-24h",
        "7 fotos + 3 VisuMotion",
        "Suporte VIP personalizado",
        "Revisões ilimitadas"
      ],
      paymentLink: "https://pay.kirvano.com/0da0faa3-2eb4-4ed2-8740-0d4921bdd85f"
    }
  ];

  const testimonials = [
    {
      name: "Maria Silva",
      text: "Minhas vendas aumentaram 300% após usar as fotos da Visuarte. A qualidade é impressionante!",
      rating: 5,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Maria"
    },
    {
      name: "João Santos",
      text: "Profissionalismo incrível. As fotos transformaram completamente meu negócio de imóveis.",
      rating: 5,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Joao"
    },
    {
      name: "Ana Costa",
      text: "Atendimento rápido e resultado impecável. Super recomendo!",
      rating: 5,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ana"
    }
  ];

  const bonuses = [
    {
      icon: Gift,
      title: "Bônus #1: Guia Completo de Marketing Visual",
      description: "Aprenda a usar suas imagens para gerar mais vendas em todas as plataformas digitais.",
      value: "R$ 97,00"
    },
    {
      icon: Users,
      title: "Bônus #2: Consultoria Express (30min)",
      description: "Uma sessão exclusiva para orientar como aplicar suas imagens e potencializar resultados.",
      value: "R$ 197,00"
    },
    {
      icon: Star,
      title: "Bônus #3: Templates Premium",
      description: "5 templates profissionais prontos para usar nas suas redes sociais e anúncios.",
      value: "R$ 67,00"
    }
  ];

  const faqs = [
    {
      question: "Como funciona o processo após a compra?",
      answer: "Após a confirmação do pagamento, você receberá um e-mail com instruções para enviar suas fotos. Nossa equipe iniciará o trabalho imediatamente e você receberá as imagens editadas no prazo estipulado do seu plano."
    },
    {
      question: "Posso solicitar revisões?",
      answer: "Sim! Todos os planos incluem revisões. O plano Destaque tem 1 revisão, Premium tem 3 revisões e Supreme tem revisões ilimitadas."
    },
    {
      question: "Qual o prazo de entrega?",
      answer: "O prazo varia de acordo com o plano: Destaque e Premium têm entrega em 24-48h, enquanto o Supreme é entregue em 12-24h."
    },
    {
      question: "A garantia realmente funciona?",
      answer: "Sim! Você tem 7 dias para avaliar o trabalho. Se não ficar 100% satisfeito, devolvemos todo seu investimento sem perguntas."
    },
    {
      question: "Que tipo de fotos vocês editam?",
      answer: "Editamos fotos de produtos, imóveis, alimentos, automotivos e muito mais. Nossa especialidade é transformar fotos comuns em imagens profissionais que vendem."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Seção 1: Título e Vídeo */}
      <section className="relative min-h-screen flex items-center justify-center py-20 px-4 overflow-hidden bg-gradient-to-br from-primary via-primary/80 to-primary/60">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,hsl(var(--accent)/0.3),transparent_50%),radial-gradient(circle_at_70%_70%,hsl(var(--secondary)/0.2),transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--primary)/0.1)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary)/0.1)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
        
        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="text-center space-y-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight drop-shadow-2xl">
              A Maneira Mais Rápida de{" "}
              <span className="text-accent drop-shadow-glow">
                Aumentar Suas Vendas em 300%
              </span>{" "}
              Sem Precisar Ser Fotógrafo Profissional
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto drop-shadow-lg">
              Transforme suas fotos comuns em imagens profissionais que vendem. 
              Especial para empreendedores que querem resultados rápidos.
            </p>

            {/* Video Player Placeholder */}
            <div className="relative max-w-4xl mx-auto my-12">
              <div className="aspect-video bg-muted/30 rounded-2xl border-4 border-primary/20 shadow-2xl overflow-hidden backdrop-blur-sm">
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/20 to-secondary/20">
                  <div className="text-center space-y-4">
                    <div className="w-20 h-20 mx-auto bg-primary/90 rounded-full flex items-center justify-center shadow-glow hover:scale-110 transition-transform cursor-pointer">
                      <Play className="h-10 w-10 text-white ml-1" fill="white" />
                    </div>
                    <p className="text-lg font-semibold text-foreground">
                      Assista ao vídeo e descubra como transformar seu negócio
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Primeiro CTA */}
            <div className="space-y-4">
              <Button
                onClick={handleCTA}
                size="lg"
                className="text-xl px-12 py-8 h-auto bg-gradient-primary hover:shadow-large hover:scale-105 transition-all duration-300 font-bold animate-breathe"
              >
                QUERO GARANTIR MEU PLANO COM DESCONTO
              </Button>
              <p className="text-sm text-destructive font-semibold flex items-center justify-center gap-2">
                <Clock className="h-4 w-4" />
                Oferta por tempo limitado!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção 2: Urgência e Escassez */}
      <section className="py-12 bg-gradient-to-r from-destructive/10 via-destructive/5 to-destructive/10 border-y-2 border-destructive/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 text-foreground">
              Esta oferta termina em:
            </h3>
            
            <div className="flex justify-center gap-4 md:gap-8 mb-8">
              <div className="text-center">
                <div className="bg-card border-2 border-primary rounded-lg p-4 md:p-6 min-w-[80px] md:min-w-[100px] shadow-large">
                  <div className="text-4xl md:text-6xl font-bold text-primary">
                    {timeLeft.hours.toString().padStart(2, '0')}
                  </div>
                  <div className="text-sm text-muted-foreground mt-2">Horas</div>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-card border-2 border-primary rounded-lg p-4 md:p-6 min-w-[80px] md:min-w-[100px] shadow-large">
                  <div className="text-4xl md:text-6xl font-bold text-primary">
                    {timeLeft.minutes.toString().padStart(2, '0')}
                  </div>
                  <div className="text-sm text-muted-foreground mt-2">Minutos</div>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-card border-2 border-primary rounded-lg p-4 md:p-6 min-w-[80px] md:min-w-[100px] shadow-large">
                  <div className="text-4xl md:text-6xl font-bold text-primary">
                    {timeLeft.seconds.toString().padStart(2, '0')}
                  </div>
                  <div className="text-sm text-muted-foreground mt-2">Segundos</div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center gap-3 bg-card border-2 border-destructive rounded-full px-6 py-3 shadow-medium">
                <Users className="h-5 w-5 text-destructive" />
                <span className="text-lg font-semibold text-foreground">
                  Atenção: Apenas <span className="text-destructive font-bold">17 ofertas</span> restantes nesta condição especial
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção 3: Prova Social */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
            Veja o que nossos clientes estão dizendo
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Mais de 500 clientes satisfeitos transformaram seus negócios
          </p>

          <div className="max-w-5xl mx-auto">
            <Carousel className="w-full">
              <CarouselContent>
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <Card className="card-futuristic h-full">
                      <CardContent className="p-6 flex flex-col h-full">
                        <div className="flex gap-1 mb-4">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                          ))}
                        </div>
                        <p className="text-muted-foreground mb-4 flex-grow italic">
                          "{testimonial.text}"
                        </p>
                        <div className="flex items-center gap-3">
                          <img 
                            src={testimonial.avatar} 
                            alt={testimonial.name}
                            className="w-12 h-12 rounded-full border-2 border-primary/20"
                          />
                          <p className="font-semibold text-foreground">
                            {testimonial.name}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </section>

      {/* Seção de Métricas */}
      <section className="py-16 bg-gradient-to-r from-primary/5 via-accent/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <Card className="card-futuristic border-primary/20 bg-gradient-to-br from-primary/10 to-primary/5">
                <CardContent className="p-6">
                  <div className="text-5xl font-bold text-primary mb-2">500+</div>
                  <div className="text-sm text-muted-foreground font-medium">Clientes Satisfeitos</div>
                </CardContent>
              </Card>
            </div>
            <div className="text-center">
              <Card className="card-futuristic border-accent/20 bg-gradient-to-br from-accent/10 to-accent/5">
                <CardContent className="p-6">
                  <div className="text-5xl font-bold text-accent mb-2">98%</div>
                  <div className="text-sm text-muted-foreground font-medium">Taxa de Satisfação</div>
                </CardContent>
              </Card>
            </div>
            <div className="text-center">
              <Card className="card-futuristic border-primary/20 bg-gradient-to-br from-primary/10 to-primary/5">
                <CardContent className="p-6">
                  <div className="text-5xl font-bold text-primary mb-2">24h</div>
                  <div className="text-sm text-muted-foreground font-medium">Entrega Expressa</div>
                </CardContent>
              </Card>
            </div>
            <div className="text-center">
              <Card className="card-futuristic border-accent/20 bg-gradient-to-br from-accent/10 to-accent/5">
                <CardContent className="p-6">
                  <div className="text-5xl font-bold text-accent mb-2">+300%</div>
                  <div className="text-sm text-muted-foreground font-medium">Aumento em Vendas</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Seção 4: Planos e Preços */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Escolha o Plano Ideal Para Transformar Suas Vendas
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Todos os planos incluem edição profissional e garantia de satisfação
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`card-futuristic flex flex-col ${
                  plan.popular ? "border-2 border-primary scale-105 shadow-glow" : ""
                }`}
              >
                {plan.popular && (
                  <div className="bg-gradient-primary text-white text-center py-2 text-sm font-medium rounded-t-xl flex items-center justify-center">
                    <Star className="h-4 w-4 mr-1" />
                    MAIS VENDIDO
                  </div>
                )}

                <CardHeader className="text-center">
                  <CardTitle className="text-2xl font-bold text-foreground mb-4">
                    Plano {plan.name}
                  </CardTitle>
                  <div className="space-y-2">
                    <div className="text-lg text-muted-foreground line-through">
                      {plan.originalPrice}
                    </div>
                    <div className="text-5xl font-bold text-primary">{plan.price}</div>
                    <div className="text-sm text-muted-foreground">
                      ou {plan.priceInstallment}
                    </div>
                    <div className="text-lg text-foreground font-semibold">
                      {plan.photos} fotos editadas
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="flex-grow flex flex-col justify-between space-y-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm">
                        <Check className="h-5 w-5 text-accent mt-0.5 flex-none" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    onClick={() => window.open(plan.paymentLink, "_blank")}
                    variant={plan.popular ? "default" : "outline"}
                    className={`w-full ${plan.popular ? "bg-gradient-primary hover:shadow-large" : ""} hover:scale-105 transition-all`}
                    size="lg"
                  >
                    COMPRAR AGORA
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Seção 5: Bônus Exclusivos */}
      <section className="py-20 bg-gradient-to-br from-accent/10 via-primary/5 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Garanta seu plano hoje e receba +3 Bônus Incríveis
            </h2>
            <p className="text-2xl font-semibold text-primary">
              Valor Total: <span className="line-through text-muted-foreground">R$ 361,00</span>{" "}
              <span className="text-accent">GRÁTIS!</span>
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {bonuses.map((bonus, index) => {
              const Icon = bonus.icon;
              return (
                <Card key={index} className="card-futuristic text-center">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 mx-auto mb-6 bg-gradient-primary rounded-full flex items-center justify-center shadow-glow">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      {bonus.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {bonus.description}
                    </p>
                    <div className="inline-block bg-accent/10 border border-accent rounded-full px-4 py-2">
                      <span className="text-accent font-bold">Valor: {bonus.value}</span>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Seção 6: Garantia */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="card-futuristic overflow-hidden">
              <div className="bg-gradient-primary p-8 text-center">
                <Shield className="h-20 w-20 text-white mx-auto mb-4" />
                <h2 className="text-4xl font-bold text-white mb-2">
                  Seu Risco é ZERO
                </h2>
              </div>
              <CardContent className="p-8 text-center">
                <p className="text-xl text-foreground mb-6 leading-relaxed">
                  Você tem <span className="font-bold text-primary text-2xl">7 dias</span> para testar nosso serviço. 
                  Se, por qualquer motivo, você não ficar 100% satisfeito, basta nos enviar um e-mail 
                  e <span className="font-bold text-accent">devolveremos todo o seu investimento</span>, sem perguntas.
                </p>
                <p className="text-lg text-muted-foreground italic">
                  Essa é nossa garantia de qualidade e compromisso com o seu sucesso.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Seção 7: FAQ */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">
              Perguntas Frequentes
            </h2>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="card-futuristic px-6"
                >
                  <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Seção 8: CTA Final */}
      <section className="py-20 bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
              Não Perca Esta Oportunidade Única de{" "}
              <span className="text-primary">Transformar Seu Negócio</span>
            </h2>
            
            <p className="text-xl text-muted-foreground">
              Junte-se a centenas de empreendedores que já aumentaram suas vendas 
              com fotos profissionais da Visuarte
            </p>

            <div className="space-y-4">
              <Button
                onClick={handleCTA}
                size="lg"
                className="text-xl px-12 py-8 h-auto bg-gradient-primary hover:shadow-large hover:scale-105 transition-all duration-300 font-bold animate-breathe"
              >
                QUERO GARANTIR MEU PLANO COM DESCONTO
              </Button>
              <p className="text-sm text-destructive font-semibold flex items-center justify-center gap-2">
                <Clock className="h-4 w-4" />
                Oferta se encerrando rapidamente!
              </p>
            </div>

            <div className="pt-8 flex items-center justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-accent" />
                <span>Pagamento Seguro</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5 text-accent" />
                <span>Garantia de 7 dias</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default OfertaEspecial;