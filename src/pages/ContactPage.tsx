
import { useState } from 'react';
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Mail, MessageSquare } from "lucide-react";

const ContactPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simular envio do formulário
    setTimeout(() => {
      toast.success("Mensagem enviada com sucesso! Em breve entraremos em contato.");
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col bg-chatnest-dark">
      <NavBar />
      
      <main className="flex-grow pt-24 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex justify-center items-center mb-4">
              <MessageSquare className="h-10 w-10 text-chatnest-accent mr-2" />
              <h1 className="text-3xl md:text-4xl font-bold text-chatnest-light">Fale Conosco</h1>
            </div>
            <p className="text-xl text-chatnest-light/70 max-w-2xl mx-auto">
              Estamos sempre à disposição para ajudar. Entre em contato com a equipe ChatNest.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-chatnest-secondary/10 border-chatnest-secondary/30 md:col-span-2">
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold text-chatnest-light mb-6">Envie sua mensagem</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-chatnest-light/80">
                        Nome completo
                      </label>
                      <Input
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Seu nome"
                        required
                        className="bg-chatnest-secondary/20 border-chatnest-secondary/30 text-chatnest-light placeholder:text-chatnest-light/50"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-chatnest-light/80">
                        Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="seu.email@exemplo.com"
                        required
                        className="bg-chatnest-secondary/20 border-chatnest-secondary/30 text-chatnest-light placeholder:text-chatnest-light/50"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-chatnest-light/80">
                      Assunto
                    </label>
                    <Input
                      id="subject"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      placeholder="Do que se trata sua mensagem?"
                      required
                      className="bg-chatnest-secondary/20 border-chatnest-secondary/30 text-chatnest-light placeholder:text-chatnest-light/50"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-chatnest-light/80">
                      Mensagem
                    </label>
                    <Textarea
                      id="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Descreva detalhadamente como podemos ajudar"
                      required
                      rows={6}
                      className="bg-chatnest-secondary/20 border-chatnest-secondary/30 text-chatnest-light placeholder:text-chatnest-light/50 resize-none"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-chatnest-accent to-chatnest-secondary hover:opacity-90"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
                  </Button>
                </form>
              </CardContent>
            </Card>
            
            <div className="space-y-6">
              <Card className="bg-chatnest-secondary/10 border-chatnest-secondary/30">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-chatnest-light mb-4">Informações de Contato</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm font-medium text-chatnest-light/80">Email para suporte:</p>
                      <a 
                        href="mailto:suporte@chatnest.com.br" 
                        className="text-chatnest-accent hover:underline"
                      >
                        suporte@chatnest.com.br
                      </a>
                    </div>
                    
                    <div>
                      <p className="text-sm font-medium text-chatnest-light/80">Email para vendas:</p>
                      <a 
                        href="mailto:vendas@chatnest.com.br" 
                        className="text-chatnest-accent hover:underline"
                      >
                        vendas@chatnest.com.br
                      </a>
                    </div>
                    
                    <div>
                      <p className="text-sm font-medium text-chatnest-light/80">Horário de atendimento:</p>
                      <p className="text-chatnest-light">Segunda à Sexta: 9h às 18h</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-chatnest-secondary/10 border-chatnest-secondary/30">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-chatnest-light mb-4">Localização</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm font-medium text-chatnest-light/80">Endereço:</p>
                      <p className="text-chatnest-light">
                        Av. Paulista, 1000, 15º andar
                        <br />
                        Bela Vista, São Paulo - SP
                        <br />
                        CEP: 01310-100
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-chatnest-accent to-chatnest-secondary border-none">
                <CardContent className="p-6">
                  <div className="flex space-x-3 items-start">
                    <Mail className="w-6 h-6 text-chatnest-light mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-chatnest-light">Newsletter</h3>
                      <p className="text-chatnest-light/90 text-sm mb-3">
                        Inscreva-se para receber atualizações sobre nossos produtos e novidades.
                      </p>
                      <a href="/#newsletter">
                        <Button variant="secondary" className="w-full bg-chatnest-light/20 hover:bg-chatnest-light/30 text-chatnest-light">
                          Inscrever-se
                        </Button>
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;
