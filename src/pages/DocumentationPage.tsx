
import { useState } from 'react';
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Book, FileText, Search } from "lucide-react";

const DocumentationPage = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen flex flex-col bg-chatnest-dark">
      <NavBar />
      
      <main className="flex-grow pt-24 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex justify-center items-center mb-4">
              <Book className="h-10 w-10 text-chatnest-accent mr-2" />
              <h1 className="text-3xl md:text-4xl font-bold text-chatnest-light">Documentação</h1>
            </div>
            <p className="text-xl text-chatnest-light/70 max-w-2xl mx-auto">
              Guias completos e recursos para ajudar você a tirar o máximo proveito do ChatNest.
            </p>
          </div>
          
          <div className="relative max-w-2xl mx-auto mb-12">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-chatnest-light/50" />
            <Input 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Pesquisar na documentação..." 
              className="pl-10 bg-chatnest-secondary/20 border-chatnest-secondary/30 text-chatnest-light placeholder:text-chatnest-light/50"
            />
          </div>

          <Tabs defaultValue="guides" className="w-full">
            <TabsList className="grid grid-cols-4 max-w-2xl mx-auto mb-8">
              <TabsTrigger value="guides">Guias</TabsTrigger>
              <TabsTrigger value="api">API</TabsTrigger>
              <TabsTrigger value="integrations">Integrações</TabsTrigger>
              <TabsTrigger value="tutorials">Tutoriais</TabsTrigger>
            </TabsList>

            <TabsContent value="guides" className="mt-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="bg-chatnest-secondary/10 border-chatnest-secondary/30 hover:border-chatnest-accent/50 transition-colors">
                  <CardHeader>
                    <CardTitle>Primeiros Passos</CardTitle>
                    <CardDescription>Comece a usar o ChatNest em minutos</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-chatnest-light/80">
                      <li>
                        <a href="/docs/getting-started/overview" className="hover:text-chatnest-accent">
                          Visão Geral da Plataforma
                        </a>
                      </li>
                      <li>
                        <a href="/docs/getting-started/signup" className="hover:text-chatnest-accent">
                          Como Criar uma Conta
                        </a>
                      </li>
                      <li>
                        <a href="/docs/getting-started/first-bot" className="hover:text-chatnest-accent">
                          Criando Seu Primeiro Bot
                        </a>
                      </li>
                      <li>
                        <a href="/docs/getting-started/dashboard" className="hover:text-chatnest-accent">
                          Navegando no Dashboard
                        </a>
                      </li>
                    </ul>
                    <Button className="w-full mt-4 bg-chatnest-secondary/30 hover:bg-chatnest-secondary/50">
                      Ver Guia Completo
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="bg-chatnest-secondary/10 border-chatnest-secondary/30 hover:border-chatnest-accent/50 transition-colors">
                  <CardHeader>
                    <CardTitle>Construção de Fluxos</CardTitle>
                    <CardDescription>Aprenda a criar conversas interativas</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-chatnest-light/80">
                      <li>
                        <a href="/docs/flows/editor" className="hover:text-chatnest-accent">
                          Editor de Fluxos
                        </a>
                      </li>
                      <li>
                        <a href="/docs/flows/blocks" className="hover:text-chatnest-accent">
                          Tipos de Blocos
                        </a>
                      </li>
                      <li>
                        <a href="/docs/flows/variables" className="hover:text-chatnest-accent">
                          Usando Variáveis
                        </a>
                      </li>
                      <li>
                        <a href="/docs/flows/logic" className="hover:text-chatnest-accent">
                          Condições e Lógica
                        </a>
                      </li>
                    </ul>
                    <Button className="w-full mt-4 bg-chatnest-secondary/30 hover:bg-chatnest-secondary/50">
                      Ver Guia Completo
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="bg-chatnest-secondary/10 border-chatnest-secondary/30 hover:border-chatnest-accent/50 transition-colors">
                  <CardHeader>
                    <CardTitle>Publicação e Integração</CardTitle>
                    <CardDescription>Compartilhe seu bot com o mundo</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-chatnest-light/80">
                      <li>
                        <a href="/docs/publish/website" className="hover:text-chatnest-accent">
                          Integração em Sites
                        </a>
                      </li>
                      <li>
                        <a href="/docs/publish/whatsapp" className="hover:text-chatnest-accent">
                          Conexão com WhatsApp
                        </a>
                      </li>
                      <li>
                        <a href="/docs/publish/embed" className="hover:text-chatnest-accent">
                          Opções de Incorporação
                        </a>
                      </li>
                      <li>
                        <a href="/docs/publish/share" className="hover:text-chatnest-accent">
                          Link Público
                        </a>
                      </li>
                    </ul>
                    <Button className="w-full mt-4 bg-chatnest-secondary/30 hover:bg-chatnest-secondary/50">
                      Ver Guia Completo
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="bg-chatnest-secondary/10 border-chatnest-secondary/30 hover:border-chatnest-accent/50 transition-colors">
                  <CardHeader>
                    <CardTitle>Análise de Resultados</CardTitle>
                    <CardDescription>Monitore e otimize o desempenho</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-chatnest-light/80">
                      <li>
                        <a href="/docs/results/dashboard" className="hover:text-chatnest-accent">
                          Painel de Resultados
                        </a>
                      </li>
                      <li>
                        <a href="/docs/results/metrics" className="hover:text-chatnest-accent">
                          Principais Métricas
                        </a>
                      </li>
                      <li>
                        <a href="/docs/results/export" className="hover:text-chatnest-accent">
                          Exportação de Dados
                        </a>
                      </li>
                      <li>
                        <a href="/docs/results/optimization" className="hover:text-chatnest-accent">
                          Dicas de Otimização
                        </a>
                      </li>
                    </ul>
                    <Button className="w-full mt-4 bg-chatnest-secondary/30 hover:bg-chatnest-secondary/50">
                      Ver Guia Completo
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="bg-chatnest-secondary/10 border-chatnest-secondary/30 hover:border-chatnest-accent/50 transition-colors">
                  <CardHeader>
                    <CardTitle>Configurações Avançadas</CardTitle>
                    <CardDescription>Personalize sua experiência</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-chatnest-light/80">
                      <li>
                        <a href="/docs/settings/workspace" className="hover:text-chatnest-accent">
                          Gestão de Workspace
                        </a>
                      </li>
                      <li>
                        <a href="/docs/settings/members" className="hover:text-chatnest-accent">
                          Adição de Membros
                        </a>
                      </li>
                      <li>
                        <a href="/docs/settings/billing" className="hover:text-chatnest-accent">
                          Faturamento e Planos
                        </a>
                      </li>
                      <li>
                        <a href="/docs/settings/security" className="hover:text-chatnest-accent">
                          Segurança e Privacidade
                        </a>
                      </li>
                    </ul>
                    <Button className="w-full mt-4 bg-chatnest-secondary/30 hover:bg-chatnest-secondary/50">
                      Ver Guia Completo
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="bg-chatnest-secondary/10 border-chatnest-secondary/30 hover:border-chatnest-accent/50 transition-colors">
                  <CardHeader>
                    <CardTitle>Troubleshooting</CardTitle>
                    <CardDescription>Resolva problemas comuns</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-chatnest-light/80">
                      <li>
                        <a href="/docs/troubleshooting/common-issues" className="hover:text-chatnest-accent">
                          Problemas Comuns
                        </a>
                      </li>
                      <li>
                        <a href="/docs/troubleshooting/debugging" className="hover:text-chatnest-accent">
                          Depuração de Fluxos
                        </a>
                      </li>
                      <li>
                        <a href="/docs/troubleshooting/variables" className="hover:text-chatnest-accent">
                          Problemas com Variáveis
                        </a>
                      </li>
                      <li>
                        <a href="/docs/troubleshooting/support" className="hover:text-chatnest-accent">
                          Como Obter Suporte
                        </a>
                      </li>
                    </ul>
                    <Button className="w-full mt-4 bg-chatnest-secondary/30 hover:bg-chatnest-secondary/50">
                      Ver Guia Completo
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="api" className="mt-6">
              <div>
                <div className="flex items-center space-x-2 mb-6">
                  <FileText className="h-6 w-6 text-chatnest-accent" />
                  <h2 className="text-2xl font-bold text-chatnest-light">Documentação da API</h2>
                </div>
                
                <Card className="bg-chatnest-secondary/10 border-chatnest-secondary/30 mb-8">
                  <CardContent className="p-6">
                    <p className="text-chatnest-light/80 mb-4">
                      Nossa API REST permite que você integre o ChatNest com seus próprios sistemas e aplicativos.
                      Use a documentação abaixo para começar a desenvolver sua integração.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <Button className="bg-chatnest-secondary/30 hover:bg-chatnest-secondary/50">
                        Introdução à API
                      </Button>
                      <Button className="bg-chatnest-secondary/30 hover:bg-chatnest-secondary/50">
                        Guia de Autenticação
                      </Button>
                    </div>
                  </CardContent>
                </Card>
                
                <div className="space-y-6">
                  <Card className="bg-chatnest-secondary/10 border-chatnest-secondary/30">
                    <CardHeader>
                      <CardTitle>Endpoints de Bots</CardTitle>
                      <CardDescription>Gerencie seus bots programaticamente</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3 text-chatnest-light/80">
                        <li>
                          <div className="flex items-center">
                            <span className="px-2 py-1 mr-2 bg-green-500/20 text-green-300 rounded text-xs">GET</span>
                            <a href="/docs/api/bots" className="hover:text-chatnest-accent">
                              /api/v1/bots
                            </a>
                          </div>
                          <p className="text-sm text-chatnest-light/60 ml-12">Listar todos os bots</p>
                        </li>
                        <li>
                          <div className="flex items-center">
                            <span className="px-2 py-1 mr-2 bg-green-500/20 text-green-300 rounded text-xs">GET</span>
                            <a href="/docs/api/bots/id" className="hover:text-chatnest-accent">
                              /api/v1/bots/{'{id}'}
                            </a>
                          </div>
                          <p className="text-sm text-chatnest-light/60 ml-12">Obter detalhes de um bot</p>
                        </li>
                        <li>
                          <div className="flex items-center">
                            <span className="px-2 py-1 mr-2 bg-blue-500/20 text-blue-300 rounded text-xs">POST</span>
                            <a href="/docs/api/bots/create" className="hover:text-chatnest-accent">
                              /api/v1/bots
                            </a>
                          </div>
                          <p className="text-sm text-chatnest-light/60 ml-12">Criar um novo bot</p>
                        </li>
                        <li>
                          <div className="flex items-center">
                            <span className="px-2 py-1 mr-2 bg-amber-500/20 text-amber-300 rounded text-xs">PUT</span>
                            <a href="/docs/api/bots/update" className="hover:text-chatnest-accent">
                              /api/v1/bots/{'{id}'}
                            </a>
                          </div>
                          <p className="text-sm text-chatnest-light/60 ml-12">Atualizar um bot existente</p>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-chatnest-secondary/10 border-chatnest-secondary/30">
                    <CardHeader>
                      <CardTitle>Endpoints de Resultados</CardTitle>
                      <CardDescription>Acesse dados de interações e respostas</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3 text-chatnest-light/80">
                        <li>
                          <div className="flex items-center">
                            <span className="px-2 py-1 mr-2 bg-green-500/20 text-green-300 rounded text-xs">GET</span>
                            <a href="/docs/api/results" className="hover:text-chatnest-accent">
                              /api/v1/bots/{'{id}'}/results
                            </a>
                          </div>
                          <p className="text-sm text-chatnest-light/60 ml-12">Listar resultados de um bot</p>
                        </li>
                        <li>
                          <div className="flex items-center">
                            <span className="px-2 py-1 mr-2 bg-green-500/20 text-green-300 rounded text-xs">GET</span>
                            <a href="/docs/api/results/export" className="hover:text-chatnest-accent">
                              /api/v1/bots/{'{id}'}/results/export
                            </a>
                          </div>
                          <p className="text-sm text-chatnest-light/60 ml-12">Exportar resultados em CSV ou JSON</p>
                        </li>
                        <li>
                          <div className="flex items-center">
                            <span className="px-2 py-1 mr-2 bg-green-500/20 text-green-300 rounded text-xs">GET</span>
                            <a href="/docs/api/results/analytics" className="hover:text-chatnest-accent">
                              /api/v1/bots/{'{id}'}/analytics
                            </a>
                          </div>
                          <p className="text-sm text-chatnest-light/60 ml-12">Obter estatísticas e métricas</p>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="integrations" className="mt-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="bg-chatnest-secondary/10 border-chatnest-secondary/30 hover:border-chatnest-accent/50 transition-colors">
                  <CardHeader>
                    <div className="w-12 h-12 rounded bg-white p-2 mb-2">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp Logo" className="w-full h-full" />
                    </div>
                    <CardTitle>WhatsApp</CardTitle>
                    <CardDescription>Conecte seu bot ao WhatsApp Business API</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-chatnest-light/80 mb-4">
                      Integre seu bot com o WhatsApp para interagir com seus clientes na plataforma de mensagens mais popular do Brasil.
                    </p>
                    <Button className="w-full bg-chatnest-secondary/30 hover:bg-chatnest-secondary/50">
                      Ver Documentação
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="bg-chatnest-secondary/10 border-chatnest-secondary/30 hover:border-chatnest-accent/50 transition-colors">
                  <CardHeader>
                    <div className="w-12 h-12 rounded bg-white p-2 mb-2">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg" alt="Telegram Logo" className="w-full h-full" />
                    </div>
                    <CardTitle>Telegram</CardTitle>
                    <CardDescription>Crie bots para o Telegram</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-chatnest-light/80 mb-4">
                      Conecte seu bot ChatNest ao Telegram para criar experiências interativas na plataforma.
                    </p>
                    <Button className="w-full bg-chatnest-secondary/30 hover:bg-chatnest-secondary/50">
                      Ver Documentação
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="bg-chatnest-secondary/10 border-chatnest-secondary/30 hover:border-chatnest-accent/50 transition-colors">
                  <CardHeader>
                    <div className="w-12 h-12 rounded bg-white p-2 mb-2">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/9/93/Wordpress_Blue_logo.png" alt="WordPress Logo" className="w-full h-full" />
                    </div>
                    <CardTitle>WordPress</CardTitle>
                    <CardDescription>Plugin para sites WordPress</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-chatnest-light/80 mb-4">
                      Adicione seu bot ChatNest ao seu site WordPress com nosso plugin oficial.
                    </p>
                    <Button className="w-full bg-chatnest-secondary/30 hover:bg-chatnest-secondary/50">
                      Ver Documentação
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="bg-chatnest-secondary/10 border-chatnest-secondary/30 hover:border-chatnest-accent/50 transition-colors">
                  <CardHeader>
                    <div className="w-12 h-12 rounded bg-white p-2 mb-2">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/8/83/Zapier_logo.svg" alt="Zapier Logo" className="w-full h-full" />
                    </div>
                    <CardTitle>Zapier</CardTitle>
                    <CardDescription>Conecte seu bot a milhares de apps</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-chatnest-light/80 mb-4">
                      Integre o ChatNest com mais de 3.000 aplicativos através do Zapier sem precisar de código.
                    </p>
                    <Button className="w-full bg-chatnest-secondary/30 hover:bg-chatnest-secondary/50">
                      Ver Documentação
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="bg-chatnest-secondary/10 border-chatnest-secondary/30 hover:border-chatnest-accent/50 transition-colors">
                  <CardHeader>
                    <div className="w-12 h-12 rounded bg-white p-2 mb-2">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/d/d4/Webhooks.svg" alt="Webhook Icon" className="w-full h-full" />
                    </div>
                    <CardTitle>Webhooks</CardTitle>
                    <CardDescription>Integração personalizada via HTTP</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-chatnest-light/80 mb-4">
                      Use webhooks para conectar seu bot a qualquer sistema que aceite requisições HTTP.
                    </p>
                    <Button className="w-full bg-chatnest-secondary/30 hover:bg-chatnest-secondary/50">
                      Ver Documentação
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="bg-chatnest-secondary/10 border-chatnest-secondary/30 hover:border-chatnest-accent/50 transition-colors">
                  <CardHeader>
                    <div className="w-12 h-12 rounded bg-white p-2 mb-2">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/e/e6/Google_Sheets_2020_Logo.svg" alt="Google Sheets Logo" className="w-full h-full" />
                    </div>
                    <CardTitle>Google Sheets</CardTitle>
                    <CardDescription>Salve respostas em planilhas</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-chatnest-light/80 mb-4">
                      Envie automaticamente as respostas dos usuários para planilhas do Google Sheets.
                    </p>
                    <Button className="w-full bg-chatnest-secondary/30 hover:bg-chatnest-secondary/50">
                      Ver Documentação
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="tutorials" className="mt-6">
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="bg-chatnest-secondary/10 border-chatnest-secondary/30">
                  <CardContent className="p-6">
                    <div className="aspect-video w-full bg-chatnest-secondary/30 rounded-md overflow-hidden mb-4">
                      <div className="w-full h-full flex items-center justify-center">
                        <FileText className="w-12 h-12 text-chatnest-light/50" />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-chatnest-light mb-2">Criando um Bot de Atendimento ao Cliente</h3>
                    <p className="text-chatnest-light/80 mb-4">
                      Aprenda a criar um bot de atendimento ao cliente completo com ChatNest, incluindo 
                      captura de informações, FAQ automatizado e transferência para atendente humano.
                    </p>
                    <Button className="w-full bg-chatnest-secondary/30 hover:bg-chatnest-secondary/50">
                      Assistir Tutorial
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="bg-chatnest-secondary/10 border-chatnest-secondary/30">
                  <CardContent className="p-6">
                    <div className="aspect-video w-full bg-chatnest-secondary/30 rounded-md overflow-hidden mb-4">
                      <div className="w-full h-full flex items-center justify-center">
                        <FileText className="w-12 h-12 text-chatnest-light/50" />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-chatnest-light mb-2">Bot de Geração de Leads</h3>
                    <p className="text-chatnest-light/80 mb-4">
                      Neste tutorial, vamos mostrar como criar um bot de captação de leads que 
                      integra com seu CRM e qualifica potenciais clientes automaticamente.
                    </p>
                    <Button className="w-full bg-chatnest-secondary/30 hover:bg-chatnest-secondary/50">
                      Assistir Tutorial
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="bg-chatnest-secondary/10 border-chatnest-secondary/30">
                  <CardContent className="p-6">
                    <div className="aspect-video w-full bg-chatnest-secondary/30 rounded-md overflow-hidden mb-4">
                      <div className="w-full h-full flex items-center justify-center">
                        <FileText className="w-12 h-12 text-chatnest-light/50" />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-chatnest-light mb-2">Integrando WhatsApp e Site</h3>
                    <p className="text-chatnest-light/80 mb-4">
                      Descubra como criar uma experiência omnichannel, com o mesmo bot 
                      funcionando em seu site e no WhatsApp de forma sincronizada.
                    </p>
                    <Button className="w-full bg-chatnest-secondary/30 hover:bg-chatnest-secondary/50">
                      Assistir Tutorial
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="bg-chatnest-secondary/10 border-chatnest-secondary/30">
                  <CardContent className="p-6">
                    <div className="aspect-video w-full bg-chatnest-secondary/30 rounded-md overflow-hidden mb-4">
                      <div className="w-full h-full flex items-center justify-center">
                        <FileText className="w-12 h-12 text-chatnest-light/50" />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-chatnest-light mb-2">Avançado: Variáveis e Condições</h3>
                    <p className="text-chatnest-light/80 mb-4">
                      Um tutorial avançado sobre como utilizar variáveis e condições lógicas 
                      para criar fluxos de conversa dinâmicos e personalizados.
                    </p>
                    <Button className="w-full bg-chatnest-secondary/30 hover:bg-chatnest-secondary/50">
                      Assistir Tutorial
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default DocumentationPage;
