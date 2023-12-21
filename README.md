# Evently

## Descrição

Evently é um projeto que oferece uma plataforma para organização e gestão de eventos. Desenvolvido com Next.js, o aplicativo utiliza diversas tecnologias modernas, incluindo Clerk para autenticação, Stripe para processamento de pagamentos, MongoDB e Mongoose para persistência de dados, e muitos outros componentes para criar uma experiência interativa e dinâmica.

## Pré-requisitos

Certifique-se de ter o Node.js instalado na sua máquina.

## Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/evently.git
   ```

2. Navegue até o diretório do projeto:

   ```bash
   cd evently
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

## Configuração

Certifique-se de configurar as variáveis de ambiente necessárias para as integrações, como chaves do Stripe, configurações do MongoDB, e outras configurações específicas do seu ambiente.

Crie um arquivo `.env.local` na raiz do projeto e adicione as seguintes variáveis:

```env
NEXT_PUBLIC_STRIPE_PUBLIC_KEY=your_stripe_public_key
STRIPE_SECRET_KEY=your_stripe_secret_key
MONGODB_URI=your_mongodb_uri
# Adicione outras variáveis de ambiente conforme necessário
```

## Uso

### Desenvolvimento

Execute o seguinte comando para iniciar o servidor de desenvolvimento:

```bash
npm run dev
```

O aplicativo estará disponível em [http://localhost:3000](http://localhost:3000).

### Produção

Para construir e iniciar o aplicativo em um ambiente de produção, execute os seguintes comandos:

```bash
npm run build
npm start
```

## Scripts

- `npm run dev`: Inicia o servidor de desenvolvimento do Next.js.
- `npm run build`: Constrói o aplicativo para produção.
- `npm start`: Inicia o aplicativo em um ambiente de produção.
- `npm run lint`: Executa a verificação de linting usando as configurações do Next.js.

## Tecnologias Principais

- Next.js
- Clerk
- Stripe
- MongoDB
- Mongoose
- React
- Tailwind CSS
