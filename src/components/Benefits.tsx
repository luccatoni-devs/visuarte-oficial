import { TrendingUp, Zap, DollarSign, Target, Shield, Award } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Aumento de até 65% nas vendas",
      description: "Imagens profissionais convertem mais visitantes em clientes, comprovado por nossos casos"
    },
    {
      icon: Zap,
      title: "Entrega em 24-48h",
      description: "Processo otimizado para você receber suas imagens transformadas rapidamente"
    },
    {
      icon: DollarSign,
      title: "ROI garantido",
      description: "Investimento que se paga: mais vendas, maior percepção de valor, clientes satisfeitos"
    },
    {
      icon: Target,
      title: "Especialização por segmento",
      description: "Conhecemos as particularidades de cada mercado: food, imóveis, automóveis"
    },
    {
      icon: Shield,
      title: "100% seguro e confidencial",
      description: "Suas imagens são tratadas com total confidencialidade e segurança"
    },
    {
      icon: Award,
      title: "Qualidade premium",
      description: "Padrão profissional de mercado, com técnicas avançadas de enhancement"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Por que escolher a Visuarte?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Mais de 500 negócios já transformaram seus resultados com nossos serviços
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="group p-6 rounded-xl bg-gradient-card hover:shadow-medium transition-all duration-300 hover:-translate-y-1"
            >
              <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                <benefit.icon className="h-12 w-12 text-primary mx-auto" />
              </div>
              
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {benefit.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gradient-primary rounded-3xl p-8 md:p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-8">Nossos Números</h3>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-white">500+</div>
              <div className="text-white/80">Projetos Entregues</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-white">65%</div>
              <div className="text-white/80">Aumento Médio em Vendas</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-white">24h</div>
              <div className="text-white/80">Prazo Médio de Entrega</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-white">100%</div>
              <div className="text-white/80">Clientes Satisfeitos</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;