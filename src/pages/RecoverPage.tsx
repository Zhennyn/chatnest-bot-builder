
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { KeyRound, ArrowLeft } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

const RecoverPage = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleRecover = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast.error('Por favor informe seu email');
      return;
    }
    
    setLoading(true);
    
    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/reset-password`,
      });
      
      if (error) throw error;
      
      setSubmitted(true);
      toast.success('Email de recuperação enviado com sucesso!');
      
    } catch (error: any) {
      toast.error(error.message || 'Erro ao enviar email de recuperação');
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
              <KeyRound className="h-6 w-6 text-chatnest-accent" />
            </div>
            <CardTitle className="text-2xl font-bold">Recuperação de Senha</CardTitle>
            <CardDescription className="text-chatnest-light/70">
              {!submitted 
                ? "Digite seu e-mail para receber um link de recuperação de senha" 
                : "Verifique seu e-mail para instruções de recuperação"}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {!submitted ? (
              <form onSubmit={handleRecover} className="space-y-4">
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
                <div className="pt-2">
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-chatnest-accent to-chatnest-secondary hover:opacity-90"
                    disabled={loading}
                  >
                    {loading ? "Enviando..." : "Enviar link de recuperação"}
                  </Button>
                </div>
              </form>
            ) : (
              <div className="text-center py-6">
                <div className="bg-chatnest-secondary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-chatnest-accent">
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>
                <p className="text-lg font-medium mb-2">E-mail enviado!</p>
                <p className="text-chatnest-light/70 mb-6">
                  Verifique a caixa de entrada de {email} para obter instruções de recuperação de senha.
                </p>
                <Button 
                  variant="outline" 
                  className="border-chatnest-secondary/50 hover:bg-chatnest-secondary/20"
                  onClick={() => setSubmitted(false)}
                >
                  Tentar com outro e-mail
                </Button>
              </div>
            )}
          </CardContent>
          <CardFooter className="flex justify-center">
            <Link to="/login" className="text-chatnest-accent hover:underline font-medium flex items-center gap-1">
              <ArrowLeft size={16} /> Voltar para o login
            </Link>
          </CardFooter>
        </Card>
      </div>
      
      <Footer />
    </div>
  );
};

export default RecoverPage;
