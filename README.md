# Black Crown Barber Studio — reprodução independente

Landing page conceitual da **Black Crown Barber Studio**, recriada a partir do HTML gerado pelo SITE123 e fornecido pelo usuário. Projeto integrante do portfólio da **ClickFocus**.

## O que foi preservado

- Mesmas seções, textos, preços, CTAs, organização e referências de imagens do HTML original.
- Fontes originais Cinzel e Montserrat e ícones Font Awesome 6.7.2 carregados pelos respectivos CDNs.
- Layout responsivo com classes do Tailwind CSS compiladas localmente (sem dependência do compilador no navegador).
- Navegação mobile, FAQ, efeito de entrada ao rolar e links internos.
- Substituição do favicon do SITE123 por ícone próprio.

## Limitações da fidelidade

O HTML exportado não contém quatro arquivos CSS e o script da plataforma SITE123. O link de prévia informado pelo usuário não pôde ser aberto pelo ambiente de inspeção e os estilos originais não puderam ser baixados. Esses arquivos foram recriados, **não copiados**. O resultado mantém a estrutura e busca uma aparência visual muito próxima, mas **não é possível garantir uma cópia 100% idêntica pixel a pixel** sem os estilos originais e capturas comparativas.

As fotografias ainda apontam para links externos do CDN do SITE123. Para uso de longo prazo ou comercial, verifique a licença das imagens e hospede cópias cuja utilização esteja autorizada.

O número `+55 11 98765-4321` é demonstrativo. Enquanto permanecer configurado assim, o site bloqueia os links de WhatsApp e mostra um aviso para evitar contato com terceiros por engano.

## Fidelidade visual e dependências externas

Esta versão preserva o HTML fornecido, as imagens, os textos, os preços e os links originais e usa CSS responsivo local recriado. As fontes do Google e os ícones do Font Awesome são carregados por CDN. As fotografias são referenciadas diretamente ao CDN mencionado pelo HTML original; podem deixar de aparecer se o SITE123 alterar os endereços.

Para validar com precisão pixel a pixel, precisamos de **capturas de tela desktop/mobile do preview original** ou dos arquivos CSS `theme.css`, `main.css`, `components.css` e `layout.css`, que o HTML original inclui via URL pública do SITE123. A comparação visual direta ainda não foi realizada.

## Executar localmente

Abra `index.html` no navegador. Para testar com servidor local (recomendado):

```bash
python -m http.server 8000
```

Acesse `http://localhost:8000/`.

## Publicar na Vercel

Crie um repositório GitHub contendo os arquivos da pasta e importe-o na Vercel como projeto **Other** (site estático). Não é necessário comando de build nem diretório de saída personalizado.

## Arquivos

- `index.html` — conteúdo da página, baseado no HTML fornecido.
- `assets/tailwind.css` — utilitários Tailwind usados, compilados localmente.
- `assets/site.css` — temas, efeitos e estilos de componentes recriados.
- `assets/app.js` — navegação mobile, efeitos e aviso dos links demonstrativos.
- `assets/favicon.svg` — favicon próprio.
- `vercel.json` — configuração para publicação estática.

**ClickFocus — A atenção do seu cliente onde realmente importa.**
