# Análise de Qualidade — Página Site (Rubeus)

**URL:** https://qualidade.apprbs.com.br/site  
**Data da análise:** 2025-03-03  
**Método:** Leitura da documentação em `DesafiosEnt/Rubeus.md` e exploração da página via browser MCP (snapshot de acessibilidade).

---

Os itens abaixo seguem o **formato e a classificação** definidos no processo seletivo (Tipo, Classificação, Prioridade). Use-os no campo do formulário conforme as instruções do teste.

---

## Item 01 — Ortografia no placeholder do campo Nome (Newsletter)

| Campo           | Valor        |
|-----------------|-------------|
| **Item**        | 01 - Ortografia incorreta no placeholder do campo Nome (formulário Newsletter) |
| **Tipo**        | Correção    |
| **Classificação** | Desejabilidade |
| **Prioridade**  | Média        |

**Descrição:** No formulário da seção "NÃO FIQUE DE FORA!" (Newsletter), o campo **Nome** exibe o placeholder/label **"Prencha este campo"**. O correto é **"Preencha este campo"** (com "e"). O mesmo erro identificado na página Certificação; prejudica acessibilidade e imagem de qualidade.

**Localização:** Formulário "Assine nossa Newsletter", primeiro campo (Nome *), antes do campo Email e do seletor de país.

---

## Item 02 — Links sem texto acessível

| Campo           | Valor        |
|-----------------|-------------|
| **Item**        | 02 - Múltiplos links sem nome/texto acessível |
| **Tipo**        | Correção    |
| **Classificação** | Usabilidade |
| **Prioridade**  | Alta        |

**Descrição:** Existem **nove links** na página sem nome acessível (refs e2 a e6 no topo e e27 a e30 em outra área). Leitores de tela anunciam apenas "link", sem indicar destino ou ação. Recomenda-se adicionar texto visível ou `aria-label` descritivo em cada link (ex.: ícones de menu, redes sociais ou navegação).

**Localização:** Distribuídos no cabeçalho e em outra seção da página; inspecionar elementos `<a>` sem conteúdo textual e sem aria-label.

---

## Item 03 — Label do seletor de país em inglês (Newsletter)

| Campo           | Valor        |
|-----------------|-------------|
| **Item**        | 03 - Seletor de país (Newsletter) com label em inglês |
| **Tipo**        | Melhoria    |
| **Classificação** | Desejabilidade |
| **Prioridade**  | Média        |

**Descrição:** O combobox de seleção de país (DDI) no formulário da Newsletter possui o nome acessível **"Selected country"** (inglês). A página está em português. Para consistência e acessibilidade em PT-BR, o label deve ser "País" ou "Selecione o país".

**Localização:** Formulário "Assine nossa Newsletter", entre o campo Nome e o campo Telefone.

---

## Item 04 — Botão "Concluir" permanece desabilitado (Newsletter)

| Campo           | Valor        |
|-----------------|-------------|
| **Item**        | 04 - Botão "Concluir" desabilitado sem indicação do que falta |
| **Tipo**        | Correção    |
| **Classificação** | Utilidade   |
| **Prioridade**  | Alta        |

**Descrição:** No formulário da Newsletter (Nome *, Email *, país, Telefone), o botão **"Concluir"** permanece **desabilitado**. Não há indicação clara de qual condição falta (ex.: país obrigatório ou validação). O usuário pode não conseguir concluir a inscrição na newsletter. Recomenda-se habilitar o botão quando os campos obrigatórios estiverem válidos ou exibir mensagem/indicação do que falta.

**Localização:** Formulário "NÃO FIQUE DE FORA!" / "Assine nossa Newsletter", botão "Concluir" abaixo dos campos.

---

## Item 05 — Falta de espaço entre frases em depoimento

| Campo           | Valor        |
|-----------------|-------------|
| **Item**        | 05 - Texto de depoimento com frases coladas (ornare.Class) |
| **Tipo**        | Correção    |
| **Classificação** | Desejabilidade |
| **Prioridade**  | Baixa       |

**Descrição:** Na seção "O QUE NOSSOS ALUNOS DIZEM?", um dos depoimentos exibe **"ornare.Class aptent"** sem espaço entre o ponto final de uma frase e o início da próxima ("ornare." + "Class"). O correto é **"ornare. Class aptent"**. Pequeno erro de formatação que prejudica a leitura e a credibilidade do conteúdo.

**Localização:** Bloco de depoimentos (ex.: depoimento de "Ícaro dos Santos" / Pedagogia).

---

## Item 06 — Redundância ou inconsistência no menu de navegação

| Campo           | Valor        |
|-----------------|-------------|
| **Item**        | 06 - Item "EVENTOS" no menu pode não scrollar ou destacar seção correspondente |
| **Tipo**        | Melhoria    |
| **Classificação** | Usabilidade |
| **Prioridade**  | Média        |

**Descrição:** O menu principal contém os itens INSTITUCIONAL, BIBLIOTECA, NOSSOS DIFERENCIAIS, EVENTOS, DEPOIMENTOS. A página possui a seção "PRÓXIMOS EVENTOS". Recomenda-se validar se o link "EVENTOS" do menu leva corretamente à seção de eventos (âncora ou scroll). Se não levar, o usuário espera um comportamento que não ocorre; se levar, verificar acessibilidade do destino (foco, anúncio para leitor de tela).

**Localização:** Menu principal (header) e seção "PRÓXIMOS EVENTOS" na página.

---

## Resumo para o formulário do processo

| # | Item (resumo) | Tipo | Classificação | Prioridade |
|---|----------------|------|----------------|------------|
| 01 | "Prencha" → "Preencha" no campo Nome (Newsletter) | Correção | Desejabilidade | Média |
| 02 | Múltiplos links sem texto acessível | Correção | Usabilidade | Alta |
| 03 | Label "Selected country" em PT-BR (Newsletter) | Melhoria | Desejabilidade | Média |
| 04 | Botão Concluir desabilitado sem feedback (Newsletter) | Correção | Utilidade | Alta |
| 05 | Espaço faltando em depoimento (ornare.Class) | Correção | Desejabilidade | Baixa |
| 06 | Link EVENTOS do menu e seção PRÓXIMOS EVENTOS | Melhoria | Usabilidade | Média |

---

*Documento gerado com base em `DesafiosEnt/Rubeus.md` e na exploração da página https://qualidade.apprbs.com.br/site via browser MCP.*
