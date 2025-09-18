import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Rocket, Lightbulb, Star, Check } from "lucide-react";

const Pricing = () => {
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);

  const plans = [
    {
      name: "Destaque",
      price: "R$ 109,90",
      priceInstallment: "12x de R$ 9,15",
      photos: "3",
      description: "Ideal para testar o impacto das imagens certas",
      features: [
        "3 fotos editadas profissionalmente",
        "Entrega em 24-48h",
        "Suporte por email",
        "Revisão incluída"
      ],
      popular: false,
      paymentLink: "https://pay.kirvano.com/b871d210-c0ed-4eb0-b1cf-8a69908a57e1"
    },
    {
      name: "Premium",
      price: "R$ 177,00",
      priceInstallment: "12x de R$ 14,75",
      photos: "5",
      description: "Melhor custo-benefício: economize R$ 30 em relação ao Essencial",
      features: [
        "5 fotos editadas profissionalmente",
        "Entrega em 24-48h",
        "Suporte prioritário",
        "2 revisões incluídas",
        "Orientações de uso"
      ],
      popular: true,
      badge: "Mais vendido",
      paymentLink: "https://pay.kirvano.com/db7bb35b-e536-4e92-acde-756ebf0fd6ba"
    },
    {
      name: "Supreme",
      price: "R$ 277,00",
      priceInstallment: "12x de R$ 23,10",
      photos: "10",
      description: "Máximo impacto com desconto progressivo (quase 50% mais fotos pelo dobro do preço do Essencial)",
      features: [
        "10 fotos editadas profissionalmente",
        "Entrega em 24-48h",
        "Suporte VIP",
        "Revisões ilimitadas",
        "Consultoria de marketing visual",
        "Backup das imagens por 1 ano"
      ],
      popular: false,
      paymentLink: "https://pay.kirvano.com/ba874e29-6d60-40da-8071-9ab0a567ed12"
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
                          <Check className="h-4 w-4 text-accent font-bold mt-0.5" />
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
          min-height: 550px;
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