
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { 
  Search, 
  ArrowRight, 
  Settings, 
  BarChart3, 
  MessageCircle, 
  Users, 
  CheckCircle
} from 'lucide-react';

const Index = () => {
  const [email, setEmail] = useState('');

  return (
    <div className="min-h-screen flex flex-col bg-chatnest-dark">
      <NavBar />
      
      {/* Hero section */}
      <section className="pt-32 pb-20 px-6 sm:px-8 hero-gradient">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center mb-10 relative">
            <Badge variant="outline" className="bg-chatnest-secondary/20 text-chatnest-light mb-4 px-4 py-1 border-chatnest-secondary/50">
              Lançamento Beta v1.0
            </Badge>
            
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-chatnest-light via-white to-chatnest-light/80">
              Crie e gerencie chatbots <br className="hidden md:block" /> com o Typebot em minutos
            </h1>
            
            <p className="text-lg md:text-xl text-chatnest-light/80 max-w-3xl mb-8">
              ChatNest é a plataforma perfeita para gerenciar seus bots do Typebot. 
              Crie conversas interativas, acompanhe estatísticas e escale seu atendimento.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link to="/signup">
                <Button className="bg-gradient-to-r from-chatnest-accent to-chatnest-secondary hover:opacity-90 text-chatnest-light px-8 py-6 text-lg">
                  Começar grátis
                  <ArrowRight size={18} className="ml-2" />
                </Button>
              </Link>
              <Link to="/features">
                <Button variant="outline" className="text-chatnest-light border-chatnest-secondary/50 hover:bg-chatnest-secondary/20 px-8 py-6 text-lg">
                  Conheça os recursos
                </Button>
              </Link>
            </div>
            
            <p className="text-sm text-chatnest-light/60">
              Sem cartão de crédito necessário • Plano gratuito disponível
            </p>
          </div>

          {/* Preview image */}
          <div className="relative max-w-5xl mx-auto rounded-lg overflow-hidden shadow-2xl border border-chatnest-secondary/30">
            <div className="absolute inset-0 bg-gradient-to-t from-chatnest-dark to-transparent z-10"></div>
            <div className="bg-chatnest-secondary/20 p-8 rounded-t-lg border-b border-chatnest-secondary/30 flex justify-between items-center">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
              <div className="bg-chatnest-secondary/30 rounded-md px-4 py-1 text-center text-sm text-chatnest-light/80 w-80">
                dashboard.chatnest.com
              </div>
              <div className="w-20"></div>
            </div>
            <div className="bg-[#121A28] min-h-[400px] flex items-center justify-center">
              <div className="p-8 text-center">
                <MessageCircle size={60} className="mx-auto mb-4 text-chatnest-accent opacity-40" />
                <h3 className="text-xl font-medium text-chatnest-light/70">
                  Dashboard de gerenciamento de bots
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 sm:px-8 bg-chatnest-dark">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Tudo que você precisa para <span className="text-chatnest-accent">gerenciar seus bots</span>
            </h2>
            <p className="text-lg text-chatnest-light/80 max-w-3xl mx-auto">
              Plataforma simples e poderosa para integrar, monitorar e otimizar seus chatbots do Typebot.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<MessageCircle size={24} />}
              title="Gerenciamento de Bots"
              description="Adicione facilmente URLs do Typebot e gerencie todos os seus bots em um só lugar."
            />
            <FeatureCard 
              icon={<BarChart3 size={24} />}
              title="Análises Detalhadas"
              description="Acompanhe visualizações, interações e desempenho de cada bot."
            />
            <FeatureCard 
              icon={<Settings size={24} />}
              title="Configurações Flexíveis"
              description="Personalize categorias, ative ou desative bots conforme necessário."
            />
            <FeatureCard 
              icon={<Search size={24} />}
              title="Pesquisa de Interações"
              description="Encontre e analise conversas anteriores com facilidade."
            />
            <FeatureCard 
              icon={<Users size={24} />}
              title="Colaboração em Equipe"
              description="Disponível em breve: compartilhe e colabore com sua equipe."
            />
            <FeatureCard 
              icon={<CheckCircle size={24} />}
              title="Integração Simples"
              description="Integre seus bots em qualquer site com nosso código de embed."
            />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-6 sm:px-8 bg-chatnest-dark bg-mesh-pattern">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Planos simples e transparentes
            </h2>
            <p className="text-lg text-chatnest-light/80 max-w-3xl mx-auto">
              Escolha o plano ideal para suas necessidades, com preços acessíveis e sem surpresas.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Free Plan */}
            <Card className="bg-gradient-to-b from-chatnest-dark to-chatnest-secondary/10 border-chatnest-secondary/30 overflow-hidden relative card-hover">
              <div className="p-6 md:p-8">
                <h3 className="text-xl font-bold mb-2 text-chatnest-light">Gratuito</h3>
                <p className="text-chatnest-light/70 mb-6">
                  Perfeito para experimentar a plataforma
                </p>
                <div className="flex items-end mb-6">
                  <span className="text-4xl font-bold text-chatnest-light">R$0</span>
                  <span className="text-chatnest-light/70 ml-2 mb-1">/para sempre</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <PricingFeature included={true} text="1 bot ativo" />
                  <PricingFeature included={true} text="Estatísticas básicas" />
                  <PricingFeature included={true} text="Integração com Typebot" />
                  <PricingFeature included={false} text="Bots ilimitados" />
                  <PricingFeature included={false} text="Exportação de dados" />
                  <PricingFeature included={false} text="Analytics avançado" />
                </ul>
                <Link to="/signup" className="block">
                  <Button className="w-full bg-chatnest-secondary/30 hover:bg-chatnest-secondary/40 text-chatnest-light border border-chatnest-secondary/50">
                    Criar conta grátis
                  </Button>
                </Link>
              </div>
            </Card>
            
            {/* Premium Plan */}
            <Card className="bg-gradient-to-b from-chatnest-secondary/20 to-chatnest-secondary/5 border-chatnest-accent/30 overflow-hidden relative card-hover">
              <div className="absolute top-0 right-0">
                <Badge className="rounded-bl-lg rounded-tr-lg bg-chatnest-accent text-chatnest-light border-0 px-3 py-1">
                  Recomendado
                </Badge>
              </div>
              <div className="p-6 md:p-8">
                <h3 className="text-xl font-bold mb-2 text-chatnest-light">Premium</h3>
                <p className="text-chatnest-light/70 mb-6">
                  Para usuários avançados e empresas
                </p>
                <div className="flex items-end mb-6">
                  <span className="text-4xl font-bold text-chatnest-light">R$50</span>
                  <span className="text-chatnest-light/70 ml-2 mb-1">/mês</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <PricingFeature included={true} text="Bots ilimitados" />
                  <PricingFeature included={true} text="Estatísticas avançadas" />
                  <PricingFeature included={true} text="Integração com Typebot" />
                  <PricingFeature included={true} text="Exportação de dados (CSV/JSON)" />
                  <PricingFeature included={true} text="Dashboard personalizado" />
                  <PricingFeature included={true} text="Suporte prioritário" />
                </ul>
                <Link to="/signup?plan=premium" className="block">
                  <Button className="w-full bg-gradient-to-r from-chatnest-accent to-chatnest-secondary hover:opacity-90 text-chatnest-light border-0">
                    Começar no Premium
                  </Button>
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 sm:px-8 bg-gradient-to-b from-chatnest-dark to-chatnest-secondary/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Comece a usar o ChatNest hoje mesmo
          </h2>
          <p className="text-lg text-chatnest-light/80 max-w-2xl mx-auto mb-8">
            Junte-se a centenas de empresas que já estão elevando suas conversas com bots inteligentes.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/signup">
              <Button className="bg-gradient-to-r from-chatnest-accent to-chatnest-secondary hover:opacity-90 text-chatnest-light px-8 py-6 text-lg">
                Criar conta grátis
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="text-chatnest-light border-chatnest-secondary/50 hover:bg-chatnest-secondary/20 px-8 py-6 text-lg">
                Fale com nossa equipe
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 px-6 sm:px-8 border-t border-chatnest-secondary/30">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-xl font-semibold mb-4">
            Fique por dentro das novidades
          </h3>
          <p className="text-chatnest-light/70 mb-6">
            Receba dicas, atualizações e novos recursos diretamente no seu email.
          </p>
          <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Seu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-4 py-2 bg-chatnest-secondary/20 border border-chatnest-secondary/30 rounded-md text-chatnest-light placeholder:text-chatnest-light/50 flex-1"
              required
            />
            <Button type="submit" className="bg-chatnest-secondary hover:bg-chatnest-secondary/80 text-chatnest-light">
              Inscrever-se
            </Button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

// Helper components
const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => {
  return (
    <Card className="bg-chatnest-secondary/10 border-chatnest-secondary/30 hover:border-chatnest-accent/50 transition-all cursor-pointer card-hover">
      <CardContent className="p-6">
        <div className="bg-chatnest-secondary/20 w-10 h-10 rounded-md flex items-center justify-center mb-4 text-chatnest-accent">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-chatnest-light/70">{description}</p>
      </CardContent>
    </Card>
  );
};

const PricingFeature = ({ included, text }: { included: boolean, text: string }) => {
  return (
    <li className="flex items-center">
      {included ? (
        <CheckCircle size={18} className="text-chatnest-accent mr-2 flex-shrink-0" />
      ) : (
        <CheckCircle size={18} className="text-chatnest-secondary/50 mr-2 flex-shrink-0" />
      )}
      <span className={included ? "text-chatnest-light" : "text-chatnest-light/50"}>
        {text}
      </span>
    </li>
  );
};

export default Index;
