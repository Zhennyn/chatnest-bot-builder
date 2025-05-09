
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Route } from "lucide-react";

const RoadmapPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-chatnest-dark">
      <NavBar />
      
      <main className="flex-grow pt-24 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex justify-center items-center mb-6">
              <Route className="h-12 w-12 text-chatnest-accent mr-3" />
              <h1 className="text-4xl font-bold text-chatnest-light">Roadmap ChatNest</h1>
            </div>
            <p className="text-xl text-chatnest-light/70 max-w-2xl mx-auto">
              Conheça os recursos planejados para o futuro do ChatNest e acompanhe nosso progresso.
            </p>
          </div>

          <Tabs defaultValue="upcoming" className="w-full">
            <TabsList className="grid grid-cols-3 max-w-lg mx-auto mb-8">
              <TabsTrigger value="upcoming">Próximos Lançamentos</TabsTrigger>
              <TabsTrigger value="progress">Em Desenvolvimento</TabsTrigger>
              <TabsTrigger value="completed">Lançamentos Recentes</TabsTrigger>
            </TabsList>

            <TabsContent value="upcoming" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2">
                <Card className="bg-chatnest-secondary/10 border-chatnest-secondary/30">
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <CardTitle className="text-chatnest-light">Integração com CRM</CardTitle>
                      <Badge className="bg-blue-500/20 text-blue-300 hover:bg-blue-500/30">Q3 2025</Badge>
                    </div>
                    <CardDescription className="text-chatnest-light/60">
                      Conecte seu bot diretamente com os principais CRMs do mercado
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-chatnest-light/80">
                      Sincronize dados de leads, conversas e interações diretamente 
                      com Salesforce, HubSpot, Pipedrive e outros CRMs populares.
                    </p>
                    <div className="mt-4">
                      <p className="text-chatnest-light/60 text-sm">Recursos planejados:</p>
                      <ul className="list-disc list-inside text-chatnest-light/80 text-sm mt-1">
                        <li>Mapeamento de campos customizáveis</li>
                        <li>Sincronização bidirecional de dados</li>
                        <li>Rastreamento automático de conversações</li>
                        <li>Atualização de status de leads em tempo real</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="bg-chatnest-secondary/10 border-chatnest-secondary/30">
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <CardTitle className="text-chatnest-light">Análise Avançada de Conversas</CardTitle>
                      <Badge className="bg-blue-500/20 text-blue-300 hover:bg-blue-500/30">Q4 2025</Badge>
                    </div>
                    <CardDescription className="text-chatnest-light/60">
                      Insights detalhados sobre o engajamento dos seus clientes
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-chatnest-light/80">
                      Descubra padrões de comportamento, identifique pontos de abandono 
                      e otimize seus fluxos de conversa com análises baseadas em IA.
                    </p>
                    <div className="mt-4">
                      <p className="text-chatnest-light/60 text-sm">Recursos planejados:</p>
                      <ul className="list-disc list-inside text-chatnest-light/80 text-sm mt-1">
                        <li>Dashboards personalizáveis</li>
                        <li>Análise de sentimentos em tempo real</li>
                        <li>Detecção automática de problemas comuns</li>
                        <li>Recomendações para otimização de fluxos</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="progress" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2">
                <Card className="bg-chatnest-secondary/10 border-chatnest-secondary/30">
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <CardTitle className="text-chatnest-light">Modelo de IA Personalizado</CardTitle>
                      <Badge className="bg-amber-500/20 text-amber-300 hover:bg-amber-500/30">80% Concluído</Badge>
                    </div>
                    <CardDescription className="text-chatnest-light/60">
                      Previsão de lançamento: Agosto 2025
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-chatnest-light/80">
                      Treine o ChatNest com o conhecimento específico da sua empresa para
                      respostas mais precisas e personalizadas para seus clientes.
                    </p>
                    <div className="mt-4 bg-chatnest-secondary/20 rounded-md p-3">
                      <p className="text-chatnest-light/60 text-sm font-semibold">Progresso:</p>
                      <ul className="space-y-2 text-chatnest-light/80 text-sm mt-2">
                        <li className="flex items-center">
                          <div className="w-4 h-4 rounded-full bg-green-500 mr-2"></div>
                          <span>Desenvolvimento da arquitetura base</span>
                        </li>
                        <li className="flex items-center">
                          <div className="w-4 h-4 rounded-full bg-green-500 mr-2"></div>
                          <span>Implementação da API de treino</span>
                        </li>
                        <li className="flex items-center">
                          <div className="w-4 h-4 rounded-full bg-amber-500 mr-2"></div>
                          <span>Otimização de performance</span>
                        </li>
                        <li className="flex items-center">
                          <div className="w-4 h-4 rounded-full bg-chatnest-secondary/50 mr-2"></div>
                          <span>Testes finais e documentação</span>
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="bg-chatnest-secondary/10 border-chatnest-secondary/30">
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <CardTitle className="text-chatnest-light">Editor de Fluxo 2.0</CardTitle>
                      <Badge className="bg-amber-500/20 text-amber-300 hover:bg-amber-500/30">65% Concluído</Badge>
                    </div>
                    <CardDescription className="text-chatnest-light/60">
                      Previsão de lançamento: Outubro 2025
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-chatnest-light/80">
                      Nova interface de criação de fluxos de conversa com recursos avançados 
                      de modelagem visual e ferramentas de colaboração em equipe.
                    </p>
                    <div className="mt-4 bg-chatnest-secondary/20 rounded-md p-3">
                      <p className="text-chatnest-light/60 text-sm font-semibold">Progresso:</p>
                      <ul className="space-y-2 text-chatnest-light/80 text-sm mt-2">
                        <li className="flex items-center">
                          <div className="w-4 h-4 rounded-full bg-green-500 mr-2"></div>
                          <span>Redesign da interface de usuário</span>
                        </li>
                        <li className="flex items-center">
                          <div className="w-4 h-4 rounded-full bg-green-500 mr-2"></div>
                          <span>Motor de arrastar e soltar</span>
                        </li>
                        <li className="flex items-center">
                          <div className="w-4 h-4 rounded-full bg-amber-500 mr-2"></div>
                          <span>Ferramentas de colaboração</span>
                        </li>
                        <li className="flex items-center">
                          <div className="w-4 h-4 rounded-full bg-chatnest-secondary/50 mr-2"></div>
                          <span>Controle de versões e histórico</span>
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="completed" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2">
                <Card className="bg-chatnest-secondary/10 border-chatnest-secondary/30">
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <CardTitle className="text-chatnest-light">Integração com WhatsApp</CardTitle>
                      <Badge className="bg-green-500/20 text-green-300 hover:bg-green-500/30">Lançado</Badge>
                    </div>
                    <CardDescription className="text-chatnest-light/60">
                      Maio 2025
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-chatnest-light/80">
                      Conecte seu bot ChatNest diretamente ao WhatsApp Business API, permitindo 
                      interações automatizadas com seus clientes no aplicativo de mensagens mais popular do Brasil.
                    </p>
                    <div className="mt-4">
                      <p className="text-chatnest-light/60 text-sm">Recursos implementados:</p>
                      <ul className="list-disc list-inside text-chatnest-light/80 text-sm mt-1">
                        <li>Conversas automatizadas via WhatsApp</li>
                        <li>Suporte a mídias (imagens, áudios, documentos)</li>
                        <li>Templates de mensagens aprovados pelo WhatsApp</li>
                        <li>Transferência para atendimento humano</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="bg-chatnest-secondary/10 border-chatnest-secondary/30">
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <CardTitle className="text-chatnest-light">Webhook e Integrações</CardTitle>
                      <Badge className="bg-green-500/20 text-green-300 hover:bg-green-500/30">Lançado</Badge>
                    </div>
                    <CardDescription className="text-chatnest-light/60">
                      Abril 2025
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-chatnest-light/80">
                      Conecte seu bot a sistemas externos e faça integrações personalizadas 
                      com qualquer API ou serviço através de nosso sistema de webhooks.
                    </p>
                    <div className="mt-4">
                      <p className="text-chatnest-light/60 text-sm">Recursos implementados:</p>
                      <ul className="list-disc list-inside text-chatnest-light/80 text-sm mt-1">
                        <li>Webhooks de entrada e saída</li>
                        <li>Integrações prontas com Zapier e Make</li>
                        <li>Autenticação OAuth 2.0</li>
                        <li>Transformação de dados via JavaScript</li>
                      </ul>
                    </div>
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

export default RoadmapPage;
