import { DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { DollarSign, Clock, Target, Star, Rocket, CheckCircle } from "lucide-react";
import ProcessStep from "./ProcessStep";

interface Service {
  title: string;
  image: string;
  category: string;
  detailedInfo: {
    fullDescription: string;
    process: string[];
    pricing: string;
    deliveryTime: string;
    includes: string[];
  };
}

interface ServiceModalProps {
  service: Service;
}

const ServiceModal = ({ service }: ServiceModalProps) => {
  return (
    <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto flex flex-col items-center justify-center">
      <DialogHeader className="w-full flex flex-col items-center">
        {/* Service Image */}
        <img
          src={service.image}
          alt={`${service.title} - Antes e Depois`}
          className="w-full max-w-md mt-[500px] object-contain rounded-lg mb-6 shadow-lg"
        />
        <DialogTitle className="text-2xl font-bold text-foreground text-center w-full">
          {service.title}
        </DialogTitle>
        <DialogDescription className="text-muted-foreground text-center w-full">
          {service.detailedInfo.fullDescription}
        </DialogDescription>
      </DialogHeader>
      
      <div className="space-y-6 mt-6 w-full flex flex-col items-center">
        {/* Pricing and Time */}
        <div className="grid md:grid-cols-2 gap-4 w-full justify-center">
          <div className="space-y-2 flex flex-col items-center">
            <div className="flex items-center text-primary font-semibold">
              <DollarSign className="h-5 w-5 mr-2" />
              Preço
            </div>
            <p className="text-2xl font-bold text-foreground text-center">
              {service.detailedInfo.pricing}
            </p>
          </div>
          
          <div className="space-y-2 flex flex-col items-center">
            <div className="flex items-center text-primary font-semibold">
              <Clock className="h-5 w-5 mr-2" />
              Prazo de Entrega
            </div>
            <p className="text-lg font-medium text-foreground text-center">
              {service.detailedInfo.deliveryTime}
            </p>
          </div>
        </div>
        
        {/* Process */}
        <div className="space-y-3 w-full flex flex-col items-center">
          <h4 className="text-lg font-semibold text-foreground flex items-center justify-center">
            <Target className="h-5 w-5 mr-2 text-primary" />
            Nosso Processo (clique no olho para ver antes/depois)
          </h4>
          <div className="space-y-2 w-full flex flex-col items-center max-w-lg">
            {service.detailedInfo.process.map((step, idx) => (
              <ProcessStep
                key={idx}
                step={step}
                stepIndex={idx}
                category={service.category}
              />
            ))}
          </div>
        </div>
        
        {/* Includes */}
        <div className="space-y-3 w-full flex flex-col items-center">
          <h4 className="text-lg font-semibold text-foreground flex items-center justify-center">
            <Star className="h-5 w-5 mr-2 text-primary" />
            O que está incluído
          </h4>
          <div className="space-y-2 w-full flex flex-col items-center">
            {service.detailedInfo.includes.map((item, idx) => (
              <div key={idx} className="flex items-center text-muted-foreground">
                <CheckCircle className="h-4 w-4 mr-3 text-primary flex-shrink-0" />
                {item}
              </div>
            ))}
          </div>
        </div>
        
        {/* CTA Button */}
        <div className="pt-4 border-t w-full flex justify-center">
          <Button 
            asChild
            variant="futuristic" 
            className="w-full max-w-xs"
          >
            <a href="https://wa.me/5532999940335?text=Olá,%20vi%20o%20site%20da%20Visuarte%20e%20quero%20solicitar%20um%20orçamento." target="_blank" rel="noopener noreferrer">
              <Rocket className="h-5 w-5 mr-2" />
              Solicitar Orçamento no WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </DialogContent>
  );
};

export default ServiceModal;