# Instituto da Mulher de Piracicaba

Site institucional da Clínica Mulher de Piracicaba, desenvolvido para apresentar a clínica, sua equipe, especialidades, estrutura e canais de agendamento.

## Sobre o projeto

O site reúne informações sobre o atendimento humanizado em saúde da mulher, com destaque para:

- ginecologia e obstetrícia;
- psicologia;
- nutrição;
- procedimentos ginecológicos e exames preventivos;
- equipe de profissionais;
- história e estrutura da clínica;
- agendamento direto pelo WhatsApp.

## Tecnologias

- Next.js com App Router;
- React e TypeScript;
- Tailwind CSS;
- Vinext para build compatível com Cloudflare;
- CSS responsivo com efeitos de parallax e hover;
- otimizações de SEO e metadados da página.

## Executar localmente

Instale as dependências e inicie o servidor de desenvolvimento:

```bash
npm install
npm run dev
```

Depois, acesse `http://localhost:3000`.

## Build de produção

```bash
npm run build
```

Para iniciar a aplicação gerada:

```bash
npm run start
```

### Deploy na Vercel

O projeto mantém o build Vinext para o ChatGPT Sites e possui um build separado para a Vercel. O arquivo `vercel.json` faz a Vercel executar `npm run build:vercel`, que gera o diretório `.next` esperado pelo adaptador Next.js.

## Estrutura principal

```text
app/                    # Página principal, estilos e formulário de agendamento
components/ui/          # Componentes reutilizáveis, incluindo o efeito de typewriter
public/images/          # Logo e fotografias da clínica e da equipe
.openai/hosting.json    # Identificação do projeto hospedado no ChatGPT Sites
```

## Contato da clínica

- WhatsApp: [55 19 99678-9337](https://wa.me/5519996789337)
- Telefone: (19) 3377-4445
- Endereço: Avenida Independência, 950, sala 123, Piracicaba - SP, 13419-155
- Instagram: [@institutodamulherpiracicaba](https://www.instagram.com/institutodamulherpiracicaba)
- Facebook: [Instituto da Mulher de Piracicaba](https://web.facebook.com/institutodamulherdepiracicaba/)

## Site publicado

[instituto-da-mulher-piracicaba.pgozetto.chatgpt.site](https://instituto-da-mulher-piracicaba.pgozetto.chatgpt.site/)

## Licença

Projeto institucional privado da Clínica Mulher de Piracicaba. O conteúdo, a identidade visual e as imagens não devem ser reutilizados sem autorização.
