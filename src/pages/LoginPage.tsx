
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { LogIn, Eye, EyeOff } from 'lucide-react';

const LoginPage = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // This is a placeholder function for now
  // We'll implement the actual Supabase login later
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setLoading(true);
    
    setTimeout(() => {
      toast({
        title: "Aguarde a integração com Supabase",
        description: "Funcionalidade de login será implementada quando o Supabase estiver conectado.",
      });
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col bg-chatnest-dark">
      <NavBar />
      
      <div className="flex-1 flex items-center justify-center px-6 py-24">
        <Card className="w-full max-w-md bg-gradient-to-b from-chatnest-dark to-chatnest-secondary/5 border-chatnest-secondary/30">
          <CardHeader className="space-y-1 text-center">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-chatnest-secondary/20 mx-auto mb-4">
              <LogIn className="h-6 w-6 text-chatnest-accent" />
            </div>
            <CardTitle className="text-2xl font-bold">Entrar na sua conta</CardTitle>
            <CardDescription className="text-chatnest-light/70">
              Digite seu e-mail e senha para acessar sua conta
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">E-mail</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="seuemail@exemplo.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-chatnest-secondary/10 border-chatnest-secondary/30 text-chatnest-light"
                  required
                />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <Label htmlFor="password">Senha</Label>
                  <Link to="/recover" className="text-sm text-chatnest-accent hover:underline">
                    Esqueceu a senha?
                  </Link>
                </div>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Sua senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="bg-chatnest-secondary/10 border-chatnest-secondary/30 text-chatnest-light pr-10"
                    required
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="absolute right-0 top-0 h-full px-3 text-chatnest-light/70 hover:text-chatnest-light"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </Button>
                </div>
              </div>
              <div className="pt-2">
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-chatnest-accent to-chatnest-secondary hover:opacity-90"
                  disabled={loading}
                >
                  {loading ? "Entrando..." : "Entrar"}
                </Button>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-center">
            <div className="text-sm">
              Não tem uma conta?{" "}
              <Link to="/signup" className="text-chatnest-accent hover:underline font-medium">
                Criar conta
              </Link>
            </div>
          </CardFooter>
        </Card>
      </div>
      
      <Footer />
    </div>
  );
};

export default LoginPage;
