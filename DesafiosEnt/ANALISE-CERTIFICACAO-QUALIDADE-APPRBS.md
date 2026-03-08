# Análise de Qualidade — Página Certificação (Rubeus)

**URL:** https://qualidade.apprbs.com.br/certificacao  
**Data da análise:** 2025-03-03  
**Método:** Leitura da documentação em `DesafiosEnt/Rubeus.md` e exploração da página via browser MCP (snapshot de acessibilidade e interação com o formulário).

---

Os itens abaixo seguem o **formato e a classificação** definidos no processo seletivo (Tipo, Classificação quando for Melhoria, Prioridade). Use-os no campo do formulário conforme as instruções do teste.

---

## Item 01 — Ortografia no placeholder do campo Nome

| Campo           | Valor        |
|-----------------|-------------|
| **Item**        | 01 - Ortografia incorreta no placeholder do campo Nome |
| **Tipo**        | Correção    |
| **Classificação** | Desejabilidade |
| **Prioridade**  | Média        |

**Descrição:** No formulário "Inscreva-se agora!", o primeiro campo (Nome) exibe o placeholder/label **"Prencha este campo"**. O correto é **"Preencha este campo"** (com "e"). O erro aparece na árvore de acessibilidade e pode ser lido por leitores de tela, prejudicando a imagem de qualidade e acessibilidade.

**Localização:** Formulário principal da página de certificação, primeiro campo de texto antes do seletor de país.

---

## Item 02 — Texto de ajuda incorreto no campo Profissão

| Campo           | Valor        |
|-----------------|-------------|
| **Item**        | 02 - Texto de ajuda do campo Profissão com conteúdo trocado |
| **Tipo**        | Correção    |
| **Classificação** | Usabilidade |
| **Prioridade**  | Alta        |

**Descrição:** O campo **Profissão** (na seção "Queremos saber mais sobre você") exibe o texto de ajuda **"Indique aqui a sua data de nascimento"**, que é o mesmo do campo "Data de nascimento". O texto de ajuda da Profissão deveria orientar sobre a profissão (ex.: "Indique aqui a sua profissão"). Isso confunde o usuário e dificulta o preenchimento correto.

**Localização:** Bloco de campos adicionais (Ano de formação, Data de nascimento, Profissão).

---

## Item 03 — Ortografia no link "Saiba mais"

| Campo           | Valor        |
|-----------------|-------------|
| **Item**        | 03 - Ortografia no link "Saiba mais" (Salba mais) |
| **Tipo**        | Correção    |
| **Classificação** | Desejabilidade |
| **Prioridade**  | Média        |

**Descrição:** Em uma das seções da página (área "Outros Cursos" / cards de curso), o link está exibido como **"Salba mais"** em vez de **"Saiba mais"**. Erro de grafia que prejudica a credibilidade e a leitura por tecnologias assistivas.

**Localização:** Seção de cursos, em um dos cards com link "Saiba mais" (terceira ocorrência identificada no snapshot como "Salba mais").

---

## Item 04 — Label do seletor de país em inglês

| Campo           | Valor        |
|-----------------|-------------|
| **Item**        | 04 - Seletor de país com label em inglês em página em português |
| **Tipo**        | Melhoria    |
| **Classificação** | Desejabilidade |
| **Prioridade**  | Média        |

**Descrição:** O combobox de seleção de país (DDI) possui o nome acessível **"Selected country"** (em inglês). O restante da página está em português. Para consistência e acessibilidade em PT-BR, o label deveria ser algo como "País" ou "Selecione o país".

**Localização:** Formulário "Inscreva-se agora!", entre o campo Nome e o campo Telefone.

---

## Item 05 — Links sem texto acessível

| Campo           | Valor        |
|-----------------|-------------|
| **Item**        | 05 - Links sem nome/texto acessível (acessibilidade) |
| **Tipo**        | Correção    |
| **Classificação** | Usabilidade |
| **Prioridade**  | Alta        |

**Descrição:** Existem **quatro links** na página (refs e8, e9, e10, e11 na árvore de acessibilidade) **sem nome** (sem texto visível ou atributo aria-label). Leitores de tela anunciam apenas "link", sem indicar destino ou ação. Isso impede ou dificulta o uso por quem depende de acessibilidade. Recomenda-se adicionar texto visível ou aria-label descritivo a cada link.

**Localização:** Distribuídos na página; identificar no DOM os elementos correspondentes (ex.: ícones ou imagens clicáveis sem texto alternativo).

---

## Item 06 — Botão "Avançar" permanece desabilitado

| Campo           | Valor        |
|-----------------|-------------|
| **Item**        | 06 - Botão "Avançar" desabilitado mesmo com campos obrigatórios preenchidos |
| **Tipo**        | Correção    |
| **Classificação** | Utilidade   |
| **Prioridade**  | Alta        |

**Descrição:** Após preencher os campos **Nome**, **Telefone** e **E-mail** (marcado como obrigatório) do formulário "Inscreva-se agora!", o botão **"Avançar"** permanece **desabilitado**. Não ficou claro para o usuário qual condição adicional é necessária (ex.: seleção do país). Se a intenção for exigir o país, falta indicação na interface; se não for obrigatório, o botão deveria habilitar com nome, telefone e e-mail. Caso contrário, o usuário não consegue prosseguir no fluxo de certificação.

**Localização:** Formulário principal, botão "Avançar" abaixo do campo de e-mail.

---

## Item 07 — Falta de separação entre label e texto de ajuda

| Campo           | Valor        |
|-----------------|-------------|
| **Item**        | 07 - Labels e textos de ajuda concatenados sem separação |
| **Tipo**        | Melhoria    |
| **Classificação** | Usabilidade |
| **Prioridade**  | Baixa       |

**Descrição:** Em alguns campos, o nome acessível concatena label e texto de ajuda em uma única string (ex.: "Ano de formacaohelpIndique aqui o ano que você formou", "Data de nascimentohelpIndique aqui a sua data de nascimento"). Falta separação visual ou de leitura (espaço, pontuação ou estrutura semântica) entre o nome do campo e o help, o que pode atrapalhar leitores de tela e usuários. Recomenda-se usar `aria-describedby` para o help ou inserir espaço/ponto entre label e descrição.

**Localização:** Campos da seção "Queremos saber mais sobre você".

---

## Resumo para o formulário do processo

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

*Documento gerado com base na documentação `DesafiosEnt/Rubeus.md` e na exploração da página https://qualidade.apprbs.com.br/certificacao via browser MCP.*
