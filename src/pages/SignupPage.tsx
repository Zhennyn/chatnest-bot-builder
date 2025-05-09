
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { UserCheck, Eye, EyeOff } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

const SignupPage = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !email || !password) {
      toast.error('Por favor preencha todos os campos');
      return;
    }
    
    setLoading(true);
    
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            name,
          },
        },
      });
      
      if (error) throw error;
      
      toast.success('Conta criada com sucesso! Verifique seu email para confirmar o cadastro.');
      setTimeout(() => {
        navigate('/login');
      }, 2000);
      
    } catch (error: any) {
      toast.error(error.message || 'Erro ao criar conta');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-chatnest-dark">
      <NavBar />
      
      <div className="flex-1 flex items-center justify-center px-6 py-24">
        <Card className="w-full max-w-md bg-gradient-to-b from-chatnest-dark to-chatnest-secondary/5 border-chatnest-secondary/30">
          <CardHeader className="space-y-1 text-center">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-chatnest-secondary/20 mx-auto mb-4">
              <UserCheck className="h-6 w-6 text-chatnest-accent" />
            </div>
            <CardTitle className="text-2xl font-bold">Criar uma conta</CardTitle>
            <CardDescription className="text-chatnest-light/70">
              Preencha os campos abaixo para criar sua conta no ChatNest
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSignup} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Nome</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Digite seu nome completo"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-chatnest-secondary/10 border-chatnest-secondary/30 text-chatnest-light"
                  required
                />
              </div>
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
                <Label htmlFor="password">Senha</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Crie uma senha segura"
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
                  {loading ? "Criando conta..." : "Criar conta"}
                </Button>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-center flex-col space-y-4 text-center">
            <div className="text-sm text-chatnest-light/70">
              Ao criar uma conta, você concorda com nossos{" "}
              <Link to="/terms" className="text-chatnest-accent hover:underline">
                Termos de Serviço
              </Link>{" "}
              e{" "}
              <Link to="/privacy" className="text-chatnest-accent hover:underline">
                Política de Privacidade
              </Link>.
            </div>
            <div className="text-sm">
              Já tem uma conta?{" "}
              <Link to="/login" className="text-chatnest-accent hover:underline font-medium">
                Faça login
              </Link>
            </div>
          </CardFooter>
        </Card>
      </div>
      
      <Footer />
    </div>
  );
};

export default SignupPage;
