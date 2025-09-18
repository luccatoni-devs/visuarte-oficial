import { TrendingUp, Zap, DollarSign, Target, Shield, Award, Users, Percent, Clock, CheckCircle } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import aumento from "../assets/benefits-imgs/aumento.jpg";
import entrega from "../assets/benefits-imgs/entrega.jpg";
import especializacao from "../assets/benefits-imgs/especialização.jpg";
import garantia from "../assets/benefits-imgs/garantia.jpg";
import roigarantido from "../assets/benefits-imgs/roigarantido.jpg";
import seguranca from "../assets/benefits-imgs/seguranca.jpg";

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
      color: 'text-green-400'
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
      color: 'text-green-400'
    },
    { 
      key: 'satisfaction' as keyof typeof counters, 
      target: 100, 
      suffix: '%', 
      label: 'Clientes Satisfeitos', 
      icon: CheckCircle,
      color: 'text-green-400'
    }
  ];

  const statsRef = useRef<HTMLDivElement | null>(null);
  const hasStartedRef = useRef(false);

  useEffect(() => {
    if (!statsRef.current) return;

    const element = statsRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !hasStartedRef.current) {
          hasStartedRef.current = true;
          const duration = 2000; // 2 segundos para completar
          const steps = 60; // 60 frames
          const stepDuration = duration / steps;

          const intervals = stats.map((stat) => {
            let currentStep = 0;
            const intervalId = setInterval(() => {
              currentStep++;
              const progress = currentStep / steps;
              const easedProgress = 1 - Math.pow(1 - progress, 3);
              const currentValue = Math.floor(stat.target * easedProgress);

              setCounters((prev) => ({
                ...prev,
                [stat.key]: currentValue,
              }));

              if (currentStep >= steps) {
                setCounters((prev) => ({
                  ...prev,
                  [stat.key]: stat.target,
                }));
                clearInterval(intervalId);
              }
            }, stepDuration);
            return intervalId;
          });

          // Cleanup intervals if unmounts mid-animation
          const cleanup = () => intervals.forEach((id) => clearInterval(id));
          element.addEventListener("visibilitychange", cleanup);
        }
      },
      { root: null, rootMargin: "0px 0px -20% 0px", threshold: 0.2 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [stats]);

  const benefits = [
    {
      icon: TrendingUp,
      title: "Aumento de até 65% nas vendas",
      description: "Empresas que utilizam imagens profissionais têm em média 65% mais conversões do que aquelas que usam fotos amadoras. Isso acontece porque o cliente compra primeiro com os olhos. Nossa tecnologia de transformação de imagens potencializa suas vendas ao destacar o melhor do seu produto de forma irresistível.",
      image: aumento
    },
    {
      icon: Zap,
      title: "Entrega em 24-48h",
      description: "Sabemos que agilidade é fundamental para o seu negócio. Por isso, garantimos a entrega das imagens transformadas em até 48 horas. Assim, você não perde tempo e já pode começar a atrair mais clientes e aumentar seus resultados quase de imediato.",
      image: entrega
    },
    {
      icon: DollarSign,
      title: "ROI garantido",
      description: "Investir em imagens profissionais não é gasto, é retorno. Estudos de mercado mostram que empresas que investem em visual de qualidade conseguem até 3x mais engajamento e aumentam significativamente o ROI. Com nossas imagens, cada real investido volta para você em forma de vendas.",
      image: roigarantido
    },
    {
      icon: Target,
      title: "Especialização por segmento",
      description: "Não existe fórmula pronta. Cada segmento tem suas próprias necessidades visuais. Seja você dono de restaurante, vendedor de carro ou dono de imóvel, nós adaptamos a transformação de imagens para o perfil exato do seu público, garantindo o máximo impacto.",
      image: especializacao
    },
    {
      icon: Shield,
      title: "100% seguro e confidencial + Garantia de 7 dias",
      description: "A sua confiança é a nossa prioridade. Por isso, oferecemos 7 dias de garantia total: se você não ficar satisfeito com o resultado, devolvemos 100% do valor investido sem burocracia. Além disso, todo o processo é seguro e confidencial, preservando sua privacidade.",
      image: seguranca
    },
    {
      icon: Award,
      title: "Qualidade premium",
      description: "Nossas imagens são tratadas com tecnologia de ponta, garantindo um resultado premium que se destaca da concorrência. Clientes relatam que após transformar suas imagens conosco, tiveram mais cliques, mais pedidos e maior fidelização dos clientes.",
      image: garantia
    }
  ];

  const [selectedIndex, setSelectedIndex] = useState(0);

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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto items-stretch">
          <nav className="md:col-span-1 bg-card rounded-xl p-2 border self-start">
            <ul className="space-y-1">
              {benefits.map((benefit, index) => {
                const isActive = index === selectedIndex;
                return (
                  <li key={index}>
                    <button
                      type="button"
                      onClick={() => setSelectedIndex(index)}
                      className={`w-full flex items-center gap-3 rounded-lg px-3 py-3 text-left transition-colors ${
                        isActive
                          ? "bg-primary/10 text-primary border border-primary/20"
                          : "hover:bg-muted text-foreground"
                      }`}
                      aria-current={isActive ? "true" : undefined}
                    >
                      <benefit.icon className={`h-5 w-5 ${isActive ? "text-primary" : "text-muted-foreground"}`} />
                      <span className="font-medium line-clamp-1">{benefit.title}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="md:col-span-2 h-full">
            {(() => {
              const SelectedIcon = benefits[selectedIndex].icon;
              return (
                <div className="bg-gradient-card rounded-xl overflow-hidden border h-full flex flex-col">
              <div className="w-full overflow-hidden bg-muted h-56 md:h-64">
                <img
                  src={benefits[selectedIndex].image}
                  alt={benefits[selectedIndex].title}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center gap-3 mb-3">
                  <SelectedIcon className="h-6 w-6 text-primary" />
                  <h3 className="text-2xl font-bold text-foreground">
                    {benefits[selectedIndex].title}
                  </h3>
                </div>
                <p className="text-muted-foreground text-base leading-relaxed">
                  {benefits[selectedIndex].description}
                </p>
              </div>
                </div>
              );
            })()}
          </div>
        </div>

        {/* Stats Section */}
        <div ref={statsRef} className="mt-20 bg-gradient-primary rounded-3xl p-8 md:p-12 text-center text-white">
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