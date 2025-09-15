import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Contact = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Transforme Suas Imagens Hoje
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Solicite um orçamento gratuito e veja como podemos aumentar suas vendas
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="shadow-large border-0 bg-gradient-card">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-center">
                Solicite seu Orçamento Gratuito
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <Input placeholder="Seu nome" className="bg-background/50" />
                  <Input type="email" placeholder="Seu e-mail" className="bg-background/50" />
                </div>
                
                <Input placeholder="WhatsApp" className="bg-background/50" />
                
                <div>
                  <select className="w-full h-10 px-3 py-2 rounded-md border border-input bg-background/50 text-sm">
                    <option>Selecione o tipo de serviço</option>
                    <option>Restaurantes & iFood</option>
                    <option>Imóveis</option>
                    <option>Automóveis</option>
                    <option>Outros</option>
                  </select>
                </div>
                
                <Textarea 
                  placeholder="Conte mais sobre seu projeto e quantas imagens você tem..."
                  className="min-h-[120px] bg-background/50"
                />
                
                <Button variant="primary" size="lg" className="w-full">
                  Solicitar Orçamento Gratuito
                </Button>
              </form>
              
              <div className="text-center pt-4 border-t">
                <p className="text-sm text-muted-foreground">
                  Ou entre em contato diretamente pelo WhatsApp
                </p>
                 <Button 
                   variant="service" 
                   className="mt-2"
                   onClick={() => window.open('https://wa.me/5532999940335?text=👉%20Olá,%20acabei%20de%20visitar%20o%20site%20da%20Visuarte%20e%20gostaria%20de%20solicitar%20um%20orçamento%20gratuito%20para%20melhoria%20de%20imagens.', '_blank')}
                 >
                   💬 WhatsApp: (32) 99994-0335
                 </Button>
              </div>
            </CardContent>
          </Card>

          {/* Info & Benefits */}
          <div className="space-y-8">
            <Card className="border-0 bg-gradient-secondary text-white shadow-large">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">🎯 Orçamento Personalizado</h3>
                <ul className="space-y-2 text-white/90">
                  <li>• Análise gratuita das suas imagens</li>
                  <li>• Preço justo baseado na quantidade</li>
                  <li>• Desconto para volumes maiores</li>
                  <li>• Sem compromisso</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 bg-gradient-card shadow-medium">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 text-foreground">📞 Atendimento Exclusivo</h3>
                 <div className="space-y-3 text-muted-foreground">
                   <div>📧 visuarte.empresa@gmail.com</div>
                   <div>📱 WhatsApp: (32) 99994-0335</div>
                   <div>🕐 Seg-Sex: 8h às 18h</div>
                   <div>🕐 Sáb: 8h às 12h</div>
                 </div>
              </CardContent>
            </Card>

            <div className="bg-accent/10 rounded-xl p-6 border-l-4 border-accent">
              <h4 className="font-bold text-accent mb-2">Garantia de Satisfação</h4>
              <p className="text-sm text-muted-foreground">
                Se não ficar satisfeito com o resultado, refazemos ou devolvemos seu dinheiro. 
                Sem burocracia, sem complicação.
              </p>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center mt-16 bg-gradient-hero rounded-3xl p-8 md:p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">
            Pronto para Vender Mais?
          </h3>
          <p className="text-lg mb-8 text-white/80 max-w-2xl mx-auto">
            Junte-se aos 500+ negócios que já aumentaram suas vendas com a Visuarte
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="hero" 
              size="lg"
              onClick={() => window.open('https://wa.me/5532999940335?text=👉%20Olá,%20acabei%20de%20visitar%20o%20site%20da%20Visuarte%20e%20gostaria%20de%20solicitar%20um%20orçamento%20gratuito%20para%20melhoria%20de%20imagens.', '_blank')}
            >
              Começar Agora - Orçamento Grátis
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;