# Controle de Gastos — versão completa (v1.0)

Aplicação web para registrar e acompanhar gastos pessoais, 100% no navegador. Sem servidor, sem cadastro e sem custo: os dados ficam salvos no próprio navegador (localStorage) e não saem do computador de quem usa.

Projeto pessoal de estudo e portfólio, feito com HTML, CSS e JavaScript puro. O desenvolvimento comentado, em sessões semanais, acontece no repositório [`controle-de-gastos`](https://github.com/felipesantiago-coder/controle-de-gastos); este repositório concentra a versão completa.

## Funcionalidades

- Cadastro de gastos com descrição, valor, data e categoria
- Validação simples do formulário
- Lista com os gastos mais recentes primeiro
- Remoção de gastos (com confirmação)
- Edição de gastos pelo mesmo formulário
- Filtros por categoria e por mês
- Resumo com total filtrado, total geral e maior categoria
- Gráfico de rosca (Chart.js) com os gastos por categoria
- Layout responsivo — funciona no celular
- Dados salvos automaticamente no navegador

## Tecnologias

- HTML5, CSS3 e JavaScript puro (sem frameworks)
- Chart.js via CDN para o gráfico
- localStorage para guardar os dados
- GitHub Pages para publicar

## Como usar

1. Abra a página (publicada no GitHub Pages ou o arquivo `index.html` no navegador).
2. Preencha descrição, valor, data e categoria e clique em **Adicionar gasto**.
3. Use os filtros para ver só uma categoria ou um mês.
4. Clique em **Editar** ou **Remover** em cada gasto da lista.
5. Os totais do resumo e o gráfico se atualizam sozinhos.

Os gastos ficam salvos no navegador usado. Se você limpar os dados do navegador, os gastos apagam — não existe servidor guardando nada.

## Como publicar no GitHub Pages

1. No repositório, vá em **Settings → Pages**.
2. Em **Source**, escolha a branch `main` e a pasta `/ (root)`.
3. Salve. Em alguns minutos a página fica disponível no endereço mostrado na tela.

## Estrutura do projeto

- `index.html` — a página
- `css/style.css` — os estilos
- `js/app.js` — toda a lógica
- `docs/PLANO.md` — o plano seguido durante o desenvolvimento

## Licença

Projeto sob licença MIT — veja o arquivo [LICENSE](LICENSE).
