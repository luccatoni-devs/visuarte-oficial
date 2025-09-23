import { Mail, Smartphone, Instagram, Facebook, Linkedin, ShieldCheck, BadgeCheck, Lock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white border-t border-blue-700">
      <div className="container mx-auto px-4 py-10">
        {/* Top: Marca + Selos */}
        <div className="grid gap-8 md:grid-cols-3 items-center">
          <div className="md:col-span-1">
            <div className="flex flex-col items-center gap-3">
              <img
                src="/lovable-uploads/logo.png"
                alt="Visuarte"
                className="h-20 w-auto transition-transform duration-300 hover:scale-110"
              />
            </div>
            <p className="text-blue-100 mt-4 max-w-md text-center">
              Imagens que vendem por você. Melhoramos fotos de produtos, cardápios, imóveis e automóveis para aumentar suas conversões.
            </p>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-semibold mb-4">Selos e Verificações</h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              <div className="flex flex-col justify-center items-center rounded-md bg-blue-700/40 px-4 py-3 transition-transform duration-300 hover:scale-110">
                <img src="/src/assets/selos/selo-ssl.png" alt="Site Seguro" className="h-16 w-16 object-contain mb-2" />
                <p className="text-sm font-medium text-center">Site Seguro</p>
                <p className="text-xs text-blue-100 text-center">SSL Ativo</p>
              </div>
              <div className="flex flex-col justify-center items-center rounded-md bg-blue-700/40 px-4 py-3 transition-transform duration-300 hover:scale-110">
                <img src="/src/assets/selos/selo-compra-segura.png" alt="Pagamento Protegido" className="h-16 w-16 object-contain mb-2" />
                <p className="text-sm font-medium text-center">Pagamento Protegido</p>
                <p className="text-xs text-blue-100 text-center">Criptografia</p>
              </div>
              <div className="flex flex-col justify-center items-center rounded-md bg-blue-700/40 px-4 py-3 transition-transform duration-300 hover:scale-110">
                <img src="/src/assets/selos/selo-qualidade.png" alt="Qualidade Verificada" className="h-16 w-16 object-contain mb-2" />
                <p className="text-sm font-medium text-center">Qualidade Verificada</p>
                <p className="text-xs text-blue-100 text-center">Profissional</p>
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
                <li className="flex items-center justify-center align-middle transition-transform duration-300 hover:scale-110"><Mail className="h-4 w-4 mr-2 transition-transform duration-300 hover:scale-110" /> visuarte.empresa@gmail.com</li>
                <li className="flex items-center justify-center align-middle transition-transform duration-300 hover:scale-110"><Smartphone className="h-4 w-4 mr-2 transition-transform duration-300 hover:scale-110" /> (32) 99994-0335</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Redes Sociais</h4>
              <div className="flex items-center justify-center gap-3 text-blue-100">
                <a href="https://www.instagram.com/visuarte.oficiall?igsh=aGtlMTRkd20yOWo4" aria-label="Instagram" className="hover:text-white transition-colors transition-transform duration-300 hover:scale-110"><Instagram className="h-5 w-5" /></a>
                <a href="https://www.facebook.com/profile.php?id=61581279741289" aria-label="Facebook" className="hover:text-white transition-colors transition-transform duration-300 hover:scale-110"><Facebook className="h-5 w-5" /></a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Atendimento</h4>
              <ul className="space-y-2 text-sm text-blue-100">
                <li className="flex items-center justify-center align-middle transition-transform duration-300 hover:scale-110">24h por dia!</li>
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
