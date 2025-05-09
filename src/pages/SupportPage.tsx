
import { useState } from 'react';
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LifeBuoy, Mail, MessageSquare, FileText } from 'lucide-react';

const SupportPage = () => {
  const [activeTab, setActiveTab] = useState("faq");

  return (
    <div className="min-h-screen flex flex-col bg-chatnest-dark">
      <NavBar />
      
      <main className="flex-grow pt-24 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 text-chatnest-light">Suporte ChatNest</h1>
            <p className="text-xl text-chatnest-light/70 max-w-2xl mx-auto">
              Estamos aqui para ajudar você a ter a melhor experiência possível com nossa plataforma.
            </p>
          </div>

          <Tabs 
            defaultValue={activeTab} 
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList className="grid grid-cols-3 max-w-lg mx-auto mb-8">
              <TabsTrigger value="faq">Perguntas Frequentes</TabsTrigger>
              <TabsTrigger value="contact">Contato Direto</TabsTrigger>
              <TabsTrigger value="docs">Documentação</TabsTrigger>
            </TabsList>

            <TabsContent value="faq" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2">
                <Card className="bg-chatnest-secondary/10 border-chatnest-secondary/30">
                  <CardHeader>
                    <CardTitle>Como criar meu primeiro bot?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-chatnest-light/80">
                      Para criar seu primeiro bot, acesse o Dashboard e clique em "Novo Bot". 
                      Você será guiado por um assistente que ajudará a configurar seu primeiro fluxo de conversa.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-chatnest-secondary/10 border-chatnest-secondary/30">
                  <CardHeader>
                    <CardTitle>Como posso integrar meu bot ao WhatsApp?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-chatnest-light/80">
                      Vá até Integrações &gt; WhatsApp e siga o passo a passo para conectar sua conta 
                      WhatsApp Business API ao seu bot no ChatNest.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-chatnest-secondary/10 border-chatnest-secondary/30">
                  <CardHeader>
                    <CardTitle>Posso mudar de plano a qualquer momento?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-chatnest-light/80">
                      Sim! Você pode fazer upgrade ou downgrade do seu plano a qualquer momento. 
                      As mudanças serão aplicadas no próximo ciclo de cobrança.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-chatnest-secondary/10 border-chatnest-secondary/30">
                  <CardHeader>
                    <CardTitle>Como exportar as conversas dos meus usuários?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-chatnest-light/80">
                      No Dashboard, acesse a seção "Resultados" do seu bot e clique em "Exportar". 
                      Você pode baixar os dados em formato CSV ou JSON.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="text-center mt-8">
                <Button 
                  variant="outline" 
                  className="border-chatnest-accent text-chatnest-accent hover:bg-chatnest-accent/10"
                  onClick={() => window.location.href = "/faq"}
                >
                  Ver todas as perguntas frequentes
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="contact" className="mt-6">
              <div className="grid gap-8 md:grid-cols-3">
                <Card className="bg-chatnest-secondary/10 border-chatnest-secondary/30">
                  <CardHeader className="text-center pb-2">
                    <div className="mx-auto p-3 rounded-full bg-chatnest-secondary/20 mb-4">
                      <Mail className="h-10 w-10 text-chatnest-accent" />
                    </div>
                    <CardTitle>Email</CardTitle>
                    <CardDescription className="text-chatnest-light/60">
                      Resposta em até 48 horas
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-center pt-2">
                    <p className="text-chatnest-light/80 mb-4">
                      Envie sua dúvida para nossa equipe de suporte
                    </p>
                    <Button 
                      variant="outline" 
                      className="border-chatnest-accent text-chatnest-accent hover:bg-chatnest-accent/10"
                      onClick={() => window.location.href = "mailto:suporte@chatnest.com.br"}
                    >
                      suporte@chatnest.com.br
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="bg-chatnest-secondary/10 border-chatnest-secondary/30">
                  <CardHeader className="text-center pb-2">
                    <div className="mx-auto p-3 rounded-full bg-chatnest-secondary/20 mb-4">
                      <MessageSquare className="h-10 w-10 text-chatnest-accent" />
                    </div>
                    <CardTitle>Chat ao Vivo</CardTitle>
                    <CardDescription className="text-chatnest-light/60">
                      Disponível em dias úteis (9h-18h)
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-center pt-2">
                    <p className="text-chatnest-light/80 mb-4">
                      Converse em tempo real com um especialista
                    </p>
                    <Button 
                      variant="outline" 
                      className="border-chatnest-accent text-chatnest-accent hover:bg-chatnest-accent/10"
                      onClick={() => window.location.href = "/contact"}
                    >
                      Iniciar Chat
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="bg-chatnest-secondary/10 border-chatnest-secondary/30">
                  <CardHeader className="text-center pb-2">
                    <div className="mx-auto p-3 rounded-full bg-chatnest-secondary/20 mb-4">
                      <LifeBuoy className="h-10 w-10 text-chatnest-accent" />
                    </div>
                    <CardTitle>Comunidade</CardTitle>
                    <CardDescription className="text-chatnest-light/60">
                      Disponível 24/7
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-center pt-2">
                    <p className="text-chatnest-light/80 mb-4">
                      Participe de nossa comunidade de usuários
                    </p>
                    <Button 
                      variant="outline" 
                      className="border-chatnest-accent text-chatnest-accent hover:bg-chatnest-accent/10"
                      onClick={() => window.location.href = "https://discord.gg/chatnest"}
                    >
                      Discord
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="docs" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card className="bg-chatnest-secondary/10 border-chatnest-secondary/30">
                  <CardHeader>
                    <CardTitle>Guias Rápidos</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc list-inside text-chatnest-light/80 space-y-2">
                      <li>Primeiros passos com ChatNest</li>
                      <li>Criando seu primeiro bot</li>
                      <li>Configuração do fluxo de conversa</li>
                      <li>Integrando com seu site</li>
                    </ul>
                    <Button 
                      className="mt-4 w-full bg-chatnest-secondary/30 hover:bg-chatnest-secondary/50"
                      onClick={() => window.location.href = "/docs/guides"}
                    >
                      Ver Guias
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="bg-chatnest-secondary/10 border-chatnest-secondary/30">
                  <CardHeader>
                    <CardTitle>Integração & API</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc list-inside text-chatnest-light/80 space-y-2">
                      <li>Documentação da API REST</li>
                      <li>Webhooks e callbacks</li>
                      <li>SDKs disponíveis</li>
                      <li>Exemplos de integração</li>
                    </ul>
                    <Button 
                      className="mt-4 w-full bg-chatnest-secondary/30 hover:bg-chatnest-secondary/50"
                      onClick={() => window.location.href = "/docs/api"}
                    >
                      Ver Documentação API
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="bg-chatnest-secondary/10 border-chatnest-secondary/30">
                  <CardHeader>
                    <CardTitle>Tutoriais em Vídeo</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc list-inside text-chatnest-light/80 space-y-2">
                      <li>Construindo bots avançados</li>
                      <li>Configurando variáveis e lógica</li>
                      <li>Integração com WhatsApp e Telegram</li>
                      <li>Analisando e otimizando conversas</li>
                    </ul>
                    <Button 
                      className="mt-4 w-full bg-chatnest-secondary/30 hover:bg-chatnest-secondary/50"
                      onClick={() => window.location.href = "/docs/videos"}
                    >
                      Ver Vídeos
                    </Button>
                  </CardContent>
                </Card>
              </div>
              
              <div className="text-center mt-8">
                <Button className="bg-gradient-to-r from-chatnest-accent to-chatnest-secondary"
                  onClick={() => window.location.href = "/docs"}>
                  Acessar Centro de Documentação Completo
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SupportPage;
