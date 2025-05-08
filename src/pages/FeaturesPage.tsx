
import { useState } from 'react';
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Bot, BarChart3, Zap, Globe, ShieldCheck, CreditCard } from "lucide-react";

const FeaturesPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-chatnest-dark">
      <NavBar />
      
      <main className="flex-1 pt-24 pb-16">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Recursos do ChatNest</h1>
            <p className="text-chatnest-light/70 text-lg md:text-xl max-w-3xl mx-auto">
              Conheça as principais funcionalidades que tornam o ChatNest a melhor plataforma para gerenciar seus bots do Typebot.
            </p>
          </div>
          
          <Tabs defaultValue="bots" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="bg-chatnest-secondary/20 border border-chatnest-secondary/30">
                <TabsTrigger value="bots" className="data-[state=active]:bg-chatnest-secondary/30">
                  <Bot size={18} className="mr-2" /> Bots
                </TabsTrigger>
                <TabsTrigger value="analytics" className="data-[state=active]:bg-chatnest-secondary/30">
                  <BarChart3 size={18} className="mr-2" /> Analytics
                </TabsTrigger>
                <TabsTrigger value="performance" className="data-[state=active]:bg-chatnest-secondary/30">
                  <Zap size={18} className="mr-2" /> Performance
                </TabsTrigger>
                <TabsTrigger value="integrations" className="data-[state=active]:bg-chatnest-secondary/30">
                  <Globe size={18} className="mr-2" /> Integrações
                </TabsTrigger>
                <TabsTrigger value="security" className="data-[state=active]:bg-chatnest-secondary/30">
                  <ShieldCheck size={18} className="mr-2" /> Segurança
                </TabsTrigger>
                <TabsTrigger value="pricing" className="data-[state=active]:bg-chatnest-secondary/30">
                  <CreditCard size={18} className="mr-2" /> Planos
                </TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="bots" className="mt-6">
              <FeatureTab
                title="Gestão Completa de Bots"
                description="Integre seus bots do Typebot facilmente e gerencie tudo em um só lugar."
                imageUrl="/placeholder.svg"
                features={[
                  "Integração simples com URL do Typebot",
                  "Adicione, remova e edite seus bots facilmente",
                  "Visualize estatísticas de uso em tempo real",
                  "Ative ou desative bots com um clique",
                  "Categorize seus bots para melhor organização",
                  "Interface intuitiva e amigável"
                ]}
              />
            </TabsContent>
            
            <TabsContent value="analytics" className="mt-6">
              <FeatureTab
                title="Analytics Detalhados"
                description="Obtenha insights valiosos sobre o desempenho dos seus bots."
                imageUrl="/placeholder.svg"
                features={[
                  "Visualize estatísticas de conversas por período",
                  "Acompanhe taxas de engajamento e conclusão",
                  "Identifique os horários de maior interação",
                  "Exporte relatórios em formato CSV ou JSON",
                  "Métricas de performance personalizáveis",
                  "Dashboards interativos e intuitivos"
                ]}
              />
            </TabsContent>
            
            <TabsContent value="performance" className="mt-6">
              <FeatureTab
                title="Alta Performance e Estabilidade"
                description="Nosso serviço é otimizado para garantir a melhor experiência para seus usuários."
                imageUrl="/placeholder.svg"
                features={[
                  "Tempo de carregamento ultrarrápido para seus bots",
                  "99.9% de uptime garantido",
                  "Infraestrutura robusta e escalável",
                  "Monitoramento constante de performance",
                  "Sistema de cache inteligente para respostas mais rápidas",
                  "Balanceamento de carga automático"
                ]}
              />
            </TabsContent>
            
            <TabsContent value="integrations" className="mt-6">
              <FeatureTab
                title="Integrações Poderosas"
                description="Conecte seus bots com outras ferramentas para maximizar seu potencial."
                imageUrl="/placeholder.svg"
                features={[
                  "Integração perfeita com Typebot",
                  "Compatibilidade com Google Analytics",
                  "Webhook para notificações em tempo real",
                  "Exportação para CRMs populares",
                  "API completa para desenvolvedores",
                  "Suporte para integrações personalizadas"
                ]}
              />
            </TabsContent>
            
            <TabsContent value="security" className="mt-6">
              <FeatureTab
                title="Segurança de Primeira Linha"
                description="Seus dados e os dos seus clientes estão protegidos com as melhores práticas de segurança."
                imageUrl="/placeholder.svg"
                features={[
                  "Criptografia de dados em trânsito e em repouso",
                  "Autenticação de dois fatores",
                  "Backup automático de dados",
                  "Conformidade com LGPD/GDPR",
                  "Monitoramento contínuo contra ameaças",
                  "Controle granular de permissões de acesso"
                ]}
              />
            </TabsContent>
            
            <TabsContent value="pricing" className="mt-6">
              <FeatureTab
                title="Planos Flexíveis"
                description="Escolha o plano que melhor se adapta às suas necessidades e cresça conosco."
                imageUrl="/placeholder.svg"
                features={[
                  "Plano gratuito com 1 bot ativo",
                  "Plano premium com bots ilimitados",
                  "Preços transparentes sem taxas ocultas",
                  "Upgrade e downgrade a qualquer momento",
                  "Garantia de satisfação por 14 dias",
                  "Descontos para pagamento anual"
                ]}
              />
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

// Feature tab component
interface FeatureTabProps {
  title: string;
  description: string;
  imageUrl: string;
  features: string[];
}

const FeatureTab = ({ title, description, imageUrl, features }: FeatureTabProps) => {
  return (
    <div className="grid md:grid-cols-2 gap-8 items-center">
      <div>
        <h2 className="text-2xl md:text-3xl font-bold mb-4">{title}</h2>
        <p className="text-chatnest-light/70 mb-6 text-lg">{description}</p>
        
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <div className="w-5 h-5 rounded-full bg-gradient-to-br from-chatnest-accent to-chatnest-secondary flex items-center justify-center mt-1 mr-3">
                <span className="text-xs text-chatnest-light">✓</span>
              </div>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="bg-chatnest-secondary/10 border border-chatnest-secondary/30 rounded-lg overflow-hidden p-6">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-64 object-cover rounded"
        />
      </div>
    </div>
  );
};

export default FeaturesPage;
