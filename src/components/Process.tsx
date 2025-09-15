import { Upload, Search, Sparkles, Target, Zap, Shield, CheckCircle } from "lucide-react";

const Process = () => {
  const steps = [
    {
      number: "01",
      title: "Envie suas Fotos",
      description: "Compartilhe suas imagens através do nosso sistema seguro ou WhatsApp.",
      icon: Upload
    },
    {
      number: "02", 
      title: "Análise Profissional",
      description: "Nossa equipe analisa e planeja as melhorias necessárias para maximizar impacto.",
      icon: Search
    },
    {
      number: "03",
      title: "Tratamento Avançado", 
      description: "Aplicamos técnicas profissionais de edição e enhancement para transformar suas imagens.",
      icon: Sparkles
    },
    {
      number: "04",
      title: "Entrega Premium",
      description: "Receba suas imagens transformadas em alta resolução, prontas para usar.",
      icon: Target
    }
  ];

  return (
    <section className="py-20 bg-gradient-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Como Funciona
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Processo simples e eficiente para transformar suas imagens em ferramentas de venda
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="text-center group hover:scale-105 transition-transform duration-300"
            >
              <div className="mb-6">
                <div className="mb-4">
                  <step.icon className="h-16 w-16 text-secondary-light mx-auto" />
                </div>
                <div className="text-3xl font-bold text-secondary-light mb-2">
                  {step.number}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3">
                {step.title}
              </h3>
              
              <p className="text-white/70 leading-relaxed">
                {step.description}
              </p>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <div className="w-8 h-0.5 bg-white/30" />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Prazo de Entrega: 24-48h
            </h3>
            <p className="text-white/80 mb-6">
              Receba suas imagens transformadas rapidamente, sem comprometer a qualidade
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <span className="text-white/70 flex items-center gap-1">
                <Zap className="h-4 w-4" />
                Entrega rápida
              </span>
              <span className="text-white/70 flex items-center gap-1">
                <Shield className="h-4 w-4" />
                100% seguro
              </span>
              <span className="text-white/70 flex items-center gap-1">
                <CheckCircle className="h-4 w-4" />
                Garantia de qualidade
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;