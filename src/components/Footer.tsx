
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Facebook, Instagram, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simular uma requisição de API
    setTimeout(() => {
      setIsSubmitting(false);
      setEmail('');
      toast.success('Inscrição realizada com sucesso!');
    }, 1000);
  };

  return (
    <footer className="bg-chatnest-dark border-t border-chatnest-secondary/30">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main footer content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center justify-center w-8 h-8 rounded-md bg-gradient-to-br from-chatnest-accent to-chatnest-secondary">
                <span className="text-chatnest-light font-bold text-lg">C</span>
              </div>
              <h3 className="text-xl font-bold text-chatnest-light">ChatNest</h3>
            </div>
            <p className="text-chatnest-light/70 mb-4">
              Crie, gerencie e analise seus bots do Typebot em uma única plataforma.
            </p>
            <div className="flex space-x-3 mb-6">
              <SocialIcon icon={<Facebook size={18} />} href="https://facebook.com" />
              <SocialIcon icon={<Instagram size={18} />} href="https://instagram.com" />
              <SocialIcon icon={<Twitter size={18} />} href="https://twitter.com" />
              <SocialIcon icon={<Linkedin size={18} />} href="https://linkedin.com" />
            </div>
            <p className="text-chatnest-light/50 text-sm">
              © {new Date().getFullYear()} ChatNest. Todos os direitos reservados.
            </p>
          </div>
          
          <div>
            <h4 className="text-chatnest-light font-semibold mb-4">Produto</h4>
            <ul className="space-y-2">
              <li><Link to="/features" className="text-chatnest-light/70 hover:text-chatnest-light transition-colors">Recursos</Link></li>
              <li><Link to="/pricing" className="text-chatnest-light/70 hover:text-chatnest-light transition-colors">Preços</Link></li>
              <li><Link to="/faq" className="text-chatnest-light/70 hover:text-chatnest-light transition-colors">FAQ</Link></li>
              <li><Link to="/roadmap" className="text-chatnest-light/70 hover:text-chatnest-light transition-colors">Roadmap</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-chatnest-light font-semibold mb-4">Suporte</h4>
            <ul className="space-y-2">
              <li><Link to="/docs" className="text-chatnest-light/70 hover:text-chatnest-light transition-colors">Documentação</Link></li>
              <li><Link to="/contact" className="text-chatnest-light/70 hover:text-chatnest-light transition-colors">Contato</Link></li>
              <li><Link to="/status" className="text-chatnest-light/70 hover:text-chatnest-light transition-colors">Status</Link></li>
              <li><a href="mailto:suporte@chatnest.com.br" className="text-chatnest-light/70 hover:text-chatnest-light transition-colors">Email de Suporte</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-chatnest-light font-semibold mb-4">Newsletter</h4>
            <p className="text-chatnest-light/70 mb-3">Fique por dentro das novidades e atualizações do ChatNest</p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Seu email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="px-4 py-2 bg-chatnest-secondary/20 border border-chatnest-secondary/30 rounded-l-md text-chatnest-light placeholder:text-chatnest-light/50 flex-1 focus:outline-none focus:ring-1 focus:ring-chatnest-accent"
                  required
                />
                <Button 
                  type="submit" 
                  className="bg-chatnest-accent hover:bg-chatnest-accent/90 text-chatnest-light rounded-l-none"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Enviando...' : 'Inscrever'}
                </Button>
              </div>
              <p className="text-xs text-chatnest-light/50">
                Ao se inscrever você concorda com nossa <Link to="/privacy" className="underline">Política de Privacidade</Link>
              </p>
            </form>
          </div>
        </div>

        {/* Footer bottom */}
        <Separator className="bg-chatnest-secondary/30" />
        
        <div className="py-6 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-chatnest-light/50 mb-4 md:mb-0">
            <span>Um projeto desenvolvido com ❤️ no Brasil</span>
          </div>
          
          <div className="flex space-x-4 text-sm text-chatnest-light/50">
            <Link to="/privacy" className="hover:text-chatnest-light/70">Privacidade</Link>
            <Link to="/terms" className="hover:text-chatnest-light/70">Termos</Link>
            <Link to="/cookies" className="hover:text-chatnest-light/70">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Helper component for social icons
const SocialIcon = ({ icon, href }: { icon: React.ReactNode, href: string }) => {
  return (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center w-8 h-8 rounded-full bg-chatnest-secondary/30 text-chatnest-light hover:bg-chatnest-accent transition-colors"
    >
      {icon}
    </a>
  );
};

export default Footer;
