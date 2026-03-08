# Rubeus-Tests

Testes E2E (Playwright) para as páginas **Certificação** e **Site** do ambiente de qualidade da APPRBS, desenvolvidos no contexto do processo seletivo Rubeus.

**URLs sob teste:**
- **Certificação:** https://qualidade.apprbs.com.br/certificacao  
- **Site:** https://qualidade.apprbs.com.br/site  

---

## O que este repositório contém

- **Análises de qualidade** das duas páginas (critérios, acessibilidade, formulários).
- **Relatos de bugs** no formato do processo Rubeus (Certificação e Site).
- **Planos de teste** com cenários CT-01 a CT-07 para cada página.
- **Automação Playwright** que cobre esses cenários (parte das falhas é esperada enquanto os bugs reportados existirem).

---

## Estrutura do repositório

```
├── DesafiosEnt/
│   ├── ANALISE-CERTIFICACAO-QUALIDADE-APPRBS.md   # Análise da página Certificação
│   ├── ANALISE-SITE-QUALIDADE-APPRBS.md           # Análise da página Site
│   └── RUBEUS-ARQUIVOS-REPOSITORIO.md             # Lista de arquivos versionados
├── cenarios/
│   ├── evidencias/bugs/
│   │   ├── rubeus-certificacao-apprbs.md          # Bugs reportados — Certificação
│   │   └── rubeus-site-apprbs.md                 # Bugs reportados — Site
│   └── planos-teste/
│       ├── certificacao-apprbs.md                 # Plano de teste — Certificação
│       └── site-apprbs.md                        # Plano de teste — Site
├── tests/e2e/
│   ├── certificacao-apprbs.spec.ts                # Automação — Certificação
│   ├── site-apprbs.spec.ts                       # Automação — Site
│   └── README.md                                 # Instruções de execução dos testes
├── playwright.config.ts                           # Configuração (baseURL qualidade.apprbs.com.br)
└── package.json
```

---

## Como executar os testes

### 1. Clonar e instalar dependências

```bash
git clone https://github.com/G-Lorenzo-teixeira/Rubeus-Tests.git
cd Rubeus-Tests
npm install
npx playwright install
```

### 2. Rodar os testes

**Todos os testes (Certificação + Site):**
```bash
npm test
```

**Apenas Certificação:**
```bash
npm run test:certificacao
```

**Apenas Site:**
```bash
npm run test:site
```

**Comando direto (Playwright):**
```bash
npx playwright test tests/e2e/certificacao-apprbs.spec.ts
npx playwright test tests/e2e/site-apprbs.spec.ts
```

### 3. Outro ambiente (opcional)

Para usar uma base URL diferente (ex.: homologação):

```bash
BASE_URL=https://outro-dominio.com npx playwright test tests/e2e/certificacao-apprbs.spec.ts
```

A base URL padrão está em `playwright.config.ts` (`https://qualidade.apprbs.com.br`).

---

## Observação sobre falhas esperadas

Alguns testes podem falhar de forma **intencional** enquanto os problemas descritos nos relatos de bugs existirem (por exemplo: textos como "Prencha", "Salba mais", "ornare.Class"). Os specs servem para **regressão** e para **validar** que esses itens continuam sendo detectados até a correção no sistema.

---

## Referências

- Relatos de bugs: `cenarios/evidencias/bugs/rubeus-*-apprbs.md`
- Planos de teste: `cenarios/planos-teste/*-apprbs.md`
- Análises de qualidade: `DesafiosEnt/ANALISE-*-APPRBS.md`
- Detalhes de execução: `tests/e2e/README.md`
