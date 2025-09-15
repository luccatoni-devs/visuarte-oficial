import { Mail, Smartphone, Instagram, Facebook, Linkedin, ShieldCheck, BadgeCheck, Lock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white border-t border-blue-700">
      <div className="container mx-auto px-4 py-10">
        {/* Top: Marca + Selos */}
        <div className="grid gap-8 md:grid-cols-3 items-center">
          <div className="md:col-span-1">
            <div className="flex items-center gap-3">
              <img src="/lovable-uploads/visuarte-logo-transparent.png" alt="Visuarte" className="h-10 w-auto" />
              <span className="font-semibold text-lg">Visuarte</span>
            </div>
            <p className="text-blue-100 mt-4 max-w-md">
              Imagens que vendem por você. Melhoramos fotos de produtos, cardápios, imóveis e automóveis para aumentar suas conversões.
            </p>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-semibold mb-4">Selos e Verificações</h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              <div className="flex items-center gap-3 rounded-md bg-blue-700/40 px-4 py-3">
                <ShieldCheck className="h-5 w-5 text-white" aria-hidden="true" />
                <div>
                  <p className="text-sm font-medium">Site Seguro</p>
                  <p className="text-xs text-blue-100">SSL Ativo</p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-md bg-blue-700/40 px-4 py-3">
                <Lock className="h-5 w-5 text-white" aria-hidden="true" />
                <div>
                  <p className="text-sm font-medium">Pagamento Protegido</p>
                  <p className="text-xs text-blue-100">Criptografia</p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-md bg-blue-700/40 px-4 py-3">
                <BadgeCheck className="h-5 w-5 text-white" aria-hidden="true" />
                <div>
                  <p className="text-sm font-medium">Entregas Confiáveis</p>
                  <p className="text-xs text-blue-100">Satisfação</p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-md bg-blue-700/40 px-4 py-3">
                <BadgeCheck className="h-5 w-5 text-white" aria-hidden="true" />
                <div>
                  <p className="text-sm font-medium">Qualidade Verificada</p>
                  <p className="text-xs text-blue-100">Profissional</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom: Logo+texto, Contato, Redes, Atendimento */}
        <div className="mt-10 pt-8 border-t border-blue-500/50">
          <div className="grid gap-8 md:grid-cols-3 justify-center items-center align-middle place-items-center text-center">

            <div>
              <h4 className="font-semibold mb-3">Contato</h4>
              <ul className="space-y-2 text-sm text-blue-100">
                <li className="flex items-center justify-center align-middle"><Mail className="h-4 w-4 mr-2" /> visuarte.empresa@gmail.com</li>
                <li className="flex items-center justify-center align-middle"><Smartphone className="h-4 w-4 mr-2" /> (32) 99994-0335</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Redes Sociais</h4>
              <div className="flex items-center justify-center gap-3 text-blue-100">
                <a href="#" aria-label="Instagram" className="hover:text-white transition-colors"><Instagram className="h-5 w-5" /></a>
                <a href="#" aria-label="Facebook" className="hover:text-white transition-colors"><Facebook className="h-5 w-5" /></a>
                <a href="#" aria-label="LinkedIn" className="hover:text-white transition-colors"><Linkedin className="h-5 w-5" /></a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Atendimento</h4>
              <ul className="space-y-2 text-sm text-blue-100">
                <li className="flex items-center justify-center align-middle">Seg a Sex: 9h às 18h</li>
                <li className="flex items-center justify-center align-middle">Sábado: 9h às 12h</li>
                <li className="flex items-center justify-center align-middle">Resposta média: 1–2h úteis</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-blue-500/40 text-sm text-blue-100 flex flex-col md:flex-row items-center justify-center gap-4">
            <p>© {new Date().getFullYear()} Visuarte. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
