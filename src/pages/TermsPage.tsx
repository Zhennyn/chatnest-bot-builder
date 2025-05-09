
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { FileText } from "lucide-react";

const TermsPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-chatnest-dark">
      <NavBar />
      
      <main className="flex-grow pt-24 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <div className="flex justify-center items-center mb-4">
              <FileText className="h-10 w-10 text-chatnest-accent mr-2" />
              <h1 className="text-3xl font-bold text-chatnest-light">Termos de Uso</h1>
            </div>
            <p className="text-chatnest-light/70">Atualizados em 1 de Maio de 2025</p>
          </div>

          <div className="prose prose-invert max-w-none prose-headings:text-chatnest-light prose-p:text-chatnest-light/80 prose-strong:text-chatnest-light prose-li:text-chatnest-light/80">
            <p>
              Estes Termos de Uso ("Termos") regem o acesso e uso dos serviços do ChatNest, incluindo nosso site, 
              plataformas, aplicativos e outros serviços oferecidos (coletivamente, os "Serviços"). 
              Ao acessar ou utilizar nossos Serviços, você concorda com estes Termos. Se você não concordar com 
              qualquer parte destes Termos, não poderá acessar ou utilizar nossos Serviços.
            </p>

            <h2>1. Aceitação dos Termos</h2>
            <p>
              Ao criar uma conta, acessar ou utilizar nossos Serviços, você concorda em cumprir e estar vinculado 
              a estes Termos e nossa Política de Privacidade. Se você estiver usando os Serviços em nome de uma 
              organização, você concorda com estes Termos em nome dessa organização.
            </p>

            <h2>2. Registros e Contas</h2>
            <p>
              Para acessar determinados recursos dos nossos Serviços, você precisará registrar-se e criar uma conta. 
              Você é responsável por manter a confidencialidade de suas credenciais de conta e por todas as atividades 
              que ocorrem sob sua conta. Você deve notificar-nos imediatamente sobre qualquer uso não autorizado de 
              sua conta.
            </p>
            <p>
              Você concorda em fornecer informações precisas, atuais e completas durante o processo de registro e 
              manter suas informações atualizadas. Reservamos o direito de suspender ou encerrar sua conta se 
              qualquer informação fornecida durante o processo de registro ou depois for imprecisa, desatualizada ou incompleta.
            </p>

            <h2>3. Uso Aceitável</h2>
            <p>
              Você concorda em utilizar os Serviços apenas para fins legais e de acordo com estes Termos. 
              Você não irá:
            </p>
            <ul>
              <li>Usar os Serviços de qualquer maneira que viole leis ou regulamentos aplicáveis</li>
              <li>Usar os Serviços para transmitir materiais que são difamatórios, ofensivos, obscenos ou prejudiciais</li>
              <li>Tentar obter acesso não autorizado a qualquer parte dos Serviços, sistemas ou redes</li>
              <li>Interferir com o funcionamento adequado dos Serviços</li>
              <li>Coletar ou roubar informações de outros usuários</li>
              <li>Utilizar técnicas de engenharia reversa, descompilar ou tentar obter o código-fonte dos Serviços</li>
              <li>Usar os Serviços para enviar spam ou qualquer forma de comunicação não solicitada</li>
            </ul>

            <h2>4. Conteúdo do Usuário</h2>
            <p>
              Nossos Serviços permitem que você crie, carregue, publique, envie, transmita e armazene conteúdo, como 
              textos, gráficos, vídeos ou outros materiais ("Conteúdo do Usuário"). Você mantém todos os direitos de 
              propriedade intelectual sobre o Conteúdo do Usuário que você carrega.
            </p>
            <p>
              Ao enviar Conteúdo do Usuário para os Serviços, você nos concede uma licença mundial, não exclusiva, 
              transferível, isenta de royalties e sublicenciável para usar, reproduzir, modificar, adaptar, publicar, 
              traduzir, criar trabalhos derivados, distribuir e exibir tal Conteúdo do Usuário em conexão com a 
              operação e fornecimento dos Serviços.
            </p>

            <h2>5. Pagamentos e Assinaturas</h2>
            <p>
              Alguns de nossos Serviços exigem pagamento. Você concorda em pagar todas as taxas aplicáveis conforme 
              descrito nos Serviços. Todas as taxas são em reais brasileiros e não são reembolsáveis, exceto quando 
              exigido por lei ou conforme expressamente estabelecido nestes Termos.
            </p>
            <p>
              As assinaturas serão renovadas automaticamente no final de cada período de assinatura, a menos que 
              você cancele antes da data de renovação. Você pode cancelar uma assinatura a qualquer momento através 
              das configurações da sua conta.
            </p>

            <h2>6. Propriedade Intelectual</h2>
            <p>
              Os Serviços e seu conteúdo original, recursos e funcionalidades são e permanecerão propriedade exclusiva 
              do ChatNest e de seus licenciadores. Os Serviços são protegidos por direitos autorais, marcas registradas 
              e outras leis de propriedade intelectual do Brasil e de outros países.
            </p>
            <p>
              Nossas marcas registradas e identidade visual não podem ser usadas em conexão com qualquer produto ou serviço 
              sem o consentimento prévio por escrito do ChatNest.
            </p>

            <h2>7. Links para Sites de Terceiros</h2>
            <p>
              Nossos Serviços podem conter links para sites ou serviços de terceiros que não são de propriedade ou 
              controlados pelo ChatNest. O ChatNest não tem controle sobre, e não assume nenhuma responsabilidade pelo 
              conteúdo, políticas de privacidade ou práticas de quaisquer sites ou serviços de terceiros.
            </p>

            <h2>8. Suspensão e Rescisão</h2>
            <p>
              Podemos suspender ou encerrar seu acesso a todos ou parte dos Serviços, com ou sem aviso prévio, por 
              qualquer motivo, incluindo, sem limitação, violação destes Termos. Após a rescisão, seu direito de usar 
              os Serviços cessará imediatamente.
            </p>

            <h2>9. Isenção de Garantias</h2>
            <p>
              Os Serviços são fornecidos "como estão" e "conforme disponíveis", sem garantias de qualquer tipo, 
              expressas ou implícitas. O ChatNest não garante que os Serviços atendam às suas necessidades específicas, 
              que os Serviços serão ininterruptos, seguros ou livres de erros.
            </p>

            <h2>10. Limitação de Responsabilidade</h2>
            <p>
              Em nenhum caso o ChatNest, seus diretores, funcionários, parceiros, agentes, fornecedores ou afiliados 
              serão responsáveis por quaisquer danos indiretos, incidentais, especiais, consequenciais ou punitivos, 
              incluindo, sem limitação, perda de lucros, dados, uso, boa vontade ou outras perdas intangíveis, 
              resultantes de seu acesso ou uso ou incapacidade de acessar ou usar os Serviços.
            </p>

            <h2>11. Alterações nos Termos</h2>
            <p>
              Reservamos o direito de modificar ou substituir estes Termos a qualquer momento. Se uma revisão for 
              material, tentaremos fornecer um aviso com pelo menos 30 dias de antecedência antes que quaisquer novos 
              termos entrem em vigor.
            </p>

            <h2>12. Lei Aplicável</h2>
            <p>
              Estes Termos serão regidos e interpretados de acordo com as leis do Brasil, sem dar efeito a quaisquer 
              princípios de conflitos de leis.
            </p>

            <h2>13. Contato</h2>
            <p>
              Se você tiver alguma dúvida sobre estes Termos, entre em contato conosco em <a href="mailto:termos@chatnest.com.br" className="text-chatnest-accent hover:underline">termos@chatnest.com.br</a>
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TermsPage;
