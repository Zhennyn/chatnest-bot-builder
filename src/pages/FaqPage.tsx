
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { HelpCircle, MessageCircle, CreditCard, Settings, Shield } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useState } from "react";

const FaqPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-chatnest-dark">
      <NavBar />
      
      <main className="flex-1 pt-24 pb-16">
        <div className="container max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Perguntas Frequentes</h1>
            <p className="text-chatnest-light/70 text-lg md:text-xl max-w-3xl mx-auto">
              Encontre respostas para as dúvidas mais comuns sobre o ChatNest e como utilizar nossos serviços.
            </p>
          </div>
          
          <Tabs defaultValue="general" className="w-full">
            <div className="flex justify-center mb-8 overflow-x-auto">
              <TabsList className="bg-chatnest-secondary/20 border border-chatnest-secondary/30">
                <TabsTrigger value="general" className="data-[state=active]:bg-chatnest-secondary/30">
                  <HelpCircle size={16} className="mr-2" /> Geral
                </TabsTrigger>
                <TabsTrigger value="bots" className="data-[state=active]:bg-chatnest-secondary/30">
                  <MessageCircle size={16} className="mr-2" /> Bots
                </TabsTrigger>
                <TabsTrigger value="billing" className="data-[state=active]:bg-chatnest-secondary/30">
                  <CreditCard size={16} className="mr-2" /> Cobrança
                </TabsTrigger>
                <TabsTrigger value="account" className="data-[state=active]:bg-chatnest-secondary/30">
                  <Settings size={16} className="mr-2" /> Conta
                </TabsTrigger>
                <TabsTrigger value="security" className="data-[state=active]:bg-chatnest-secondary/30">
                  <Shield size={16} className="mr-2" /> Segurança
                </TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="general" className="space-y-6">
              <FaqSection 
                questions={[
                  { 
                    question: "O que é o ChatNest?", 
                    answer: "ChatNest é uma plataforma que permite gerenciar bots do Typebot em um só lugar, oferecendo estatísticas, análises e ferramentas para otimizar a performance dos seus chatbots." 
                  },
                  { 
                    question: "Como o ChatNest funciona com o Typebot?", 
                    answer: "O ChatNest integra-se ao Typebot através das URLs dos seus bots. Basta copiar a URL do embed do seu bot no Typebot e colá-la no ChatNest para começar a rastrear interações e coletar estatísticas." 
                  },
                  { 
                    question: "Preciso ter conhecimento técnico para usar o ChatNest?", 
                    answer: "Não, o ChatNest foi projetado para ser fácil de usar, mesmo para pessoas sem conhecimento técnico. Nossa interface é intuitiva e simples de navegar." 
                  },
                  { 
                    question: "O ChatNest está disponível em outros idiomas?", 
                    answer: "Atualmente, o ChatNest está disponível em Português e Inglês. Estamos trabalhando para adicionar mais idiomas em breve." 
                  },
                  { 
                    question: "Como posso entrar em contato com o suporte?", 
                    answer: "Você pode entrar em contato com nossa equipe de suporte através do email suporte@chatnest.com.br ou usando o chat de suporte disponível em sua conta." 
                  }
                ]} 
              />
            </TabsContent>
            
            <TabsContent value="bots" className="space-y-6">
              <FaqSection 
                questions={[
                  { 
                    question: "Como adicionar um novo bot ao ChatNest?", 
                    answer: "No seu painel, clique em 'Adicionar Bot', dê um nome ao seu bot e cole a URL do embed do Typebot. Clique em salvar e seu bot estará pronto para uso." 
                  },
                  { 
                    question: "Existe um limite de bots que posso adicionar?", 
                    answer: "No plano gratuito, você pode adicionar apenas 1 bot ativo. No plano Premium, você pode adicionar bots ilimitados." 
                  },
                  { 
                    question: "Como posso ver as estatísticas do meu bot?", 
                    answer: "No painel principal, clique no bot desejado e você será direcionado para a página de estatísticas, onde poderá ver dados sobre interações, conversões e outros insights importantes." 
                  },
                  { 
                    question: "É possível categorizar meus bots?", 
                    answer: "Sim, no plano Premium você pode criar categorias personalizadas para organizar seus bots por função, departamento ou qualquer outra classificação que desejar." 
                  },
                  { 
                    question: "Como exportar os dados de interações do meu bot?", 
                    answer: "Na página de estatísticas do bot, clique em 'Exportar Dados' e escolha o formato desejado (CSV ou JSON). Esta funcionalidade está disponível apenas no plano Premium." 
                  }
                ]} 
              />
            </TabsContent>
            
            <TabsContent value="billing" className="space-y-6">
              <FaqSection 
                questions={[
                  { 
                    question: "Quais são os planos disponíveis?", 
                    answer: "Oferecemos um plano Gratuito com recursos limitados e um plano Premium que custa R$50/mês ou R$480/ano (economia de 20%) com recursos ilimitados." 
                  },
                  { 
                    question: "Como faço para mudar meu plano?", 
                    answer: "Para fazer upgrade, acesse a página 'Planos' no seu painel e selecione o plano Premium. Para downgrade, entre em contato com o suporte." 
                  },
                  { 
                    question: "Quais formas de pagamento são aceitas?", 
                    answer: "Aceitamos cartões de crédito (Visa, Mastercard, American Express) e para planos anuais também aceitamos boleto bancário." 
                  },
                  { 
                    question: "Oferecem reembolso?", 
                    answer: "Sim, oferecemos garantia de satisfação de 14 dias. Se você não estiver satisfeito com o serviço, pode solicitar reembolso integral neste período." 
                  },
                  { 
                    question: "Como cancelar minha assinatura?", 
                    answer: "Você pode cancelar sua assinatura a qualquer momento no painel de 'Configurações da Conta' ou entrando em contato com o suporte." 
                  }
                ]} 
              />
            </TabsContent>
            
            <TabsContent value="account" className="space-y-6">
              <FaqSection 
                questions={[
                  { 
                    question: "Como alterar minha senha?", 
                    answer: "Acesse 'Configurações da Conta' no seu perfil, clique em 'Segurança' e selecione 'Alterar Senha'." 
                  },
                  { 
                    question: "Posso alterar meu email?", 
                    answer: "Sim, nas 'Configurações da Conta', você pode atualizar seu email de contato. Será necessário confirmar o novo email antes que a alteração seja concluída." 
                  },
                  { 
                    question: "Como excluir minha conta?", 
                    answer: "Para excluir sua conta, acesse 'Configurações da Conta', vá até o final da página e clique em 'Excluir Conta'. Note que esta ação é irreversível." 
                  },
                  { 
                    question: "Posso ter múltiplos usuários na mesma conta?", 
                    answer: "No momento, não oferecemos contas multi-usuário. Cada usuário precisa ter sua própria conta." 
                  },
                  { 
                    question: "Como recuperar minha senha se a esquecer?", 
                    answer: "Na página de login, clique em 'Esqueci minha senha' e siga as instruções enviadas para seu email para redefinir sua senha." 
                  }
                ]} 
              />
            </TabsContent>
            
            <TabsContent value="security" className="space-y-6">
              <FaqSection 
                questions={[
                  { 
                    question: "Como o ChatNest protege meus dados?", 
                    answer: "Utilizamos criptografia de ponta a ponta, armazenamento seguro em servidores com certificação ISO 27001 e seguimos as melhores práticas de segurança da indústria." 
                  },
                  { 
                    question: "O ChatNest está em conformidade com a LGPD/GDPR?", 
                    answer: "Sim, o ChatNest segue todas as diretrizes da Lei Geral de Proteção de Dados (LGPD) no Brasil e do Regulamento Geral de Proteção de Dados (GDPR) na Europa." 
                  },
                  { 
                    question: "Como ativar a autenticação de dois fatores?", 
                    answer: "Nas 'Configurações da Conta', acesse a seção 'Segurança' e ative a opção 'Autenticação de Dois Fatores'. Siga as instruções para configurá-la com seu aplicativo autenticador." 
                  },
                  { 
                    question: "Vocês compartilham meus dados com terceiros?", 
                    answer: "Não compartilhamos seus dados pessoais com terceiros sem seu consentimento explícito, exceto quando legalmente exigido." 
                  },
                  { 
                    question: "Por quanto tempo vocês mantêm os dados das interações?", 
                    answer: "Mantemos os dados de interações por 6 meses no plano Gratuito e por até 2 anos no plano Premium. Após esse período, os dados são automaticamente anonimizados." 
                  }
                ]} 
              />
            </TabsContent>
          </Tabs>
          
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold mb-4">Ainda tem dúvidas?</h3>
            <p className="text-chatnest-light/70 mb-6 max-w-xl mx-auto">
              Nossa equipe de suporte está pronta para ajudar você com qualquer dúvida que ainda tenha sobre o ChatNest.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="mailto:suporte@chatnest.com.br" className="inline-flex items-center justify-center px-6 py-3 rounded-md border border-chatnest-secondary/30 hover:bg-chatnest-secondary/20 transition-colors">
                <MessageCircle size={18} className="mr-2" /> Fale Conosco
              </a>
              <a href="#" className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-gradient-to-r from-chatnest-accent to-chatnest-secondary hover:opacity-90 transition-colors">
                <HelpCircle size={18} className="mr-2" /> Acessar Documentação
              </a>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

// FAQ Section component
interface FaqItem {
  question: string;
  answer: string;
}

interface FaqSectionProps {
  questions: FaqItem[];
}

const FaqSection = ({ questions }: FaqSectionProps) => {
  const [openItems, setOpenItems] = useState<Record<number, boolean>>({});
  
  const toggleItem = (index: number) => {
    setOpenItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };
  
  return (
    <div className="space-y-4">
      {questions.map((item, index) => (
        <Collapsible 
          key={index} 
          open={openItems[index]} 
          onOpenChange={() => toggleItem(index)}
          className="border border-chatnest-secondary/30 rounded-lg overflow-hidden"
        >
          <CollapsibleTrigger className="w-full px-6 py-4 flex items-center justify-between text-left bg-chatnest-secondary/10 hover:bg-chatnest-secondary/20 transition-colors">
            <h3 className="font-medium text-lg">{item.question}</h3>
            <div className={`w-6 h-6 flex items-center justify-center rounded-full border border-chatnest-secondary/50 transition-transform ${openItems[index] ? 'rotate-180' : ''}`}>
              <span>+</span>
            </div>
          </CollapsibleTrigger>
          <CollapsibleContent className="px-6 py-4 bg-chatnest-secondary/5 border-t border-chatnest-secondary/30">
            <p className="text-chatnest-light/80">{item.answer}</p>
          </CollapsibleContent>
        </Collapsible>
      ))}
    </div>
  );
};

export default FaqPage;
