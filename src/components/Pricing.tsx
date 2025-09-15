import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Rocket, Lightbulb, Star, Check } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Essencial",
      price: "R$ 60,00",
      priceInstallment: "12x de R$ 6,15",
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
      name: "Destaque",
      price: "R$ 110,00",
      priceInstallment: "12x de R$ 11,27",
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
      name: "Premium",
      price: "R$ 180,00",
      priceInstallment: "12x de R$ 18,45",
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
            <Card 
              key={index} 
              className={`relative overflow-hidden card-futuristic ${
                plan.popular 
                  ? 'border-2 border-primary scale-105' 
                  : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-primary text-white text-center py-2 text-sm font-medium flex items-center justify-center">
                  <Star className="h-4 w-4 mr-1" />
                  {plan.badge}
                </div>
              )}

              <CardHeader className={`text-center ${plan.popular ? 'pt-12' : 'pt-6'}`}>
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

              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm">
                      <Check className="h-4 w-4 text-accent font-bold mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  variant="success" 
                  className="animate-scale-pulse hover:animate-none"
                  size="lg"
                  onClick={() => window.open(plan.paymentLink, '_blank')}
                >
                  <Rocket className="h-5 w-5 mr-2" />
                  Escolher {plan.name}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16 space-y-4">
          <p className="text-muted-foreground flex items-center justify-center">
            <Lightbulb className="h-4 w-4 mr-2" />
            <strong>Dica:</strong> Todas as fotos devem ser enviadas para <strong>visuarte.empresa@gmail.com</strong>
          </p>
            <p className="text-sm text-muted-foreground">
              Dúvidas? Entre em contato: <span className="text-primary font-medium">(32) 99994-0335</span>
            </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;