# Plano de teste — Página Certificação (Rubeus / APPRBS)

**URL:** https://qualidade.apprbs.com.br/certificacao  
**Objetivo:** Automatizar a validação do formulário e dos itens de qualidade identificados na análise (bugs reportados em `cenarios/evidencias/bugs/rubeus-certificacao-apprbs.md`).

## Cenários automatizáveis

| ID | Cenário | O que validar |
|----|---------|----------------|
| CT-01 | Página carrega | Título "Certificação", formulário visível (link "Quero me certificar" ou campos do formulário). |
| CT-02 | Botão Avançar desabilitado inicialmente | Com formulário vazio, botão "Avançar" está disabled. |
| CT-03 | Placeholder do campo Nome | Primeiro campo (Nome) tem placeholder contendo "campo". Após correção do bug: deve ser "Preencha este campo". |
| CT-04 | Regressão bug ortografia "Prencha" | Placeholder do campo Nome não deve conter "Prencha" (assertion que passa quando o bug for corrigido). |
| CT-05 | Seletor de país presente | Combobox de país existe. Após correção: label em português. |
| CT-06 | Preenchimento e estado do botão | Preencher Nome, Email, Telefone e selecionar país; validar se botão "Avançar" habilita (ou documentar comportamento atual). |
| CT-07 | Regressão bug "Salba mais" | Não deve existir link com texto exato "Salba mais" (após correção do bug). |

## Especificação do formulário (elementos)

- **Nome:** textbox com placeholder "Prencha este campo" (bug) ou "Preencha este campo".
- **País:** combobox "Selected country" (bug) ou "País".
- **Telefone:** textbox placeholder (11) 96123-4567.
- **Email:** textbox obrigatório, placeholder email@exemplo.com.
- **Botão:** "Avançar" (disabled até condições serem atendidas).

## Execução

- Spec: `tests/e2e/certificacao-apprbs.spec.ts`
- Comando: `npx playwright test tests/e2e/certificacao-apprbs.spec.ts`
- Base URL: https://qualidade.apprbs.com.br
