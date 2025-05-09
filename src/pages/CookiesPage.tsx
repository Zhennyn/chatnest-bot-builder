
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Cookie } from "lucide-react";

const CookiesPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-chatnest-dark">
      <NavBar />
      
      <main className="flex-grow pt-24 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <div className="flex justify-center items-center mb-4">
              <Cookie className="h-10 w-10 text-chatnest-accent mr-2" />
              <h1 className="text-3xl font-bold text-chatnest-light">Política de Cookies</h1>
            </div>
            <p className="text-chatnest-light/70">Atualizada em 1 de Maio de 2025</p>
          </div>

          <div className="prose prose-invert max-w-none prose-headings:text-chatnest-light prose-p:text-chatnest-light/80 prose-strong:text-chatnest-light prose-li:text-chatnest-light/80">
            <p>
              Esta Política de Cookies explica como o ChatNest utiliza cookies e tecnologias similares para reconhecer 
              você quando visita nosso site e utiliza nossos serviços. Ela explica o que são essas tecnologias e por 
              que as usamos, assim como seus direitos de controlar nosso uso delas.
            </p>

            <h2>1. O que são cookies?</h2>
            <p>
              Cookies são pequenos arquivos de dados armazenados no seu dispositivo (computador ou dispositivo móvel) 
              quando você visita um site. Os cookies são amplamente utilizados pelos provedores de sites para fazer 
              seus sites funcionarem, ou funcionarem de forma mais eficiente, bem como fornecer informações de relatórios.
            </p>
            <p>
              Cookies definidos pelo proprietário do site (neste caso, ChatNest) são chamados de "cookies primários". 
              Cookies definidos por partes que não o proprietário do site são chamados de "cookies de terceiros". 
              Cookies de terceiros permitem que recursos ou funcionalidades de terceiros sejam fornecidos no ou através 
              do site (por exemplo, análises, publicidade e vídeos interativos).
            </p>

            <h2>2. Por que usamos cookies?</h2>
            <p>
              Utilizamos cookies primários e de terceiros pelos seguintes motivos:
            </p>

            <h3>Cookies Necessários</h3>
            <p>
              Esses cookies são essenciais para fornecer nossos serviços e não podem ser desativados em nossos sistemas. 
              Geralmente são definidos apenas em resposta a ações feitas por você que equivalem a uma solicitação de 
              serviços, como definir suas preferências de privacidade, fazer login ou preencher formulários.
            </p>
            <p>
              Você pode configurar seu navegador para bloqueá-los ou alertá-lo sobre esses cookies, mas algumas partes 
              do site não funcionarão corretamente.
            </p>

            <h3>Cookies de Desempenho</h3>
            <p>
              Esses cookies nos permitem contar visitas e fontes de tráfego para que possamos medir e melhorar o 
              desempenho do nosso site. Eles nos ajudam a saber quais páginas são as mais e menos populares e ver 
              como os visitantes navegam pelo site.
            </p>
            <p>
              Todas as informações coletadas por esses cookies são agregadas e, portanto, anônimas. Se você não 
              permitir esses cookies, não saberemos quando visitou nosso site.
            </p>

            <h3>Cookies de Funcionalidade</h3>
            <p>
              Esses cookies permitem que o site forneça funcionalidades e personalização aprimoradas. Eles podem ser 
              definidos por nós ou por provedores terceiros cujos serviços adicionamos às nossas páginas.
            </p>
            <p>
              Se você não permitir esses cookies, alguns ou todos esses serviços podem não funcionar corretamente.
            </p>

            <h3>Cookies de Marketing</h3>
            <p>
              Esses cookies podem ser definidos através do nosso site por nossos parceiros de publicidade. Eles podem 
              ser usados por essas empresas para criar um perfil de seus interesses e mostrar anúncios relevantes em 
              outros sites.
            </p>
            <p>
              Eles não armazenam diretamente informações pessoais, mas são baseados na identificação exclusiva do seu 
              navegador e dispositivo de internet. Se você não permitir esses cookies, terá menos publicidade direcionada.
            </p>

            <h2>3. Cookies que utilizamos</h2>
            <table className="border-collapse border border-chatnest-secondary/30 w-full">
              <thead>
                <tr className="bg-chatnest-secondary/20">
                  <th className="border border-chatnest-secondary/30 p-2 text-left">Nome</th>
                  <th className="border border-chatnest-secondary/30 p-2 text-left">Finalidade</th>
                  <th className="border border-chatnest-secondary/30 p-2 text-left">Duração</th>
                  <th className="border border-chatnest-secondary/30 p-2 text-left">Tipo</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-chatnest-secondary/30 p-2">_chatnest_session</td>
                  <td className="border border-chatnest-secondary/30 p-2">Mantém o estado da sua sessão</td>
                  <td className="border border-chatnest-secondary/30 p-2">Sessão</td>
                  <td className="border border-chatnest-secondary/30 p-2">Necessário</td>
                </tr>
                <tr>
                  <td className="border border-chatnest-secondary/30 p-2">_chatnest_token</td>
                  <td className="border border-chatnest-secondary/30 p-2">Usado para autenticação</td>
                  <td className="border border-chatnest-secondary/30 p-2">30 dias</td>
                  <td className="border border-chatnest-secondary/30 p-2">Necessário</td>
                </tr>
                <tr>
                  <td className="border border-chatnest-secondary/30 p-2">_ga</td>
                  <td className="border border-chatnest-secondary/30 p-2">Google Analytics - Distingue usuários</td>
                  <td className="border border-chatnest-secondary/30 p-2">2 anos</td>
                  <td className="border border-chatnest-secondary/30 p-2">Desempenho</td>
                </tr>
                <tr>
                  <td className="border border-chatnest-secondary/30 p-2">_gid</td>
                  <td className="border border-chatnest-secondary/30 p-2">Google Analytics - Distingue usuários</td>
                  <td className="border border-chatnest-secondary/30 p-2">24 horas</td>
                  <td className="border border-chatnest-secondary/30 p-2">Desempenho</td>
                </tr>
                <tr>
                  <td className="border border-chatnest-secondary/30 p-2">_fbp</td>
                  <td className="border border-chatnest-secondary/30 p-2">Facebook Pixel - Rastreia conversões</td>
                  <td className="border border-chatnest-secondary/30 p-2">3 meses</td>
                  <td className="border border-chatnest-secondary/30 p-2">Marketing</td>
                </tr>
                <tr>
                  <td className="border border-chatnest-secondary/30 p-2">_chatnest_preferences</td>
                  <td className="border border-chatnest-secondary/30 p-2">Armazena suas preferências de usuário</td>
                  <td className="border border-chatnest-secondary/30 p-2">1 ano</td>
                  <td className="border border-chatnest-secondary/30 p-2">Funcionalidade</td>
                </tr>
              </tbody>
            </table>

            <h2>4. Como controlar os cookies</h2>
            <p>
              Você pode definir ou alterar os controles do seu navegador da web para aceitar ou recusar cookies. 
              Se você optar por recusar cookies, ainda poderá usar nosso site, mas seu acesso a algumas funcionalidades 
              e áreas de nosso site pode ser restrito.
            </p>
            <p>
              Como os meios pelos quais você pode recusar cookies através das configurações do seu navegador da web 
              variam de navegador para navegador, você deve visitar o menu de ajuda do seu navegador para obter mais informações.
            </p>
            <p>
              Além disso, a maioria das redes de publicidade oferece formas de recusar publicidade direcionada. 
              Para obter mais informações, visite <a href="http://www.aboutads.info/choices/" className="text-chatnest-accent hover:underline">http://www.aboutads.info/choices/</a> ou 
              <a href="http://www.youronlinechoices.com" className="text-chatnest-accent hover:underline"> http://www.youronlinechoices.com</a>.
            </p>

            <h2>5. Cookies e Dados Pessoais</h2>
            <p>
              Quando os cookies coletam dados pessoais, trataremos essas informações de acordo com nossa 
              <a href="/privacy" className="text-chatnest-accent hover:underline"> Política de Privacidade</a>.
            </p>

            <h2>6. Alterações nesta Política de Cookies</h2>
            <p>
              Podemos atualizar esta Política de Cookies de tempos em tempos para refletir, por exemplo, mudanças nos 
              cookies que usamos ou por outros motivos operacionais, legais ou regulatórios. Por favor, visite esta 
              Política de Cookies regularmente para se manter informado sobre nosso uso de cookies e tecnologias relacionadas.
            </p>
            <p>
              A data no topo desta Política de Cookies indica quando ela foi atualizada pela última vez.
            </p>

            <h2>7. Contato</h2>
            <p>
              Se você tiver alguma dúvida sobre nosso uso de cookies ou outras tecnologias, envie um e-mail para 
              <a href="mailto:privacidade@chatnest.com.br" className="text-chatnest-accent hover:underline"> privacidade@chatnest.com.br</a>.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CookiesPage;
