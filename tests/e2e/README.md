# Testes E2E — código Playwright

Esta pasta contém o **código de automação** gerado a partir dos cenários documentados em `cenarios/planos-teste/` e `cenarios/frontend/`, ou a partir do relato da execução feita com o Playwright MCP (Command **gerar-codigo-teste**).

## Como os arquivos são criados

- **Command:** Use `/gerar-codigo-teste` no Cursor e indique o cenário (arquivo em `cenarios/` ou "o cenário que acabamos de executar").
- **Skill:** A IA usa a skill `gerar-codigo-playwright` para gerar specs com estrutura padronizada, seletores estáveis e assertions.
- **Convenção:** Um arquivo por fluxo/módulo, ex.: `login.spec.ts`, `cadastro.spec.ts`. Nomes em minúsculas, hífens.

## Como executar

1. **Instalar dependências** (na raiz do projeto):
   ```bash
   npm init -y
   npm install -D @playwright/test
   npx playwright install
   ```

2. **Configurar baseURL** em `playwright.config.ts` na raiz (ou usar variável de ambiente). A URL do sistema alvo está em `playwright-config/SISTEMA-ALVO.md`; credenciais em `playwright-config/*-infos.md` (não versionado).

   Exemplo mínimo de `playwright.config.ts`:
   ```ts
   import { defineConfig } from '@playwright/test';
   export default defineConfig({
     testDir: './tests/e2e',
     use: {
       baseURL: process.env.BASE_URL || 'http://localhost:3000',
       screenshot: 'only-on-failure',
     },
   });
   ```

3. **Rodar os testes:**
   ```bash
   npx playwright test
   ```
   Ou um arquivo específico:
   ```bash
   npx playwright test tests/e2e/login.spec.ts
   npx playwright test tests/e2e/certificacao-apprbs.spec.ts
   npx playwright test tests/e2e/site-apprbs.spec.ts
   ```

   **Certificação:** `certificacao-apprbs.spec.ts` — https://qualidade.apprbs.com.br/certificacao  
   **Site:** `site-apprbs.spec.ts` — https://qualidade.apprbs.com.br/site  

   A baseURL padrão em `playwright.config.ts` aponta para esse domínio; para outro ambiente use `BASE_URL=https://... npx playwright test tests/e2e/certificacao-apprbs.spec.ts`.

## Estrutura esperada

- Arquivos `*.spec.ts` (ou `*.spec.js`) com `test()` e `test.describe()` do `@playwright/test`.
- Credenciais via variáveis de ambiente (ex.: `USER_TEST`, `PASS_TEST`), nunca no código.
- Comentários e descrições em PT-BR; código seguindo a skill `gerar-codigo-playwright`.

## Referências

- Command: `.cursor/commands/gerar-codigo-teste.md`
- Skill: `.cursor/skills/gerar-codigo-playwright/SKILL.md`
- Estratégia MCP → código: `docs/Arquitetura/MCP-PARA-CODIGO-PLAYWRIGHT.md`
- Sistema alvo: `playwright-config/SISTEMA-ALVO.md`
