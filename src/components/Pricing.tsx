import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Rocket, Lightbulb, Star, Check } from "lucide-react";

const Pricing = () => {
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);

  const plans = [
    {
      name: "Destaque",
      price: "R$ 99,90",
      priceInstallment: "12x de R$ 10,23",
      photos: "3",
      description: "Ideal para quem quer testar e já ver impacto rápido.",
      features: [
        "3 fotos editadas profissionalmente",
        "Entrega em 24-48h",
        "Suporte por Whatsapp",
        "1 Revisão incluída",
        "Ajuste de cores e luz para maior nitidez",
        "Fotos otimizadas para redes sociais e anúncios"
      ],
      popular: false,
      paymentLink: "https://pay.kirvano.com/48246797-026e-42cf-94b0-07db7542cdf7"
    },
    {
      name: "Premium",
      price: "R$ 147,00",
      priceInstallment: "12x de R$ 15,06",
      photos: "5",
      description: "Melhor custo-benefício: mais fotos, prioridade e revisões extras.",
      features: [
        "5 fotos editadas profissionalmente",
        "Entrega em 24-48h",
        "Suporte prioritário",
        "3 revisões incluídas",
        "Orientações práticas de uso das imagens",
        "Ajustes avançados de contraste, brilho e foco",
        "Fotos otimizadas para gerar maior conversão em anúncios"
      ],
      popular: true,
      badge: "Mais vendido",
      paymentLink: "https://pay.kirvano.com/41737fd6-7f6c-41b1-8731-c6f77b0b6dcf"
    },
    {
      name: "Supreme",
      price: "R$ 197,00",
      priceInstallment: "12x de R$ 20,19",
      photos: "10",
      description: "Máximo impacto e resultado com fotos + vídeos.",
      features: [
        "10 fotos editadas profissionalmente",
        "Entrega em 12-24h",
        "Inclui 7 fotos tratadas + 3 VisuMotion (fotos convertidas em vídeos)",
        "Suporte VIP com atendimento personalizado",
        "Revisões ilimitadas",
        "Consultoria de marketing visual para aplicar as imagens",
        "Backup das imagens por 1 ano",
        "Fotos e vídeos preparados sob medida para anúncios e redes sociais "
      ],
      popular: false,
      paymentLink: "https://pay.kirvano.com/0da0faa3-2eb4-4ed2-8740-0d4921bdd85f"
    }
  ];

  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Planos Visuarte
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Escolha o plano ideal para transformar suas imagens e impulsionar suas vendas
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="perspective"
              onClick={() => setFlippedIndex(flippedIndex === index ? null : index)}
              style={{ cursor: "pointer" }}
            >
              <div
                className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
                  flippedIndex === index ? "rotate-y-180" : ""
                }`}
              >
                {/* Frente do card */}
                <Card
                  className={`absolute w-full h-full backface-hidden overflow-hidden card-futuristic flex flex-col ${
                    plan.popular ? "border-2 border-primary scale-105" : ""
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute top-0 left-0 right-0 bg-gradient-primary text-white text-center py-2 text-sm font-medium flex items-center justify-center z-10">
                      <Star className="h-4 w-4 mr-1" />
                      {plan.badge}
                    </div>
                  )}

                  <CardHeader className={`text-center ${plan.popular ? "pt-12" : "pt-6"}`}>
                    <CardTitle className="text-2xl font-bold text-foreground mb-2">
                      Plano {plan.name}
                    </CardTitle>
                    <div className="space-y-2">
                      <div className="text-4xl font-bold text-primary">{plan.price}</div>
                      <div className="text-sm text-muted-foreground">
                        à vista ou {plan.priceInstallment}
                      </div>
                      <div className="text-lg text-muted-foreground">
                        {plan.photos} fotos editadas
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mt-4 leading-relaxed">
                      {plan.description}
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-4 flex-grow flex flex-col justify-between">
                    <ul className="space-y-3 flex-grow">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm">
                          <Check className="h-5 w-5 text-accent mt-0.5 flex-none" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      variant="success"
                      className="animate-breathe hover:scale-110 transition-all duration-500 ease-in-out w-full"
                      size="lg"
                      onClick={e => {
                        e.stopPropagation();
                        window.open(plan.paymentLink, "_blank");
                      }}
                    >
                      <Rocket className="h-5 w-5 mr-2" />
                      Escolher {plan.name}
                    </Button>
                  </CardContent>
                </Card>
                {/* Verso do card */}
                <Card className="absolute w-full h-full backface-hidden rotate-y-180 flex flex-col justify-center items-center p-6 bg-background z-20">
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl font-bold text-primary mb-2">
                      Mais sobre o {plan.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc list-inside text-muted-foreground text-sm mb-4">
                      <li>Garantia de satisfação: reembolso em até 7 dias</li>
                      <li>Atendimento personalizado</li>
                      <li>Pagamento seguro via Kirvano</li>
                      <li>Nota fiscal disponível</li>
                      {/* Adicione mais detalhes se quiser */}
                    </ul>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={e => {
                        e.stopPropagation();
                        setFlippedIndex(null);
                      }}
                    >
                      Voltar
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* CSS para flip */}
      <style>{`
        .perspective {
          perspective: 1200px;
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
          position: relative;
          min-height: 700px;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        .rotate-y-180 .backface-hidden {
          pointer-events: none;
        }
      `}</style>
    </section>
  );
};

export default Pricing;