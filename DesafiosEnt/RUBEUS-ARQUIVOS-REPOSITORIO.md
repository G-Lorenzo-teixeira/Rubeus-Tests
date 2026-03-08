# Arquivos relacionados aos testes Rubeus — para o repositório

Use esta lista para **adicionar ao Git** apenas o que é referente ao processo seletivo Rubeus (qualidade.apprbs.com.br). Os caminhos são relativos à raiz do projeto.

---

## Obrigatórios (conteúdo Rubeus)

| Caminho | Descrição |
|---------|-----------|
| **DesafiosEnt/Rubeus.md** | Instruções do processo seletivo (Tipo, Classificação, Prioridade, formato do item). |
| **DesafiosEnt/ANALISE-CERTIFICACAO-QUALIDADE-APPRBS.md** | Análise de qualidade da página **Certificação** (itens para o formulário). |
| **DesafiosEnt/ANALISE-SITE-QUALIDADE-APPRBS.md** | Análise de qualidade da página **Site** (itens para o formulário). |
| **cenarios/evidencias/bugs/rubeus-certificacao-apprbs.md** | Relato de bugs da Certificação (formato Rubeus + reportar-bug). |
| **cenarios/evidencias/bugs/rubeus-site-apprbs.md** | Relato de bugs do Site (formato Rubeus + reportar-bug). |
| **cenarios/planos-teste/certificacao-apprbs.md** | Plano de teste da página Certificação (cenários CT-01 a CT-07). |
| **cenarios/planos-teste/site-apprbs.md** | Plano de teste da página Site (cenários CT-01 a CT-07). |
| **tests/e2e/certificacao-apprbs.spec.ts** | Automação Playwright — Certificação. |
| **tests/e2e/site-apprbs.spec.ts** | Automação Playwright — Site. |

---

## Necessários para rodar os testes

| Caminho | Descrição |
|---------|-----------|
| **playwright.config.ts** | Configuração do Playwright (baseURL qualidade.apprbs.com.br, testDir, etc.). Necessário para `npx playwright test tests/e2e/certificacao-apprbs.spec.ts` e `site-apprbs.spec.ts`. |
| **package.json** | Deve ter `@playwright/test` como devDependency. Se ainda não existir, criar com `npm init -y` e `npm install -D @playwright/test`. |

---

## Opcionais (contexto do projeto)

| Caminho | Descrição |
|---------|-----------|
| **tests/e2e/README.md** | Instruções de execução dos testes; cita os specs da Certificação e do Site. Útil se quiser documentar como rodar no repositório. |

---

## Resumo — comandos para adicionar ao repositório

```bash
git add DesafiosEnt/Rubeus.md
git add DesafiosEnt/ANALISE-CERTIFICACAO-QUALIDADE-APPRBS.md
git add DesafiosEnt/ANALISE-SITE-QUALIDADE-APPRBS.md
git add DesafiosEnt/RUBEUS-ARQUIVOS-REPOSITORIO.md
git add cenarios/evidencias/bugs/rubeus-certificacao-apprbs.md
git add cenarios/evidencias/bugs/rubeus-site-apprbs.md
git add cenarios/planos-teste/certificacao-apprbs.md
git add cenarios/planos-teste/site-apprbs.md
git add tests/e2e/certificacao-apprbs.spec.ts
git add tests/e2e/site-apprbs.spec.ts
git add playwright.config.ts
git add package.json
# opcional:
git add tests/e2e/README.md
```

Ou em um único comando (excluindo README opcional):

```bash
git add DesafiosEnt/Rubeus.md DesafiosEnt/ANALISE-*-APPRBS.md DesafiosEnt/RUBEUS-ARQUIVOS-REPOSITORIO.md cenarios/evidencias/bugs/rubeus-*.md cenarios/planos-teste/*-apprbs.md tests/e2e/*-apprbs.spec.ts playwright.config.ts package.json
```

---

## O que **não** incluir (fora do escopo Rubeus)

- **ServeRest:** `playwright-config/SISTEMA-ALVO.md` (se for do outro projeto), `cenarios/planos-teste/serverest-login-*.md`, `tests/e2e/serverest-login.spec.ts`
- **Cursor/MCP:** `.cursor/` (rules, commands, skills, mcp.json.example) — incluir só se o repositório for compartilhado como “projeto de automação com Cursor”
- **Credenciais:** `.cursor/mcp.json`, `playwright-config/*-infos.md` (já no .gitignore)
- Outros arquivos do workspace que não forem específicos do Rubeus

---

*Lista gerada para subir ao repositório apenas as informações relacionadas aos testes do Rubeus (Certificação e Site — qualidade.apprbs.com.br).*
