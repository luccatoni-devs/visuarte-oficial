import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Phone, Mail, Smartphone, Clock, MessageCircle } from "lucide-react";

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
          {/* Contact Form (Left) */}
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
            </CardContent>
          </Card>

          {/* Right Column: Info + Final CTA */}
          <div className="space-y-8">
            <Card className="border-0 bg-gradient-secondary text-white shadow-large">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Target className="h-5 w-5 mr-2" />
                  Orçamento Personalizado
                </h3>
                <ul className="space-y-2 text-white/90">
                  <li>• Análise gratuita das suas imagens</li>
                  <li>• Preço justo baseado na quantidade</li>
                  <li>• Desconto para volumes maiores</li>
                  <li>• Sem compromisso</li>
                </ul>
              </CardContent>
            </Card>


            {/* Moved Final CTA here */}
            <div className="bg-gradient-hero rounded-3xl p-8 md:p-12 text-white">
              <h3 className="text-3xl font-bold mb-4">
                Pronto para Vender Mais?
              </h3>
              <p className="text-lg mb-8 text-white/80 max-w-2xl">
                Junte-se aos 500+ negócios que já aumentaram suas vendas com a Visuarte
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  variant="service" 
                  className="sm:ml-2"
                  onClick={() => window.open('https://wa.me/5532999940335?text=Olá,%20acabei%20de%20visitar%20o%20site%20da%20Visuarte%20e%20gostaria%20de%20solicitar%20um%20orçamento%20gratuito%20para%20melhoria%20de%20imagens.', '_blank')}
                >
                  <MessageCircle className="h-4 w-4 mr-2" />
                  WhatsApp: (32) 99994-0335
                </Button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;