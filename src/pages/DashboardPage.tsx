
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";
import { Plus, Settings, BarChart3, MessageCircle, LogOut, Trash2, Edit, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import { useAuth } from "@/context/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { Spinner } from "@/components/ui/spinner";

type Bot = {
  id: string;
  name: string;
  typebot_url: string;
  description: string | null;
  is_active: boolean;
  created_at: string;
};

type AnalyticsData = {
  id: string;
  date: string;
  total_interactions: number;
  completed_interactions: number;
  average_duration_seconds: number;
  unique_visitors: number;
  bot_id: string;
};

const DashboardPage = () => {
  const { user, signOut } = useAuth();
  const [typebotUrl, setTypebotUrl] = useState("");
  const [botName, setBotName] = useState("");
  const [botDescription, setBotDescription] = useState("");
  const [bots, setBots] = useState<Bot[]>([]);
  const [analytics, setAnalytics] = useState<AnalyticsData[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const fetchBots = async () => {
      if (!user) return;
      
      try {
        const { data, error } = await supabase
          .from("bots")
          .select("*")
          .order("created_at", { ascending: false });

        if (error) throw error;
        setBots(data || []);

        // If there are bots, fetch analytics
        if (data && data.length > 0) {
          const botIds = data.map(bot => bot.id);
          
          const { data: analyticsData, error: analyticsError } = await supabase
            .from("analytics_daily")
            .select("*")
            .in("bot_id", botIds)
            .order("date", { ascending: false })
            .limit(30);
            
          if (analyticsError) throw analyticsError;
          setAnalytics(analyticsData || []);
        }
      } catch (error: any) {
        console.error("Error fetching bots:", error);
        toast.error("Erro ao carregar bots");
      } finally {
        setLoading(false);
      }
    };

    fetchBots();
  }, [user]);

  const handleAddBot = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!botName || !typebotUrl) {
      toast.error("Por favor preencha todos os campos obrigatórios");
      return;
    }
    
    if (!typebotUrl.includes("typebot.io")) {
      toast.error("Por favor insira uma URL válida do Typebot");
      return;
    }
    
    if (!user) {
      toast.error("Usuário não autenticado");
      return;
    }
    
    setSubmitting(true);
    
    try {
      const { data, error } = await supabase
        .from("bots")
        .insert({
          name: botName,
          typebot_url: typebotUrl,
          description: botDescription || null,
          user_id: user.id
        })
        .select();

      if (error) throw error;
      
      toast.success("Bot adicionado com sucesso!");
      setBots([data[0], ...bots]);
      
      // Reset form
      setBotName("");
      setTypebotUrl("");
      setBotDescription("");
      
    } catch (error: any) {
      console.error("Error adding bot:", error);
      toast.error(error.message || "Erro ao adicionar bot");
    } finally {
      setSubmitting(false);
    }
  };

  const handleDeleteBot = async (botId: string) => {
    if (!confirm("Tem certeza que deseja excluir este bot?")) {
      return;
    }

    try {
      const { error } = await supabase
        .from("bots")
        .delete()
        .eq("id", botId);

      if (error) throw error;
      
      setBots(bots.filter(bot => bot.id !== botId));
      toast.success("Bot excluído com sucesso");
    } catch (error: any) {
      console.error("Error deleting bot:", error);
      toast.error("Erro ao excluir bot");
    }
  };

  const handleLogout = async () => {
    try {
      await signOut();
      toast.success("Logout realizado com sucesso!");
    } catch (error) {
      console.error("Error logging out:", error);
      toast.error("Erro ao fazer logout");
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('pt-BR').format(date);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-chatnest-dark">
        <Spinner className="w-8 h-8 text-chatnest-accent" />
      </div>
    );
  }

  const getBotAnalytics = (botId: string) => {
    return analytics.filter(item => item.bot_id === botId);
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
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-chatnest-light/70 hover:text-chatnest-light hover:bg-chatnest-secondary/20"
              onClick={handleLogout}
            >
              <LogOut size={20} />
            </Button>
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
                  <CardTitle>Adicione um novo bot</CardTitle>
                  <CardDescription>Cole a URL do Typebot para adicionar um novo bot ao ChatNest</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleAddBot} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="bot-name">Nome do Bot *</Label>
                      <Input 
                        id="bot-name" 
                        placeholder="Ex: Atendimento ao Cliente" 
                        value={botName}
                        onChange={(e) => setBotName(e.target.value)}
                        className="bg-chatnest-secondary/10 border-chatnest-secondary/30 text-chatnest-light"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="typebot-url">URL do Typebot *</Label>
                      <Input 
                        id="typebot-url" 
                        placeholder="https://viewer.typebot.io/your-typebot-url" 
                        value={typebotUrl}
                        onChange={(e) => setTypebotUrl(e.target.value)}
                        className="bg-chatnest-secondary/10 border-chatnest-secondary/30 text-chatnest-light"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="bot-description">Descrição (opcional)</Label>
                      <Input 
                        id="bot-description" 
                        placeholder="Uma breve descrição do seu bot" 
                        value={botDescription}
                        onChange={(e) => setBotDescription(e.target.value)}
                        className="bg-chatnest-secondary/10 border-chatnest-secondary/30 text-chatnest-light"
                      />
                    </div>
                  </form>
                </CardContent>
                <CardFooter>
                  <Button 
                    onClick={handleAddBot}
                    className="bg-gradient-to-r from-chatnest-accent to-chatnest-secondary hover:opacity-90"
                    disabled={submitting}
                  >
                    {submitting ? (
                      <>
                        <Spinner className="mr-2 h-4 w-4" />
                        Adicionando...
                      </>
                    ) : (
                      <>
                        <Plus size={16} className="mr-2" /> Adicionar Bot
                      </>
                    )}
                  </Button>
                </CardFooter>
              </Card>

              {/* Bots List */}
              {bots.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {bots.map((bot) => (
                    <Card key={bot.id} className="bg-chatnest-secondary/5 border-chatnest-secondary/20 overflow-hidden">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div>
                            <CardTitle className="text-chatnest-light">{bot.name}</CardTitle>
                            <CardDescription className="mt-1">
                              {bot.description || "Sem descrição"}
                            </CardDescription>
                          </div>
                          <div className="flex space-x-2">
                            <Button 
                              variant="ghost" 
                              size="icon" 
                              className="text-chatnest-light/70 hover:text-chatnest-light hover:bg-chatnest-secondary/20"
                              onClick={() => window.open(bot.typebot_url, "_blank")}
                            >
                              <ExternalLink size={16} />
                            </Button>
                            <Button 
                              variant="ghost" 
                              size="icon" 
                              className="text-chatnest-light/70 hover:text-chatnest-light hover:bg-chatnest-secondary/20"
                            >
                              <Edit size={16} />
                            </Button>
                            <Button 
                              variant="ghost" 
                              size="icon" 
                              className="text-chatnest-light/70 hover:text-red-500 hover:bg-red-500/10"
                              onClick={() => handleDeleteBot(bot.id)}
                            >
                              <Trash2 size={16} />
                            </Button>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="text-xs text-chatnest-light/60">
                          <span>Criado em: {formatDate(bot.created_at)}</span>
                        </div>
                      </CardContent>
                      <div className="bg-gradient-to-r from-chatnest-accent/20 to-chatnest-secondary/20 h-1 w-full mt-auto"></div>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="text-center py-16 border border-dashed border-chatnest-secondary/30 rounded-lg bg-chatnest-secondary/5">
                  <MessageCircle size={48} className="mx-auto mb-4 text-chatnest-secondary/40" />
                  <h3 className="text-xl font-medium mb-2">Nenhum bot adicionado ainda</h3>
                  <p className="text-chatnest-light/60 max-w-md mx-auto mb-6">
                    Adicione seu primeiro bot do Typebot para começar a gerenciar e coletar estatísticas.
                  </p>
                </div>
              )}
            </TabsContent>

            <TabsContent value="analytics" className="space-y-6">
              {bots.length > 0 && analytics.length > 0 ? (
                <div className="space-y-8">
                  {bots.map((bot) => {
                    const botAnalytics = getBotAnalytics(bot.id);
                    
                    // Skip if no analytics for this bot
                    if (botAnalytics.length === 0) return null;
                    
                    const latestAnalytics = botAnalytics[0];
                    
                    return (
                      <Card key={`analytics-${bot.id}`} className="bg-chatnest-secondary/5 border-chatnest-secondary/20">
                        <CardHeader>
                          <CardTitle className="text-chatnest-light">{bot.name} - Analytics</CardTitle>
                          <CardDescription>
                            Estatísticas do bot nos últimos 30 dias
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <div className="bg-chatnest-secondary/10 p-4 rounded-lg">
                              <div className="text-sm text-chatnest-light/70">Total de interações</div>
                              <div className="text-2xl font-bold text-chatnest-light mt-2">
                                {botAnalytics.reduce((sum, item) => sum + item.total_interactions, 0)}
                              </div>
                            </div>
                            <div className="bg-chatnest-secondary/10 p-4 rounded-lg">
                              <div className="text-sm text-chatnest-light/70">Interações completas</div>
                              <div className="text-2xl font-bold text-chatnest-light mt-2">
                                {botAnalytics.reduce((sum, item) => sum + item.completed_interactions, 0)}
                              </div>
                            </div>
                            <div className="bg-chatnest-secondary/10 p-4 rounded-lg">
                              <div className="text-sm text-chatnest-light/70">Visitantes únicos</div>
                              <div className="text-2xl font-bold text-chatnest-light mt-2">
                                {botAnalytics.reduce((sum, item) => sum + item.unique_visitors, 0)}
                              </div>
                            </div>
                            <div className="bg-chatnest-secondary/10 p-4 rounded-lg">
                              <div className="text-sm text-chatnest-light/70">Tempo médio (seg)</div>
                              <div className="text-2xl font-bold text-chatnest-light mt-2">
                                {Math.round(botAnalytics.reduce((sum, item) => sum + item.average_duration_seconds, 0) / botAnalytics.length)}
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              ) : (
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
              )}
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default DashboardPage;
