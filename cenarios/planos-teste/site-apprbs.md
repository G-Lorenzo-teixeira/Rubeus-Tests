# Plano de teste — Página Site (Rubeus / APPRBS)

**URL:** https://qualidade.apprbs.com.br/site  
**Objetivo:** Automatizar a validação da página institucional e do formulário Newsletter com base na análise em `DesafiosEnt/ANALISE-SITE-QUALIDADE-APPRBS.md`.

## Cenários automatizáveis

| ID    | Cenário | O que validar |
|-------|---------|----------------|
| CT-01 | Página carrega | Título "Site", seção "NÃO FIQUE DE FORA!" / Newsletter visível. |
| CT-02 | Botão Concluir desabilitado | Com formulário Newsletter vazio, botão "Concluir" está disabled. |
| CT-03 | Regressão "Prencha" | Placeholder do campo Nome da Newsletter não deve conter "Prencha". |
| CT-04 | Seletor de país presente | Combobox de país existe no formulário Newsletter. |
| CT-05 | Preenchimento Newsletter | Preencher Nome, Email, Telefone, País e validar que o formulário aceita os dados. |
| CT-06 | Regressão "ornare.Class" | Conteúdo da página não deve conter "ornare.Class" (falta espaço no depoimento). |
| CT-07 | Link EVENTOS | Ao clicar em "EVENTOS" no menu, a seção "PRÓXIMOS EVENTOS" fica visível. |

## Execução

- Spec: `tests/e2e/site-apprbs.spec.ts`
- Comando: `npx playwright test tests/e2e/site-apprbs.spec.ts`
- Base URL: https://qualidade.apprbs.com.br (em `playwright.config.ts`).
