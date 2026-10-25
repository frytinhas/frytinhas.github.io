# Google Search Console

O site usa `https://frytinhas.github.io` como endereço oficial. As páginas públicas são `/` (inglês) e `/pt/` (português). O SEO é definido no HTML estático, sem alterar o conteúdo visível.

## Publicação e verificação

1. Publique as alterações pelo fluxo existente do GitHub Pages: um push na branch `main` executa o build e o deploy. Aguarde a conclusão do workflow.
2. Confira os endereços públicos:
   - `https://frytinhas.github.io/robots.txt`
   - `https://frytinhas.github.io/sitemap-index.xml`
   - `https://frytinhas.github.io/sitemap.xml`
   - `https://frytinhas.github.io/googlef11da67e225a9f62.html`
3. Abra o [Google Search Console](https://search.google.com/search-console) com a conta proprietária. Se a propriedade já existir, selecione-a; caso contrário, adicione uma propriedade do tipo **Prefixo do URL**, com `https://frytinhas.github.io/`.
4. Verifique a propriedade pelo arquivo HTML ou pela tag HTML já presentes no projeto. Ambos precisam corresponder aos valores fornecidos pelo Search Console para a sua conta. Caso a ferramenta forneça outro arquivo ou token, atualize o arquivo em `public/` ou a tag `google-site-verification` no layout e publique novamente. Preserve os verificadores após a aprovação.
5. Em **Sitemaps**, envie `https://frytinhas.github.io/sitemap-index.xml`. Esse índice aponta para `sitemap.xml`, que continua disponível para envios anteriores.
6. Na **Inspeção de URL**, inspecione `https://frytinhas.github.io/` e `https://frytinhas.github.io/pt/`, faça o teste ao vivo e solicite a indexação quando disponível.
7. Acompanhe os relatórios de indexação e desempenho para verificar o processamento do sitemap, as páginas indexadas e as consultas por nome.

## Nomes e manutenção

- As descrições e o JSON-LD identificam José Gabriel Jesuino Nunes, José Nunes e frytinhas. Os dados estruturados também incluem as versões sem acentos e os perfis GitHub e LinkedIn existentes.
- Não há cadastro de palavras-chave no Search Console. A tag `meta keywords` é ignorada pelo Google; as consultas de busca são acompanhadas no relatório de desempenho. Os metadados não garantem indexação, posição ou resultados enriquecidos.
- O sitemap é estático: ao adicionar ou remover páginas públicas, atualize `public/sitemap.xml`, mantendo URLs canônicas absolutas e os idiomas correspondentes. Não inclua âncoras, verificadores ou datas de modificação fictícias.
- `public/sitemap-index.xml` segue o protocolo Sitemap e lista apenas arquivos de sitemap; `public/sitemap.xml` lista as páginas. O `robots.txt` aponta para o índice. Com duas páginas, o índice é opcional, mas permite adicionar outros sitemaps sem trocar o endereço enviado aos buscadores. Ao criar outro sitemap, inclua sua URL absoluta no índice; não inclua um índice dentro de outro.
- Execute `npm run build` e confira os arquivos em `dist/` antes de publicar. O pipeline publica somente `dist/`, por isso o arquivo de verificação precisa estar em `public/`.

Referências: [verificação de propriedade](https://support.google.com/webmasters/answer/9008080?hl=pt-BR), [criação e envio de sitemap](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap?hl=pt-br) e [metatags aceitas pelo Google](https://developers.google.com/search/docs/crawling-indexing/special-tags?hl=pt-br).
