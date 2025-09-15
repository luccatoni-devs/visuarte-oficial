import { TrendingUp, Zap, DollarSign, Target, Shield, Award, Users, Percent, Clock, CheckCircle } from "lucide-react";
import { useEffect, useState } from "react";

const Benefits = () => {
  const [counters, setCounters] = useState({
    projects: 0,
    increase: 0,
    delivery: 0,
    satisfaction: 0
  });

  const stats = [
    { 
      key: 'projects' as keyof typeof counters, 
      target: 500, 
      suffix: '+', 
      label: 'Projetos Entregues', 
      icon: Users,
      color: 'text-blue-400'
    },
    { 
      key: 'increase' as keyof typeof counters, 
      target: 65, 
      suffix: '%', 
      label: 'Aumento Médio em Vendas', 
      icon: Percent,
      color: 'text-green-400'
    },
    { 
      key: 'delivery' as keyof typeof counters, 
      target: 24, 
      suffix: 'h', 
      label: 'Prazo Médio de Entrega', 
      icon: Clock,
      color: 'text-yellow-400'
    },
    { 
      key: 'satisfaction' as keyof typeof counters, 
      target: 100, 
      suffix: '%', 
      label: 'Clientes Satisfeitos', 
      icon: CheckCircle,
      color: 'text-emerald-400'
    }
  ];

  useEffect(() => {
    const duration = 2000; // 2 segundos para completar
    const steps = 60; // 60 frames
    const stepDuration = duration / steps;

    const intervals = stats.map(stat => {
      let currentStep = 0;
      
      return setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        const easedProgress = 1 - Math.pow(1 - progress, 3); // easing out cubic
        const currentValue = Math.floor(stat.target * easedProgress);
        
        setCounters(prev => ({
          ...prev,
          [stat.key]: currentValue
        }));

        if (currentStep >= steps) {
          setCounters(prev => ({
            ...prev,
            [stat.key]: stat.target
          }));
          clearInterval(intervals[stats.indexOf(stat)]);
        }
      }, stepDuration);
    });

    return () => {
      intervals.forEach(interval => clearInterval(interval));
    };
  }, []);

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
            {stats.map((stat) => (
              <div key={stat.key} className="space-y-4 group hover:scale-105 transition-transform duration-300">
                <div className="flex justify-center mb-3">
                  <stat.icon className={`h-10 w-10 ${stat.color} group-hover:scale-110 transition-transform duration-300`} />
                </div>
                <div className="text-4xl font-bold text-white tabular-nums">
                  {counters[stat.key]}{stat.suffix}
                </div>
                <div className="text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;