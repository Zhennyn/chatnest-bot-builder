
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Shield } from "lucide-react";

const PrivacyPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-chatnest-dark">
      <NavBar />
      
      <main className="flex-grow pt-24 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <div className="flex justify-center items-center mb-4">
              <Shield className="h-10 w-10 text-chatnest-accent mr-2" />
              <h1 className="text-3xl font-bold text-chatnest-light">Política de Privacidade</h1>
            </div>
            <p className="text-chatnest-light/70">Atualizada em 1 de Maio de 2025</p>
          </div>

          <div className="prose prose-invert max-w-none prose-headings:text-chatnest-light prose-p:text-chatnest-light/80 prose-strong:text-chatnest-light prose-li:text-chatnest-light/80">
            <p>
              A sua privacidade é importante para nós. É política do ChatNest respeitar a sua privacidade 
              em relação a qualquer informação sua que possamos coletar em nosso site e outros sites que possuímos e operamos.
            </p>

            <h2>1. Informações que coletamos</h2>
            <p>
              Coletamos informações quando você se registra em nosso site, faz login em sua conta, 
              cria bots, interage com nossos serviços ou preenche um formulário. As informações coletadas incluem:
            </p>
            <ul>
              <li>Informações de identificação pessoal (nome, endereço de e-mail, número de telefone, etc.)</li>
              <li>Informações sobre sua empresa (nome, setor, tamanho, etc.)</li>
              <li>Dados de uso e interação com os nossos serviços</li>
              <li>Informações técnicas como endereço IP, tipo de navegador e dispositivo</li>
            </ul>

            <h2>2. Como usamos suas informações</h2>
            <p>
              Utilizamos as informações que coletamos das seguintes maneiras:
            </p>
            <ul>
              <li>Para personalizar sua experiência e oferecer o tipo de conteúdo e produtos nos quais você está mais interessado</li>
              <li>Para melhorar nosso site e serviços</li>
              <li>Para melhorar o atendimento ao cliente</li>
              <li>Para processar transações</li>
              <li>Para enviar e-mails periódicos</li>
              <li>Para acompanhar a utilização dos nossos serviços e identificar áreas de melhoria</li>
            </ul>

            <h2>3. Proteção de informações</h2>
            <p>
              Implementamos uma variedade de medidas de segurança para manter a segurança de suas informações pessoais. 
              Utilizamos criptografia de ponta para proteger informações sensíveis transmitidas online e também protegemos 
              suas informações offline. Apenas funcionários que precisam realizar um trabalho específico têm acesso a 
              informações de identificação pessoal.
            </p>

            <h2>4. Uso de cookies</h2>
            <p>
              Nosso site utiliza cookies para melhorar sua experiência. Um cookie é um pequeno arquivo de texto que um site 
              salva no seu computador ou dispositivo móvel quando você o visita. Os cookies nos permitem reconhecer seu navegador 
              e fornecer recursos personalizados, além de nos ajudar a entender quais seções do nosso site são mais populares.
            </p>
            <p>
              Para mais informações sobre como utilizamos cookies, consulte nossa <a href="/cookies" className="text-chatnest-accent hover:underline">Política de Cookies</a>.
            </p>

            <h2>5. Compartilhamento de informações</h2>
            <p>
              Não vendemos, comercializamos ou transferimos para terceiros suas informações de identificação pessoal, 
              exceto para parceiros de confiança que nos ajudam a operar nosso site, conduzir nossos negócios, ou servi-lo, 
              desde que essas partes concordem em manter essas informações confidenciais.
            </p>
            <p>
              Podemos também divulgar suas informações quando acreditamos que a liberação é apropriada para cumprir a lei, 
              fazer cumprir as políticas do nosso site, ou proteger nossos ou outros direitos, propriedades ou segurança.
            </p>

            <h2>6. Links de terceiros</h2>
            <p>
              Ocasionalmente, a nosso critério, podemos incluir ou oferecer produtos ou serviços de terceiros em nosso site. 
              Esses sites de terceiros têm políticas de privacidade separadas e independentes. Portanto, não temos nenhuma 
              responsabilidade pelo conteúdo e atividades desses sites vinculados.
            </p>

            <h2>7. Seus direitos</h2>
            <p>
              Você tem o direito de:
            </p>
            <ul>
              <li>Acessar os dados pessoais que temos sobre você</li>
              <li>Corrigir quaisquer dados pessoais imprecisos</li>
              <li>Solicitar a exclusão de seus dados pessoais</li>
              <li>Se opor ao processamento de seus dados pessoais</li>
              <li>Solicitar a restrição do processamento de seus dados pessoais</li>
              <li>Solicitar a transferência de seus dados pessoais</li>
              <li>Retirar seu consentimento</li>
            </ul>

            <h2>8. Alterações na política de privacidade</h2>
            <p>
              Podemos atualizar esta política de privacidade de tempos em tempos. Notificaremos você sobre quaisquer 
              alterações publicando a nova política de privacidade nesta página e, se as alterações forem significativas, 
              enviaremos um aviso por e-mail.
            </p>

            <h2>9. Contato</h2>
            <p>
              Se você tiver alguma dúvida sobre nossa política de privacidade, práticas deste site, 
              ou seus relacionamentos com este site, entre em contato conosco em: <a href="mailto:privacidade@chatnest.com.br" className="text-chatnest-accent hover:underline">privacidade@chatnest.com.br</a>
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPage;
