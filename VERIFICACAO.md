# Verificação da entrega

## Resultado

- `npm test`: 5 testes aprovados.
- `npm run build`: build Vite de produção concluído.
- Vue 3.5.44, Vue Router 4.5.1, Vite 6.4.4 e plugin Vue 5.2.4 registrados no lockfile.
- `npm audit fix`: corrigiu os alertas encontrados e terminou com 0 vulnerabilidades reportadas na consulta executada. Esse resultado depende da base de avisos daquele momento e não é uma garantia absoluta de segurança.
- Renderização server-side de conferência das páginas Home e Links e do modal: passou.
- Links locais de mídia dessas renderizações: todos apontam para arquivos existentes.
- Modal renderizado com 23 opções e link para `5511977095803`, sem campos de nome, endereço ou data.
- Verificação de conteúdo: nenhuma referência a Elite Nails, Vanessa, Fabi, telefone anterior ou marca jurídica nas páginas renderizadas.
- Conferência automática dos 16 valores de serviços/decorações e dos 7 combos contra a transcrição das imagens atuais.
- Soma de serviços e codificação de acentos na mensagem de WhatsApp testadas.
- Economia dos combos testada: R$ 5, R$ 5, R$ 5, R$ 14, R$ 36, R$ 22 e R$ 59, respectivamente.
- Ícones reduzidos para um arquivo WOFF local de aproximadamente 2 KB; licença incluída.

## Projeto original e decisões

O projeto original usa Vue 3, Vite, roteamento por hash implementado no App, dependências de Vuetify, Pinia, GSAP, Leaflet e Swiper. Parte da infraestrutura de rotas e plugins não era utilizada pelo ponto de entrada. Havia conteúdo e contatos de exemplo do segmento jurídico.

A implementação mantém Vue e Vite e o componente de acessibilidade, adaptado à identidade nova. A navegação passa a usar Vue Router com carregamento separado de páginas e do agendamento. Dependências sem uso foram removidas; animações leves usam CSS e IntersectionObserver com limpeza no unmount. O botão de acessibilidade fica à esquerda, o WhatsApp à direita. O popup respeita o fechamento na sessão.

Não existe coleta de dados no servidor, uso de HTML arbitrário ou integração falsa com calendário. Modais utilizam dialog nativo para foco, Escape e isolamento da página. O site não confirma horários.

## Limitações de verificação

Não foi executado navegador automatizado nesta sessão, portanto não foram medidos Lighthouse, Core Web Vitals ou ausência de erros no console em navegação real. Não houve certificação WCAG. Responsividade foi implementada com breakpoints para telas de 320 px em diante, mas precisa de conferência visual em dispositivos reais antes de anunciar conformidade.

O carregamento de VLibras, síntese de voz, abertura externa de WhatsApp e gestos de toque dependem do dispositivo e precisam de teste manual. Nenhuma mensagem foi enviada.

## Conferência manual antes de publicar

1. Abrir `/` e `/links` no desktop e em 320, 390 e 768 px.
2. Abrir/fechar o menu e navegar pelos links; testar Tab e Escape nos modais.
3. Filtrar as três categorias de serviços e os resultados; ampliar fotos, usar setas e gestos.
4. Selecionar serviços de categorias diferentes e um combo; conferir nomes, categorias, valores e subtotal no WhatsApp.
5. Testar os controles de fonte, contraste, redução de animações, leitura e VLibras.
6. Abrir diretamente `/links` após a publicação na Vercel.
7. Configurar SITE_URL e verificar sitemap, canonical e compartilhamento.
8. Rodar Lighthouse no domínio publicado e conferir os contrastes e o layout com zoom.

O site não foi publicado na Vercel nesta entrega. O ZIP contém os arquivos para essa publicação.

## Atualização: localização

Seção de dúvidas retirada e substituída pela localização SP Capital. Link na Bio e navegação atualizados. Build de produção reexecutado com sucesso.

Atualização de 16/10/2026: Instagram flutuante somente com ícone; localização SP Capital; catálogo substituído pelos seis prints. Link Google pendente de identificação, CTA pronto e condicionado a reviewsUrl.
