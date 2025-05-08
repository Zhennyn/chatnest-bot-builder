
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Check, CreditCard, CalendarDays } from "lucide-react";
import { Link } from "react-router-dom";

const PricingPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-chatnest-dark">
      <NavBar />
      
      <main className="flex-1 pt-24 pb-16">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Planos e Preços</h1>
            <p className="text-chatnest-light/70 text-lg md:text-xl max-w-3xl mx-auto">
              Escolha o plano perfeito para suas necessidades e comece a aproveitar todos os benefícios do ChatNest.
            </p>
          </div>
          
          <Tabs defaultValue="monthly" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="bg-chatnest-secondary/20 border border-chatnest-secondary/30">
                <TabsTrigger value="monthly" className="data-[state=active]:bg-chatnest-secondary/30">
                  <CreditCard size={16} className="mr-2" /> Mensal
                </TabsTrigger>
                <TabsTrigger value="annual" className="data-[state=active]:bg-chatnest-secondary/30">
                  <CalendarDays size={16} className="mr-2" /> Anual (20% desconto)
                </TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="monthly" className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Free Plan */}
                <PricingCard
                  title="Gratuito"
                  price="R$0"
                  period="para sempre"
                  description="Perfeito para testar a plataforma e começar com seu primeiro bot."
                  features={[
                    "1 bot ativo",
                    "100 interações por mês",
                    "Estatísticas básicas",
                    "Suporte por email",
                    "Acesso ao painel de controle"
                  ]}
                  buttonText="Começar Grátis"
                  buttonLink="/signup"
                  highlighted={false}
                />
                
                {/* Premium Plan */}
                <PricingCard
                  title="Premium"
                  price="R$50"
                  period="por mês"
                  description="Ideal para empresas e profissionais que precisam de mais recursos e bots."
                  features={[
                    "Bots ilimitados",
                    "Interações ilimitadas",
                    "Analytics avançado",
                    "Exportação de dados (CSV/JSON)",
                    "Categorização de bots",
                    "Suporte prioritário",
                    "Personalização avançada",
                    "Sem marca d'água do ChatNest"
                  ]}
                  buttonText="Assinar Premium"
                  buttonLink="/signup?plan=premium"
                  highlighted={true}
                />
              </div>
            </TabsContent>
            
            <TabsContent value="annual" className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Free Plan */}
                <PricingCard
                  title="Gratuito"
                  price="R$0"
                  period="para sempre"
                  description="Perfeito para testar a plataforma e começar com seu primeiro bot."
                  features={[
                    "1 bot ativo",
                    "100 interações por mês",
                    "Estatísticas básicas",
                    "Suporte por email",
                    "Acesso ao painel de controle"
                  ]}
                  buttonText="Começar Grátis"
                  buttonLink="/signup"
                  highlighted={false}
                />
                
                {/* Premium Annual Plan */}
                <PricingCard
                  title="Premium Anual"
                  price="R$480"
                  period="por ano"
                  description="Economize 20% com o plano anual e aproveite todos os recursos premium."
                  features={[
                    "Bots ilimitados",
                    "Interações ilimitadas",
                    "Analytics avançado",
                    "Exportação de dados (CSV/JSON)",
                    "Categorização de bots",
                    "Suporte prioritário",
                    "Personalização avançada",
                    "Sem marca d'água do ChatNest",
                    "Economia de R$120 por ano"
                  ]}
                  buttonText="Assinar Premium Anual"
                  buttonLink="/signup?plan=premium-annual"
                  highlighted={true}
                />
              </div>
            </TabsContent>
          </Tabs>
          
          <div className="mt-16 bg-chatnest-secondary/10 border border-chatnest-secondary/30 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4 text-center">Perguntas Frequentes sobre Planos</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Posso mudar de plano depois?</h4>
                <p className="text-chatnest-light/70">Sim, você pode fazer upgrade ou downgrade a qualquer momento. Os ajustes de cobrança serão calculados proporcionalmente.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Como funciona o limite de bots no plano gratuito?</h4>
                <p className="text-chatnest-light/70">No plano gratuito, você pode criar apenas 1 bot ativo. Para adicionar mais bots, é necessário fazer upgrade para o plano Premium.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Existe um período de testes do plano Premium?</h4>
                <p className="text-chatnest-light/70">Oferecemos 14 dias de garantia de satisfação. Se você não estiver satisfeito, reembolsaremos o valor pago.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Quais métodos de pagamento são aceitos?</h4>
                <p className="text-chatnest-light/70">Aceitamos cartões de crédito (Visa, Mastercard, American Express) e boleto bancário para pagamentos anuais.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

// Pricing card component
interface PricingCardProps {
  title: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  buttonText: string;
  buttonLink: string;
  highlighted: boolean;
}

const PricingCard = ({ title, price, period, description, features, buttonText, buttonLink, highlighted }: PricingCardProps) => {
  return (
    <div className={`rounded-xl overflow-hidden ${
      highlighted 
        ? 'border-2 border-chatnest-accent shadow-lg shadow-chatnest-accent/10' 
        : 'border border-chatnest-secondary/30'
    }`}>
      {highlighted && (
        <div className="bg-gradient-to-r from-chatnest-accent to-chatnest-secondary py-2 px-4 text-center">
          <span className="text-sm font-medium">Mais Popular</span>
        </div>
      )}
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <div className="flex items-baseline mb-4">
          <span className="text-4xl font-extrabold">{price}</span>
          <span className="ml-1 text-chatnest-light/70">{period}</span>
        </div>
        <p className="text-chatnest-light/70 mb-6">{description}</p>
        
        <ul className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <Check size={16} className="mr-2 text-chatnest-accent" />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
        
        <Link to={buttonLink}>
          <Button 
            className={`w-full ${
              highlighted 
                ? 'bg-gradient-to-r from-chatnest-accent to-chatnest-secondary hover:opacity-90' 
                : 'bg-chatnest-secondary/30 hover:bg-chatnest-secondary/40'
            }`}
          >
            {buttonText}
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default PricingPage;
