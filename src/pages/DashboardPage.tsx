
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/components/ui/use-toast";
import { Plus, Settings, BarChart3, MessageCircle, LogOut } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";

const DashboardPage = () => {
  const { toast } = useToast();
  const [typebotUrl, setTypebotUrl] = useState("");
  const [botName, setBotName] = useState("");

  // Placeholder function - will be implemented with Supabase
  const handleAddBot = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: "Aguarde a integração com Supabase",
      description: "A funcionalidade de adicionar bots será implementada quando o Supabase estiver conectado.",
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-chatnest-dark">
      <header className="border-b border-chatnest-secondary/30 bg-chatnest-dark/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="flex h-16 items-center px-6">
          <Link to="/" className="flex items-center gap-2 mr-6">
            <div className="flex items-center justify-center w-8 h-8 rounded-md bg-gradient-to-br from-chatnest-accent to-chatnest-secondary">
              <span className="text-chatnest-light font-bold text-lg">C</span>
            </div>
            <span className="text-xl font-bold text-chatnest-light hidden sm:inline">ChatNest</span>
          </Link>
          <div className="ml-auto flex items-center gap-4">
            <div className="text-sm text-chatnest-light/70">
              Plano: <span className="text-chatnest-light font-medium">Gratuito</span>
            </div>
            <Link to="/upgrade">
              <Button variant="outline" size="sm" className="border-chatnest-accent/40 text-chatnest-light hover:bg-chatnest-secondary/20">
                Upgrade
              </Button>
            </Link>
            <Link to="/profile">
              <Button variant="ghost" size="icon" className="text-chatnest-light/70 hover:text-chatnest-light hover:bg-chatnest-secondary/20">
                <Settings size={20} />
              </Button>
            </Link>
            <Link to="/logout">
              <Button variant="ghost" size="icon" className="text-chatnest-light/70 hover:text-chatnest-light hover:bg-chatnest-secondary/20">
                <LogOut size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </header>
      
      <main className="flex-1">
        <div className="container py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Bem-vindo ao seu Dashboard</h1>
            <p className="text-chatnest-light/70">
              Gerencie seus bots do Typebot e visualize estatísticas em um só lugar.
            </p>
          </div>
          
          <Tabs defaultValue="bots" className="space-y-6">
            <TabsList className="bg-chatnest-secondary/20 border border-chatnest-secondary/30">
              <TabsTrigger value="bots" className="data-[state=active]:bg-chatnest-secondary/30">
                <MessageCircle size={16} className="mr-2" /> Meus Bots
              </TabsTrigger>
              <TabsTrigger value="analytics" className="data-[state=active]:bg-chatnest-secondary/30">
                <BarChart3 size={16} className="mr-2" /> Analytics
              </TabsTrigger>
            </TabsList>

            <TabsContent value="bots" className="space-y-6">
              {/* Add Bot Card */}
              <Card className="bg-chatnest-secondary/10 border-chatnest-secondary/30">
                <CardHeader>
                  <CardTitle>Adicione seu primeiro bot</CardTitle>
                  <CardDescription>Cole a URL do Typebot para adicionar um novo bot ao ChatNest</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleAddBot} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="bot-name">Nome do Bot</Label>
                      <Input 
                        id="bot-name" 
                        placeholder="Ex: Atendimento ao Cliente" 
                        value={botName}
                        onChange={(e) => setBotName(e.target.value)}
                        className="bg-chatnest-secondary/10 border-chatnest-secondary/30 text-chatnest-light"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="typebot-url">URL do Typebot</Label>
                      <Input 
                        id="typebot-url" 
                        placeholder="https://viewer.typebot.io/your-typebot-url" 
                        value={typebotUrl}
                        onChange={(e) => setTypebotUrl(e.target.value)}
                        className="bg-chatnest-secondary/10 border-chatnest-secondary/30 text-chatnest-light"
                      />
                    </div>
                  </form>
                </CardContent>
                <CardFooter>
                  <Button 
                    onClick={handleAddBot}
                    className="bg-gradient-to-r from-chatnest-accent to-chatnest-secondary hover:opacity-90"
                  >
                    <Plus size={16} className="mr-2" /> Adicionar Bot
                  </Button>
                </CardFooter>
              </Card>

              {/* Empty State */}
              <div className="text-center py-16 border border-dashed border-chatnest-secondary/30 rounded-lg bg-chatnest-secondary/5">
                <MessageCircle size={48} className="mx-auto mb-4 text-chatnest-secondary/40" />
                <h3 className="text-xl font-medium mb-2">Nenhum bot adicionado ainda</h3>
                <p className="text-chatnest-light/60 max-w-md mx-auto mb-6">
                  Adicione seu primeiro bot do Typebot para começar a gerenciar e coletar estatísticas.
                </p>
                <Button 
                  onClick={handleAddBot}
                  className="bg-chatnest-secondary/30 hover:bg-chatnest-secondary/40 border border-chatnest-secondary/50"
                >
                  <Plus size={16} className="mr-2" /> Adicionar Novo Bot
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="analytics" className="space-y-6">
              {/* Empty Analytics State */}
              <div className="text-center py-16 border border-dashed border-chatnest-secondary/30 rounded-lg bg-chatnest-secondary/5">
                <BarChart3 size={48} className="mx-auto mb-4 text-chatnest-secondary/40" />
                <h3 className="text-xl font-medium mb-2">Nenhum dado de analytics disponível</h3>
                <p className="text-chatnest-light/60 max-w-md mx-auto mb-6">
                  Adicione um bot e comece a coletar interações para visualizar dados analíticos aqui.
                </p>
                <Button 
                  variant="outline"
                  className="border-chatnest-secondary/50 hover:bg-chatnest-secondary/20"
                >
                  Saiba mais sobre Analytics
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

export default DashboardPage;
