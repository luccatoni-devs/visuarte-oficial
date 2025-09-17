import { useEffect, useState } from "react";
import { Upload, Search, Sparkles, Target, Zap, Shield, CheckCircle, ChevronRight } from "lucide-react";
import before1 from "@/assets/before_after/before1.jpg";
import before2 from "@/assets/before_after/before2.jpg";
import before3 from "@/assets/before_after/before3.jpg";
import before4 from "@/assets/before_after/before4.jpg";
import after1 from "@/assets/before_after/after1.jpg";
import after2 from "@/assets/before_after/after2.jpg";
import after3 from "@/assets/before_after/after3.jpg";
import after4 from "@/assets/before_after/after4.jpg";

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

  const [activeStep, setActiveStep] = useState(0);
  const [showAfter, setShowAfter] = useState(true);

  useEffect(() => {
    // Ao trocar de etapa, resetar a visualização para "depois"
    setShowAfter(true);
  }, [activeStep]);

  const progressPercent = ((activeStep + 1) / steps.length) * 100;

  const beforeImages = [before1, before2, before3, before4];
  const afterImages = [after1, after2, after3, after4];

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

        {/* Barra de progresso */}
        <div className="max-w-6xl mx-auto mb-10">
          <div className="h-2 bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-white transition-all duration-500 ease-out"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
          <div className="flex justify-between text-white/70 text-sm mt-2">
            {steps.map((s, i) => (
              <span key={i} className={i === activeStep ? "text-white" : ""}>{s.number}</span>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => {
            const isActive = index === activeStep;
            return (
              <button
                key={index}
                onClick={() => setActiveStep(index)}
                className={`relative text-center group transition-all duration-300 rounded-2xl p-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 ${
                  isActive ? "bg-white/10 backdrop-blur-sm ring-1 ring-white/20" : "hover:scale-105"
                }`}
                aria-current={isActive}
              >
                <div className="mb-4">
                  <div className={`mb-4 mx-auto grid place-items-center rounded-xl w-20 h-20 transition-colors duration-300 ${
                    isActive ? "bg-white/20" : "bg-white/10 group-hover:bg-white/15"
                  }`}>
                    <step.icon className="h-10 w-10 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white">
                    {step.number}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 flex items-center justify-center gap-2">
                  {step.title}
                  {isActive && <ChevronRight className="h-5 w-5 text-white animate-pulse" />}
                </h3>
                <p className="text-white/70 leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <div className={`w-8 h-0.5 transition-colors duration-300 ${isActive ? "bg-white" : "bg-white/30"}`} />
                  </div>
                )}
              </button>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 max-w-5xl mx-auto">
            <div className="flex flex-col lg:flex-row items-stretch gap-6">
              {/* Visual interativo de antes/depois simples para a etapa */}
              <div className="flex-1">
                <div className="relative rounded-xl overflow-hidden ring-1 ring-white/10">
                  <img
                    src={showAfter ? afterImages[activeStep] : beforeImages[activeStep]}
                    alt={showAfter ? "Depois" : "Antes"}
                    className="aspect-[16/10] w-full h-auto object-cover transition-all duration-500"
                  />
                  {/* Overlay opcional para efeito visual */}
                  <div className={`absolute inset-0 transition-opacity duration-500 pointer-events-none ${showAfter ? "opacity-0" : "opacity-100"}`} style={{ background: "linear-gradient(135deg, rgba(0,0,0,.35), rgba(0,0,0,.15))" }} />
                </div>
                <div className="mt-3 flex items-center justify-center gap-3">
                  <button
                    onClick={() => setShowAfter(false)}
                    className={`px-3 py-1.5 rounded-full text-sm transition-colors ${!showAfter ? "bg-white text-black" : "bg-white/10 text-white"}`}
                  >
                    Antes
                  </button>
                  <button
                    onClick={() => setShowAfter(true)}
                    className={`px-3 py-1.5 rounded-full text-sm transition-colors ${showAfter ? "bg-white text-black" : "bg-white/10 text-white"}`}
                  >
                    Depois
                  </button>
                </div>
              </div>
              {/* Conteúdo explicativo da etapa */}
              <div className="flex-1 text-left">
                <div className="inline-flex items-center gap-2 text-white/80 mb-2">
                  <span className="text-sm font-semibold">Etapa {steps[activeStep].number}</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{steps[activeStep].title}</h3>
                <p className="text-white/80 leading-relaxed mb-4">
                  {steps[activeStep].description}
                </p>
                <ul className="space-y-2 text-white/80">
                  <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-white mt-1" /> Exemplo prático relacionado à etapa selecionada.</li>
                  <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-white mt-1" /> Dica rápida para obter o melhor resultado.</li>
                  <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-white mt-1" /> Tempo estimado e o que esperar do próximo passo.</li>
                </ul>
                <div className="mt-6 flex items-center gap-3">
                  <button
                    onClick={() => setActiveStep((s) => Math.max(0, s - 1))}
                    disabled={activeStep === 0}
                    className="px-4 py-2 rounded-lg bg-white/10 text-white disabled:opacity-40 disabled:cursor-not-allowed hover:bg-white/20 transition-colors"
                  >
                    Voltar
                  </button>
                  <button
                    onClick={() => setActiveStep((s) => Math.min(steps.length - 1, s + 1))}
                    className="px-4 py-2 rounded-lg bg-white text-black hover:bg-white/90 transition-colors inline-flex items-center gap-2"
                  >
                    Próximo passo <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Badges de confiança mantidos */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-8">
              <div className="text-white/80 flex items-center justify-center gap-2">
                <Zap className="h-4 w-4" />
                Entrega rápida 24-48h
              </div>
              <div className="text-white/80 flex items-center justify-center gap-2">
                <Shield className="h-4 w-4" />
                100% seguro
              </div>
              <div className="text-white/80 flex items-center justify-center gap-2">
                <CheckCircle className="h-4 w-4" />
                Garantia de qualidade
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;