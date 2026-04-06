# 🤖 ChatNest — Plataforma de Gerenciamento de Chatbots

> Gerencie, monitore e analise seus bots do Typebot em um único painel moderno e intuitivo.

---

![ChatNest Preview](https://raw.githubusercontent.com/Zhennyn/chatnest-bot-builder/main/public/typebot.png)

---

## ✨ Funcionalidades

- 🤖 **Gerenciamento de Bots** — Adicione e organize múltiplos bots do Typebot em um só lugar
- 📊 **Dashboard de Analytics** — Acompanhe interações totais, visitas únicas, conversas concluídas e tempo médio por sessão
- 🔒 **Autenticação Segura** — Sistema completo de login, cadastro e recuperação de senha via Supabase Auth
- 🗂️ **Multi-tenant** — Cada usuário gerencia apenas seus próprios bots com isolamento de dados
- 🌐 **Embed Simplificado** — Integre qualquer bot em sites externos com código de embed pronto
- 💳 **Planos Freemium** — Plano gratuito e plano Premium com recursos avançados
- 📱 **Design Responsivo** — Interface adaptada para desktop e dispositivos móveis
- ⚡ **Tempo Real** — Dados sincronizados diretamente com o Supabase (PostgreSQL)
- 🗑️ **CRUD Completo** — Criação, edição, ativação/desativação e exclusão de bots

---

## 🛠️ Tecnologias Utilizadas

![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Supabase](https://img.shields.io/badge/Supabase-PostgreSQL-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-6-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white)
![React Query](https://img.shields.io/badge/TanStack_Query-5-FF4154?style=for-the-badge&logo=reactquery&logoColor=white)
![Recharts](https://img.shields.io/badge/Recharts-2-22D3EE?style=for-the-badge&logo=chartdotjs&logoColor=white)
![Radix UI](https://img.shields.io/badge/Radix_UI-shadcn-000000?style=for-the-badge&logo=radixui&logoColor=white)
![Zod](https://img.shields.io/badge/Zod-Validação-3E67B1?style=for-the-badge&logo=zod&logoColor=white)

---

## 🚀 Como executar localmente

### Pré-requisitos

- [Node.js](https://nodejs.org/) v18 ou superior
- [npm](https://www.npmjs.com/) ou [bun](https://bun.sh/)
- Conta no [Supabase](https://supabase.com/) (gratuita)

### Passos

1. **Clone o repositório**
   ```bash
   git clone https://github.com/Zhennyn/chatnest-bot-builder.git
   cd chatnest-bot-builder
   ```

2. **Instale as dependências**
   ```bash
   npm install
   # ou
   bun install
   ```

3. **Configure as variáveis de ambiente**

   Crie um arquivo `.env` na raiz do projeto com as chaves do seu projeto Supabase:
   ```env
   VITE_SUPABASE_URL=https://SEU_PROJETO.supabase.co
   VITE_SUPABASE_ANON_KEY=sua_chave_anonima_aqui
   ```

4. **Configure o banco de dados**

   Execute as migrações no painel do Supabase ou use a CLI:
   ```bash
   npx supabase db push
   ```

5. **Inicie o servidor de desenvolvimento**
   ```bash
   npm run dev
   ```

6. **Acesse no navegador**
   ```
   http://localhost:8080
   ```

---

## 📸 Screenshots

| Landing Page | Dashboard |
|---|---|
| ![Landing Page](https://raw.githubusercontent.com/Zhennyn/chatnest-bot-builder/main/public/typebot.png) | ![Dashboard](https://raw.githubusercontent.com/Zhennyn/chatnest-bot-builder/main/public/typebot.png) |

---

## 🌐 Demonstração

> 🚧 **Deploy em breve** — A versão de demonstração será publicada em: `https://chatnest.vercel.app`

Para testar localmente, siga os passos da seção [Como executar](#-como-executar-localmente).

---

## 📌 Sobre o projeto

O **ChatNest** é uma aplicação SaaS full-stack desenvolvida em **2024** com foco em automação de atendimento via chatbots. O projeto nasceu da necessidade de centralizar o gerenciamento de múltiplos bots do [Typebot](https://typebot.io/) em uma única interface, eliminando a troca constante entre painéis.

### Por que este projeto é relevante para recrutadores de TI?

| Área | Habilidade demonstrada |
|---|---|
| ☁️ **Cloud / Backend** | Banco de dados PostgreSQL no Supabase com RLS, Edge Functions serverless e autenticação gerenciada na nuvem |
| 📊 **Análise de Dados** | Coleta, armazenamento e visualização de métricas de interação (analytics_daily) com agregações e gráficos |
| 🖥️ **Suporte & Help Desk** | Automação de atendimento com chatbots, redução de tickets manuais e histórico de conversas rastreável |
| 🔧 **Full-Stack** | Aplicação completa com autenticação, CRUD, rotas protegidas, validação de formulários e UI responsiva |
| 🔒 **Segurança** | Row Level Security (RLS) no banco, autenticação JWT e rotas protegidas no frontend |

---

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma _issue_ ou enviar um _pull request_.

1. Faça um fork do projeto
2. Crie sua branch: `git checkout -b feature/minha-feature`
3. Commit suas alterações: `git commit -m 'feat: adiciona minha feature'`
4. Push para a branch: `git push origin feature/minha-feature`
5. Abra um Pull Request

---

<div align="center">

Feito com ❤️ por **[Zhennyn](https://github.com/Zhennyn)**

⭐ Se este projeto te ajudou, deixa uma estrela!

</div>
