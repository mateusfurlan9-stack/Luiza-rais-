# Luiza Rais Nails — projeto completo

Site Vue 3 com Vite, profissional localizada em SP Capital, atendimento a domicílio e agendamento direto pelo WhatsApp **+55 11 97709-5803**.

## Abrir no VS Code

1. Extraia este ZIP.
2. No VS Code, use **Arquivo → Abrir Pasta** e selecione `luiza-rais-nails` (a pasta que contém `package.json`).
3. Instale Node.js 22.12 ou superior.
4. Abra **Terminal → Novo Terminal** e execute:

```sh
npm ci
npm run dev
```

Abra o endereço local mostrado no terminal. Não abra o `index.html` com duplo clique: o projeto precisa do Vite ou do servidor de produção.

## Gerar a versão de produção

```sh
npm test
npm run build
npm run preview
```

O resultado está em `dist/`. Essa pasta também acompanha o ZIP para conferência. Para alterações, edite `src/` e gere um novo build.

## Publicar na Vercel

1. Envie a pasta do projeto para um repositório GitHub, sem `node_modules`.
2. Na Vercel, importe o repositório e selecione a pasta que contém `package.json` como Root Directory, caso necessário.
3. Framework: **Vite**. Build Command: `npm run build`. Output Directory: `dist`. Install Command: `npm ci`.
4. Use Node.js 22 ou superior compatível.
5. Adicione a variável de ambiente `SITE_URL` com o domínio final, por exemplo `https://seu-projeto.vercel.app`, sem barra final. Faça um novo deploy se só souber o domínio depois da primeira publicação.
6. O arquivo `vercel.json` mantém o acesso direto a `/links` e define cabeçalhos básicos de segurança.

Sem `SITE_URL`, o site funciona, mas o sitemap e as URLs absolutas de compartilhamento não são gerados. Não foi inventado um domínio.

## Onde editar

- `src/config/siteConfig.js`: serviços, preços, combos, textos, WhatsApp, Instagram, fotos e cores.
- `src/styles/global.css`: layout e aparência.
- `src/components/HomePage.vue`: ordem das seções.
- `src/components/BookingModal.vue`: seleção de serviços e encaminhamento ao WhatsApp.
- `src/components/LinkBioPage.vue`: página exclusiva `/links`.
- `public/media`: fotografias locais em WebP, tabelas e ícones.

O telefone deve conter somente país, DDD e número: `5511977095803`.

## Conteúdo incluído

- 16 serviços e 7 combos, com nomes e preços atualizados pelos seis prints enviados em 16/10/2026.
- Categorias: A domicílio, Soft Gel e Esmalteria.
- Combos individuais e intransferíveis, com duração de 1 mês.
- Economia calculada em relação aos serviços avulsos.
- Quatro fotografias de resultados e a fotografia da profissional enviadas nesta conversa. As duas artes com a frase “Na Esmalteria” não foram usadas como resultados, pois o atendimento é a domicílio.
- Galeria com filtros, ampliação, navegação por setas e gestos.
- Agendamento: escolher serviço(s) → abrir WhatsApp com nomes, categorias, valores e subtotal. Sem formulário de nome, bairro, região ou data.
- A conversa no WhatsApp é uma solicitação, não uma confirmação automática de horário.
- Link na bio em `/links`; `/bio`, `/linkbio` e os antigos hashes de bio redirecionam para a mesma experiência.
- Ajuste de fonte, contraste, leitura em voz alta, espaçamento, destaque de links, redução de movimento e VLibras sob demanda.

## Dados opcionais ainda não fornecidos

- Instagram configurado: https://www.instagram.com/luizaraisnails/ (botões no site e Link na Bio, incluindo botão somente com ícone fixo acima do WhatsApp no canto inferior direito).
- Logo oficial: foi criado um monograma tipográfico LR, sem atribuí-lo a uma logo oficial fornecida.
- Avaliações: o array `reviews` está vazio; nenhuma avaliação fictícia aparece publicamente. Para ativar a seção, inclua `{name, text, rating, date, demo:false}`. Exemplos fictícios devem usar `demo:true`.
- Antes/depois: `transformations` está vazio porque não foram fornecidas fotos correspondentes da mesma transformação. O componente está pronto. Adicione `{title, before, after, beforeAlt, afterAlt, demo:false}` com caminhos locais de um par real. Não use resultados de pessoas diferentes como antes/depois.
- Preços promocionais individuais: só exibidos quando `promotionVerified:true` e `originalPrice` for maior que `price`. Nenhum desconto individual inventado foi adicionado.
- Não há mapa nem endereço de salão, pois o serviço é a domicílio.

## Privacidade e serviços externos

Não há backend, coleta de formulário nem painel administrativo fictício. A seleção fica em memória. O link prepara a conversa no WhatsApp e a cliente decide enviá-la. O popup usa somente `sessionStorage` para lembrar que foi fechado. Fotos, estilos e ícones ficam locais. VLibras só carrega de `vlibras.gov.br` quando ativado; leitura em voz alta depende do navegador.

## Verificação

Consulte `VERIFICACAO.md` para os testes executados e as limitações. Não há promessa de pontuação Lighthouse não medida.

## Atualização de localização

A seção de dúvidas foi removida. A localização SP Capital aparece na página principal e no Link na Bio, mantendo o atendimento a domicílio. A cidade pode ser alterada em `contact.city`.

## Atualização do catálogo em 16/10/2026

As novas imagens substituem as tabelas anteriores. Alongamento na Tips custa R$ 350; no molde, R$ 310. Como os títulos são iguais nas imagens, a técnica acompanha o item e a mensagem de WhatsApp. Descrições truncadas não foram completadas por suposição. O botão Avaliar no Google já está implementado no site e na bio, mas fica oculto até inserir o link correto em `reviewsUrl`. O perfil ainda não foi identificado com segurança.
