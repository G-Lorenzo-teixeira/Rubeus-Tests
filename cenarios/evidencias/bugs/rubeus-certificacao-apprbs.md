# Bugs / Itens de qualidade — Certificação (Rubeus / APPRBS)

**Página:** https://qualidade.apprbs.com.br/certificacao  
**Referência:** Processo Rubeus (`DesafiosEnt/Rubeus.md`) + formato de report da skill `reportar-bug`.  
**Ambiente:** Navegador (análise via browser MCP). Data: 2025-03-03.

---

## Bug 01 — Ortografia no placeholder do campo Nome

**Título:** Placeholder "Prencha este campo" no campo Nome (ortografia incorreta).

| Campo            | Valor        |
|------------------|-------------|
| **Item**         | 01 - Ortografia incorreta no placeholder do campo Nome |
| **Tipo**         | Correção    |
| **Classificação**| Desejabilidade |
| **Prioridade**   | Média       |

**Descrição (para desenvolvedores):** No formulário "Inscreva-se agora!", o primeiro campo (Nome) exibe o placeholder/label **"Prencha este campo"**. O correto é **"Preencha este campo"** (com "e"). O erro aparece na árvore de acessibilidade e pode ser lido por leitores de tela.

**Passos para reproduzir:**
1. Acessar https://qualidade.apprbs.com.br/certificacao
2. Rolar até o formulário "Inscreva-se agora!"
3. Observar o placeholder do primeiro campo de texto (Nome) ou inspecionar o elemento/label acessível

**Resultado esperado:** Texto "Preencha este campo".

**Resultado obtido:** Texto "Prencha este campo" exibido (e exposto na acessibilidade).

**Localização:** Formulário principal, primeiro campo de texto antes do seletor de país.

**Evidência:** Análise via snapshot de acessibilidade (browser MCP). Ver `DesafiosEnt/ANALISE-CERTIFICACAO-QUALIDADE-APPRBS.md`.

---

## Bug 02 — Texto de ajuda incorreto no campo Profissão

**Título:** Campo Profissão exibe texto de ajuda do campo Data de nascimento.

| Campo            | Valor        |
|------------------|-------------|
| **Item**         | 02 - Texto de ajuda do campo Profissão com conteúdo trocado |
| **Tipo**         | Correção    |
| **Classificação**| Usabilidade |
| **Prioridade**   | Alta        |

**Descrição (para desenvolvedores):** O campo **Profissão** (seção "Queremos saber mais sobre você") exibe o texto de ajuda **"Indique aqui a sua data de nascimento"**, idêntico ao do campo "Data de nascimento". O help da Profissão deve orientar sobre profissão (ex.: "Indique aqui a sua profissão").

**Passos para reproduzir:**
1. Acessar https://qualidade.apprbs.com.br/certificacao
2. Rolar até a seção "Queremos saber mais sobre você"
3. Verificar o texto de ajuda (tooltip/label) do campo "Profissão"

**Resultado esperado:** Texto de ajuda referente à profissão (ex.: "Indique aqui a sua profissão").

**Resultado obtido:** Texto "Indique aqui a sua data de nascimento" no campo Profissão, confundindo o usuário.

**Localização:** Bloco de campos adicionais (Ano de formação, Data de nascimento, Profissão).

**Evidência:** Snapshot de acessibilidade (nome acessível concatenado). Ver análise em `DesafiosEnt/ANALISE-CERTIFICACAO-QUALIDADE-APPRBS.md`.

---

## Bug 03 — Ortografia no link "Saiba mais"

**Título:** Link exibido como "Salba mais" em vez de "Saiba mais".

| Campo            | Valor        |
|------------------|-------------|
| **Item**         | 03 - Ortografia no link "Saiba mais" (Salba mais) |
| **Tipo**         | Correção    |
| **Classificação**| Desejabilidade |
| **Prioridade**   | Média       |

**Descrição (para desenvolvedores):** Em uma das seções (área "Outros Cursos" / cards de curso), um dos links está como **"Salba mais"** em vez de **"Saiba mais"**. Erro de grafia que prejudica credibilidade e leitores de tela.

**Passos para reproduzir:**
1. Acessar https://qualidade.apprbs.com.br/certificacao
2. Rolar até a seção de cursos / "Outros Cursos"
3. Localizar o link "Saiba mais" no terceiro card (ou inspecionar por texto "Salba mais")

**Resultado esperado:** Texto "Saiba mais" em todos os links equivalentes.

**Resultado obtido:** Uma ocorrência com "Salba mais".

**Localização:** Seção de cursos, em um dos cards com link "Saiba mais".

**Evidência:** Snapshot de acessibilidade. Ver `DesafiosEnt/ANALISE-CERTIFICACAO-QUALIDADE-APPRBS.md`.

---

## Bug 04 — Label do seletor de país em inglês

**Título:** Combobox de país com nome acessível em inglês ("Selected country") em página em PT-BR.

| Campo            | Valor        |
|------------------|-------------|
| **Item**         | 04 - Seletor de país com label em inglês em página em português |
| **Tipo**         | Melhoria    |
| **Classificação**| Desejabilidade |
| **Prioridade**   | Média       |

**Descrição (para desenvolvedores):** O combobox de seleção de país (DDI) possui o nome acessível **"Selected country"** (inglês). O restante da página está em português. Para consistência e acessibilidade em PT-BR, o label deve ser "País" ou "Selecione o país".

**Passos para reproduzir:**
1. Acessar https://qualidade.apprbs.com.br/certificacao
2. No formulário "Inscreva-se agora!", localizar o seletor de país (entre Nome e Telefone)
3. Inspecionar o elemento ou usar leitor de tela e verificar o nome/label do combobox

**Resultado esperado:** Label em português (ex.: "País" ou "Selecione o país").

**Resultado obtido:** Nome acessível "Selected country".

**Localização:** Formulário "Inscreva-se agora!", entre o campo Nome e o campo Telefone.

**Evidência:** Snapshot de acessibilidade (combobox name). Ver análise em `DesafiosEnt/ANALISE-CERTIFICACAO-QUALIDADE-APPRBS.md`.

---

## Bug 05 — Links sem texto acessível

**Título:** Quatro links na página sem nome/texto acessível para leitores de tela.

| Campo            | Valor        |
|------------------|-------------|
| **Item**         | 05 - Links sem nome/texto acessível (acessibilidade) |
| **Tipo**         | Correção    |
| **Classificação**| Usabilidade |
| **Prioridade**   | Alta        |

**Descrição (para desenvolvedores):** Existem **quatro links** na página sem nome (sem texto visível nem atributo aria-label). Na árvore de acessibilidade aparecem como "link" sem descrição. Leitores de tela anunciam apenas "link", sem destino ou ação. Incluir texto visível ou `aria-label` descritivo em cada link.

**Passos para reproduzir:**
1. Acessar https://qualidade.apprbs.com.br/certificacao
2. Navegar pela página com teclado ou leitor de tela (ou inspecionar todos os elementos `<a>`)
3. Identificar links que não possuem texto ou aria-label

**Resultado esperado:** Todo link possui nome acessível (texto ou aria-label) que descreva destino ou ação.

**Resultado obtido:** Quatro links sem nome (refs e8, e9, e10, e11 no snapshot — possivelmente ícones ou imagens clicáveis sem alternativa).

**Localização:** Distribuídos na página; verificar no DOM elementos `<a>` sem conteúdo textual e sem aria-label.

**Evidência:** Snapshot de acessibilidade. Ver `DesafiosEnt/ANALISE-CERTIFICACAO-QUALIDADE-APPRBS.md`.

---

## Bug 06 — Botão "Avançar" permanece desabilitado

**Título:** Botão "Avançar" desabilitado mesmo com Nome, Telefone e E-mail preenchidos.

| Campo            | Valor        |
|------------------|-------------|
| **Item**         | 06 - Botão "Avançar" desabilitado mesmo com campos obrigatórios preenchidos |
| **Tipo**         | Correção    |
| **Classificação**| Utilidade   |
| **Prioridade**   | Alta        |

**Descrição (para desenvolvedores):** Após preencher Nome, Telefone e E-mail (obrigatório) do formulário "Inscreva-se agora!", o botão **"Avançar"** permanece **desabilitado**. Não há indicação clara do que falta (ex.: país obrigatório). Se o país for obrigatório, deve haver indicação na interface; caso contrário, o botão deve habilitar com os três campos preenchidos. O usuário fica impedido de prosseguir no fluxo de certificação.

**Passos para reproduzir:**
1. Acessar https://qualidade.apprbs.com.br/certificacao
2. No formulário "Inscreva-se agora!", preencher: Nome (ex.: "Teste"), Telefone (ex.: "11961234567"), E-mail (ex.: "teste@exemplo.com")
3. Observar o estado do botão "Avançar"
4. (Opcional) Selecionar um país no combobox e verificar se o botão habilita

**Resultado esperado:** Botão "Avançar" habilitado quando os campos obrigatórios estiverem válidos, ou mensagem/indicação do que falta (ex.: "Selecione o país").

**Resultado obtido:** Botão permanece desabilitado após preencher Nome, Telefone e E-mail; não há feedback sobre o que falta.

**Localização:** Formulário principal, botão "Avançar" abaixo do campo de e-mail.

**Evidência:** Interação via browser MCP (preenchimento dos campos e verificação do estado do botão). Ver `DesafiosEnt/ANALISE-CERTIFICACAO-QUALIDADE-APPRBS.md`.

---

## Bug 07 — Labels e textos de ajuda concatenados sem separação

**Título:** Nome acessível de campos concatena label e help sem separação (ex.: "Ano de formacaohelpIndique aqui...").

| Campo            | Valor        |
|------------------|-------------|
| **Item**         | 07 - Labels e textos de ajuda concatenados sem separação |
| **Tipo**         | Melhoria    |
| **Classificação**| Usabilidade |
| **Prioridade**   | Baixa       |

**Descrição (para desenvolvedores):** Em alguns campos, o nome acessível concatena label e texto de ajuda em uma única string sem espaço/pontuação (ex.: "Ano de formacaohelpIndique aqui o ano que você formou", "Data de nascimentohelpIndique aqui a sua data de nascimento"). Isso atrapalha leitores de tela e usuários. Usar `aria-describedby` para o help ou inserir separação (espaço/ponto) entre label e descrição.

**Passos para reproduzir:**
1. Acessar https://qualidade.apprbs.com.br/certificacao
2. Rolar até "Queremos saber mais sobre você"
3. Inspecionar os nomes acessíveis dos campos (Ano de formação, Data de nascimento, Profissão) ou usar leitor de tela

**Resultado esperado:** Label e texto de ajuda separados (por estrutura semântica ou por espaço/pontuação na leitura).

**Resultado obtido:** Strings concatenadas como "Ano de formacaohelpIndique aqui o ano que você formou".

**Localização:** Campos da seção "Queremos saber mais sobre você".

**Evidência:** Snapshot de acessibilidade. Ver `DesafiosEnt/ANALISE-CERTIFICACAO-QUALIDADE-APPRBS.md`.

---

## Resumo (formulário Rubeus)

| # | Item (resumo) | Tipo | Classificação | Prioridade |
|---|----------------|------|----------------|------------|
| 01 | "Prencha" → "Preencha" no campo Nome | Correção | Desejabilidade | Média |
| 02 | Texto de ajuda do campo Profissão trocado | Correção | Usabilidade | Alta |
| 03 | "Salba mais" → "Saiba mais" | Correção | Desejabilidade | Média |
| 04 | Label "Selected country" em PT-BR | Melhoria | Desejabilidade | Média |
| 05 | Links sem texto acessível | Correção | Usabilidade | Alta |
| 06 | Botão Avançar desabilitado sem feedback | Correção | Utilidade | Alta |
| 07 | Label e help concatenados | Melhoria | Usabilidade | Baixa |

---

*Relato gerado a partir de `DesafiosEnt/ANALISE-CERTIFICACAO-QUALIDADE-APPRBS.md`, combinando critérios de `DesafiosEnt/Rubeus.md` e estrutura da skill `reportar-bug` (`.cursor/skills/reportar-bug/SKILL.md`).*
