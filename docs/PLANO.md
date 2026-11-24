# Plano do Projeto — Controle de Gastos (versão completa)

**Início do planejamento:** 25/11/2026 · **Entrega final prevista:** 30/12/2026
**Versão completa (v1.0):** entregue em 24/11/2026, com entrega antecipada de todas as funcionalidades
**Responsável:** Felipe (felipesantiagoquadra@gmail.com)

## 1. Visão geral

Aplicação web para registrar e acompanhar gastos pessoais. A página roda 100% no navegador: sem servidor, sem banco de dados e sem nenhum serviço pago. Os dados ficam salvos no `localStorage` do próprio navegador e não saem do computador de quem usa.

Este repositório concentra a **versão completa** do projeto. O desenvolvimento comentado, em sessões semanais, acontece no repositório `controle-de-gastos`.

## 2. Stack (tudo gratuito)

| Camada | Ferramenta | Custo |
|---|---|---|
| Estrutura | HTML5 | R$ 0 |
| Estilo | CSS3 | R$ 0 |
| Lógica | JavaScript puro | R$ 0 |
| Gráficos | Chart.js (CDN) | R$ 0 |
| Dados | localStorage | R$ 0 |
| Hospedagem | GitHub Pages | R$ 0 |
| Versionamento | GitHub | R$ 0 |

## 3. Rotina de desenvolvimento (horários padrão)

- **Terças, 20:30** (horário de Brasília)
- **Quintas, 20:30** (horário de Brasília)
- **Sábados, 10:00** (horário de Brasília)

## 4. Roadmap

### Semana 1 (25/11 a 30/11) — Base
- [x] Estrutura da página (HTML)
- [x] Estilos base
- [x] Cadastro de gastos com validação

### Semana 2 (01/12 a 06/12) — Persistência
- [x] Salvar gastos no localStorage
- [x] Carregar os gastos ao abrir a página

### Semana 3 (07/12 a 13/12) — Operações
- [x] Remover gasto (com confirmação)
- [x] Editar gasto pelo formulário

### Semana 4 (14/12 a 20/12) — Análise
- [x] Filtros por categoria e por mês
- [x] Resumo: total filtrado, total geral e maior categoria

### Semana 5 (21/12 a 29/12) — Visualização e ajustes
- [x] Gráfico de gastos por categoria (Chart.js)
- [x] Responsividade para celular
- [x] README final com instruções

### Entrega final (30/12)
- [x] Versão completa publicada e marcada como v1.0
