
import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, User, LogOut } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';

export const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, profile, signOut } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // Detect authentication and redirect logged in users away from login/signup
  useEffect(() => {
    if (user && (location.pathname === '/login' || location.pathname === '/signup')) {
      navigate('/dashboard', { replace: true });
    }
  }, [user, location.pathname, navigate]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = async () => {
    await signOut();
    navigate('/');
  };

  return (
    <nav className="py-4 px-6 sm:px-8 fixed top-0 left-0 right-0 z-50 bg-chatnest-dark/95 backdrop-blur-sm border-b border-chatnest-secondary/30">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex items-center justify-center w-8 h-8 rounded-md bg-gradient-to-br from-chatnest-accent to-chatnest-secondary">
            <span className="text-chatnest-light font-bold text-lg">C</span>
          </div>
          <span className="text-xl font-bold text-chatnest-light">ChatNest</span>
        </Link>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <Button 
            variant="ghost" 
            size="icon" 
            className="text-chatnest-light hover:bg-chatnest-secondary/20"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/features" className="text-chatnest-light/90 hover:text-chatnest-light transition-colors">
            Recursos
          </Link>
          <Link to="/pricing" className="text-chatnest-light/90 hover:text-chatnest-light transition-colors">
            Preços
          </Link>
          <Link to="/faq" className="text-chatnest-light/90 hover:text-chatnest-light transition-colors">
            FAQ
          </Link>
          
          {user ? (
            <>
              <Link to="/dashboard">
                <Button variant="ghost" className="text-chatnest-light hover:bg-chatnest-secondary/20">
                  Dashboard
                </Button>
              </Link>
              <div className="flex items-center gap-2">
                <div className="text-chatnest-light/90 mr-2 hidden lg:block">
                  {profile?.name || user.email}
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-chatnest-light hover:bg-chatnest-secondary/20"
                  onClick={handleLogout}
                >
                  <LogOut size={18} />
                </Button>
              </div>
            </>
          ) : (
            <>
              <Link to="/login">
                <Button variant="ghost" className="text-chatnest-light border border-chatnest-secondary/50 hover:bg-chatnest-secondary/20">
                  Entrar
                </Button>
              </Link>
              <Link to="/signup">
                <Button className="bg-gradient-to-r from-chatnest-accent to-chatnest-secondary hover:opacity-90 text-chatnest-light">
                  Começar agora
                </Button>
              </Link>
            </>
          )}
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-chatnest-dark border-b border-chatnest-secondary/30 py-4 px-6">
          <div className="flex flex-col space-y-4">
            <Link to="/features" className="text-chatnest-light/90 hover:text-chatnest-light py-2 transition-colors" onClick={toggleMenu}>
              Recursos
            </Link>
            <Link to="/pricing" className="text-chatnest-light/90 hover:text-chatnest-light py-2 transition-colors" onClick={toggleMenu}>
              Preços
            </Link>
            <Link to="/faq" className="text-chatnest-light/90 hover:text-chatnest-light py-2 transition-colors" onClick={toggleMenu}>
              FAQ
            </Link>
            
            {user ? (
              <>
                <Link to="/dashboard" className="block w-full" onClick={toggleMenu}>
                  <Button variant="outline" className="w-full justify-center text-chatnest-light border-chatnest-secondary/50">
                    Dashboard
                  </Button>
                </Link>
                <div className="text-chatnest-light/90 py-2">
                  {profile?.name || user.email}
                </div>
                <Button
                  variant="ghost"
                  className="w-full justify-center text-chatnest-light hover:bg-chatnest-secondary/20 flex items-center gap-2"
                  onClick={() => {
                    handleLogout();
                    toggleMenu();
                  }}
                >
                  <LogOut size={18} /> Sair
                </Button>
              </>
            ) : (
              <>
                <Link to="/login" className="block w-full" onClick={toggleMenu}>
                  <Button variant="outline" className="w-full justify-center text-chatnest-light border-chatnest-secondary/50">
                    Entrar
                  </Button>
                </Link>
                <Link to="/signup" className="block w-full" onClick={toggleMenu}>
                  <Button className="w-full justify-center bg-gradient-to-r from-chatnest-accent to-chatnest-secondary hover:opacity-90 text-chatnest-light">
                    Começar agora
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
