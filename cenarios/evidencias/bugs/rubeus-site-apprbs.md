# Bugs / Itens de qualidade — Site (Rubeus / APPRBS)

**Página:** https://qualidade.apprbs.com.br/site  
**Referência:** Processo Rubeus (`DesafiosEnt/Rubeus.md`) + formato da skill `reportar-bug`.  
**Ambiente:** Navegador (análise via browser MCP). Data: 2025-03-03.

---

## Bug 01 — Ortografia no placeholder do campo Nome (Newsletter)

**Título:** Placeholder "Prencha este campo" no campo Nome do formulário Newsletter.

| Campo            | Valor        |
|------------------|-------------|
| **Item**         | 01 - Ortografia incorreta no placeholder do campo Nome (formulário Newsletter) |
| **Tipo**         | Correção    |
| **Classificação**| Desejabilidade |
| **Prioridade**   | Média       |

**Descrição (para desenvolvedores):** No formulário "Assine nossa Newsletter" (seção "NÃO FIQUE DE FORA!"), o primeiro campo (Nome *) exibe o placeholder/label **"Prencha este campo"**. O correto é **"Preencha este campo"** (com "e"). O erro aparece na árvore de acessibilidade.

**Passos para reproduzir:**
1. Acessar https://qualidade.apprbs.com.br/site
2. Rolar até a seção "NÃO FIQUE DE FORA!" / "Assine nossa Newsletter"
3. Observar o placeholder do campo Nome * ou inspecionar o nome acessível do primeiro textbox

**Resultado esperado:** Texto "Preencha este campo".

**Resultado obtido:** Texto "Prencha este campo" exibido (e exposto na acessibilidade).

**Localização:** Formulário Newsletter, primeiro campo (Nome *) antes do Email e do seletor de país.

**Evidência:** Snapshot de acessibilidade (browser MCP). Ver `DesafiosEnt/ANALISE-SITE-QUALIDADE-APPRBS.md`.

---

## Bug 02 — Links sem texto acessível

**Título:** Nove links na página sem nome/texto acessível para leitores de tela.

| Campo            | Valor        |
|------------------|-------------|
| **Item**         | 02 - Múltiplos links sem nome/texto acessível |
| **Tipo**         | Correção    |
| **Classificação**| Usabilidade |
| **Prioridade**   | Alta        |

**Descrição (para desenvolvedores):** Existem **nove links** na página sem nome (refs e2, e3, e4, e5, e6 no topo e e27, e28, e29, e30 em outra área). Na árvore de acessibilidade aparecem como "link" sem descrição. Leitores de tela anunciam apenas "link". Incluir texto visível ou `aria-label` descritivo em cada link (ex.: ícones de menu ou redes sociais).

**Passos para reproduzir:**
1. Acessar https://qualidade.apprbs.com.br/site
2. Navegar com teclado ou leitor de tela (ou inspecionar todos os `<a>`) e identificar links sem texto nem aria-label
3. Confirmar que vários links no cabeçalho e em outras áreas não possuem nome acessível

**Resultado esperado:** Todo link possui nome acessível (texto ou aria-label) que descreva destino ou ação.

**Resultado obtido:** Nove links sem nome (e2 a e6, e27 a e30 no snapshot).

**Localização:** Cabeçalho e outras seções; verificar no DOM os elementos `<a>` correspondentes.

**Evidência:** Snapshot de acessibilidade. Ver `DesafiosEnt/ANALISE-SITE-QUALIDADE-APPRBS.md`.

---

## Bug 03 — Label do seletor de país em inglês (Newsletter)

**Título:** Combobox de país no formulário Newsletter com nome acessível em inglês ("Selected country").

| Campo            | Valor        |
|------------------|-------------|
| **Item**         | 03 - Seletor de país (Newsletter) com label em inglês |
| **Tipo**         | Melhoria    |
| **Classificação**| Desejabilidade |
| **Prioridade**   | Média       |

**Descrição (para desenvolvedores):** O combobox de seleção de país (DDI) no formulário da Newsletter possui o nome acessível **"Selected country"** (inglês). A página está em português. Para consistência e acessibilidade em PT-BR, o label deve ser "País" ou "Selecione o país".

**Passos para reproduzir:**
1. Acessar https://qualidade.apprbs.com.br/site
2. Rolar até o formulário "Assine nossa Newsletter"
3. Localizar o seletor de país (entre Nome e Telefone) e inspecionar o nome/label do combobox

**Resultado esperado:** Label em português (ex.: "País" ou "Selecione o país").

**Resultado obtido:** Nome acessível "Selected country".

**Localização:** Formulário Newsletter, entre o campo Nome e o campo Telefone.

**Evidência:** Snapshot de acessibilidade. Ver `DesafiosEnt/ANALISE-SITE-QUALIDADE-APPRBS.md`.

---

## Bug 04 — Botão "Concluir" permanece desabilitado (Newsletter)

**Título:** Botão "Concluir" do formulário Newsletter desabilitado sem indicação do que falta.

| Campo            | Valor        |
|------------------|-------------|
| **Item**         | 04 - Botão "Concluir" desabilitado sem indicação do que falta |
| **Tipo**         | Correção    |
| **Classificação**| Utilidade   |
| **Prioridade**   | Alta        |

**Descrição (para desenvolvedores):** No formulário da Newsletter (Nome *, Email *, país, Telefone), o botão **"Concluir"** permanece **desabilitado**. Não há indicação clara de qual condição falta (ex.: país obrigatório). O usuário fica impedido de concluir a inscrição. Habilitar o botão quando os campos obrigatórios estiverem válidos ou exibir mensagem/indicação do que falta.

**Passos para reproduzir:**
1. Acessar https://qualidade.apprbs.com.br/site
2. Rolar até "NÃO FIQUE DE FORA!" / "Assine nossa Newsletter"
3. Preencher Nome e Email (obrigatórios) e, se aplicável, Telefone
4. Observar o estado do botão "Concluir"
5. (Opcional) Selecionar um país e verificar se o botão habilita

**Resultado esperado:** Botão "Concluir" habilitado quando os campos obrigatórios estiverem válidos, ou mensagem/indicação do que falta (ex.: "Selecione o país").

**Resultado obtido:** Botão permanece desabilitado; não há feedback sobre o que falta.

**Localização:** Formulário Newsletter, botão "Concluir" abaixo dos campos.

**Evidência:** Snapshot de acessibilidade (estado do botão). Ver `DesafiosEnt/ANALISE-SITE-QUALIDADE-APPRBS.md`.

---

## Bug 05 — Falta de espaço entre frases em depoimento

**Título:** Texto de depoimento com frases coladas ("ornare.Class" em vez de "ornare. Class").

| Campo            | Valor        |
|------------------|-------------|
| **Item**         | 05 - Texto de depoimento com frases coladas (ornare.Class) |
| **Tipo**         | Correção    |
| **Classificação**| Desejabilidade |
| **Prioridade**   | Baixa       |

**Descrição (para desenvolvedores):** Na seção "O QUE NOSSOS ALUNOS DIZEM?", um dos depoimentos exibe **"ornare.Class aptent"** sem espaço entre o ponto e a palavra "Class". O correto é **"ornare. Class aptent"**. Erro de formatação que prejudica a leitura.

**Passos para reproduzir:**
1. Acessar https://qualidade.apprbs.com.br/site
2. Rolar até a seção "O QUE NOSSOS ALUNOS DIZEM?"
3. Localizar o depoimento que contém "ornare.Class" (ex.: depoimento de Ícaro dos Santos / Pedagogia) e verificar o texto

**Resultado esperado:** Espaço após o ponto: "ornare. Class aptent".

**Resultado obtido:** Texto "ornare.Class aptent" sem espaço.

**Localização:** Bloco de depoimentos (ex.: card do depoimento de Pedagogia).

**Evidência:** Snapshot de acessibilidade (nome do elemento que contém o texto). Ver `DesafiosEnt/ANALISE-SITE-QUALIDADE-APPRBS.md`.

---

## Bug 06 — Link EVENTOS do menu e seção PRÓXIMOS EVENTOS

**Título:** Validar se o link "EVENTOS" do menu leva corretamente à seção PRÓXIMOS EVENTOS.

| Campo            | Valor        |
|------------------|-------------|
| **Item**         | 06 - Item "EVENTOS" no menu e seção correspondente |
| **Tipo**         | Melhoria    |
| **Classificação**| Usabilidade |
| **Prioridade**   | Média       |

**Descrição (para desenvolvedores):** O menu principal contém "EVENTOS" e a página possui a seção "PRÓXIMOS EVENTOS". Validar se o link "EVENTOS" do menu faz scroll ou navega corretamente para essa seção (âncora, foco, acessibilidade). Se não levar, o usuário espera um comportamento que não ocorre; se levar, garantir que o destino seja anunciado corretamente por leitores de tela.

**Passos para reproduzir:**
1. Acessar https://qualidade.apprbs.com.br/site
2. Clicar no item "EVENTOS" no menu principal
3. Verificar se a página rola até "PRÓXIMOS EVENTOS" e se o foco/destino é acessível
4. Repetir com leitor de tela ativo, se possível

**Resultado esperado:** Ao clicar em "EVENTOS", a página leva à seção "PRÓXIMOS EVENTOS" com comportamento acessível (âncora, foco, anúncio).

**Resultado obtido:** A validar no ambiente (comportamento observado ou não testado durante a análise por snapshot).

**Localização:** Menu principal (header) e seção "PRÓXIMOS EVENTOS" no corpo da página.

**Evidência:** Análise estrutural da página. Ver `DesafiosEnt/ANALISE-SITE-QUALIDADE-APPRBS.md`.

---

## Resumo (formulário Rubeus)

| # | Item (resumo) | Tipo | Classificação | Prioridade |
|---|----------------|------|----------------|------------|
| 01 | "Prencha" → "Preencha" no campo Nome (Newsletter) | Correção | Desejabilidade | Média |
| 02 | Múltiplos links sem texto acessível | Correção | Usabilidade | Alta |
| 03 | Label "Selected country" em PT-BR (Newsletter) | Melhoria | Desejabilidade | Média |
| 04 | Botão Concluir desabilitado sem feedback (Newsletter) | Correção | Utilidade | Alta |
| 05 | Espaço faltando em depoimento (ornare.Class) | Correção | Desejabilidade | Baixa |
| 06 | Link EVENTOS do menu e seção PRÓXIMOS EVENTOS | Melhoria | Usabilidade | Média |

---

*Relato gerado a partir de `DesafiosEnt/ANALISE-SITE-QUALIDADE-APPRBS.md`, combinando critérios de `DesafiosEnt/Rubeus.md` e estrutura da skill `reportar-bug` (`.cursor/skills/reportar-bug/SKILL.md`).*
