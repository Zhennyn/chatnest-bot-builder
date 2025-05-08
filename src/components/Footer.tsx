
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-chatnest-dark border-t border-chatnest-secondary/30 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
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
            </ul>
          </div>
          
          <div>
            <h4 className="text-chatnest-light font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><Link to="/privacy" className="text-chatnest-light/70 hover:text-chatnest-light transition-colors">Privacidade</Link></li>
              <li><Link to="/terms" className="text-chatnest-light/70 hover:text-chatnest-light transition-colors">Termos</Link></li>
              <li><Link to="/cookies" className="text-chatnest-light/70 hover:text-chatnest-light transition-colors">Cookies</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
