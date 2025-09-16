import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Como funciona o serviço de melhoria de imagens?",
      answer: "Nosso processo é simples: você envia suas fotos para nosso email (visuarte.empresa@gmail.com), nossa equipe de especialistas aplica técnicas profissionais de edição para melhorar iluminação, cores, contraste e qualidade geral, e entregamos as imagens otimizadas em 24-48h prontas para uso."
    },
    {
      question: "Preciso enviar minhas fotos em qual formato?",
      answer: "Aceitamos os principais formatos de imagem: JPG, JPEG, PNG, e TIFF. Recomendamos enviar as fotos na maior resolução possível para obtermos o melhor resultado final. Fotos tiradas com smartphone são perfeitamente aceitas."
    },
    {
      question: "Qual o prazo de entrega após o envio das fotos?",
      answer: "O prazo padrão de entrega é de 24 a 48 horas após o recebimento das suas fotos e confirmação do pagamento. Para projetos com muitas imagens ou pedidos especiais, o prazo pode ser estendido, mas sempre comunicaremos previamente."
    },
    {
      question: "As fotos melhoradas podem ser usadas em qualquer plataforma (iFood, OLX, etc.)?",
      answer: "Sim! As imagens editadas são entregues em alta resolução e otimizadas para uso em qualquer plataforma digital: iFood, Uber Eats, Instagram, Facebook, OLX, sites imobiliários, marketplaces automotivos, entre outros. Você terá total direito de uso comercial."
    },
    {
      question: "É seguro enviar minhas imagens para vocês?",
      answer: "Absolutamente seguro! Garantimos total confidencialidade e proteção das suas imagens. Após a entrega do trabalho, excluímos automaticamente os arquivos originais dos nossos servidores. Nunca compartilhamos ou utilizamos suas fotos para outros fins."
    },
    {
      question: "Posso pedir ajustes caso não fique como eu esperava?",
      answer: "Claro! Todos os nossos planos incluem revisões. O plano Essencial inclui 1 revisão, o Destaque inclui 2 revisões, e o Premium oferece revisões ilimitadas. Nosso objetivo é sua total satisfação com o resultado final."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tire suas dúvidas sobre nossos serviços de melhoria de imagens
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border-none bg-muted/20 rounded-lg overflow-hidden shadow-[0_2px_4px_rgba(0,0,0,0.1)] hover:shadow-[0_3px_6px_rgba(0,0,0,0.15)] transition-shadow duration-300"
              >
                <AccordionTrigger className="px-6 py-4 text-left text-foreground font-semibold hover:no-underline hover:bg-muted/30 transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

      </div>
    </section>
  );
};

export default FAQ;