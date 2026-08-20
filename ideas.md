# Direção de Design — Currículo Pessoal

## Três abordagens exploradas

### 1. Dossiê Editorial Contemporâneo

**Muito breve:** Uma página de currículo que parece uma capa editorial cuidadosamente diagramada: contrastes tipográficos, campos de respiro e uma linha do tempo de leitura natural. A intenção é transmitir precisão, maturidade e clareza sem parecer um modelo genérico.

**Probabilidade:** 0.07

### 2. Cartão de Visitas Arquitetônico

**Muito breve:** Um layout modular com planos de cor, linhas de referência e um ritmo construtivo inspirado em projetos de arquitetura. A intenção é destacar organização e objetividade em uma composição firme e geométrica.

**Probabilidade:** 0.02

### 3. Caderno Profissional Tátil

**Muito breve:** Um currículo em tom de caderno de campo, com papel quente, pequenos marcadores e detalhes manuscritos discretos. A intenção é ser humano, acessível e memorável, sem sacrificar a leitura profissional.

**Probabilidade:** 0.09

## Abordagem escolhida: Dossiê Editorial Contemporâneo

### Movimento de design

O site seguirá a linguagem do **editorial suíço contemporâneo**, combinando hierarquia rigorosa, tipografia expressiva e espaço negativo funcional. Em vez de uma página centralizada e previsível, o conteúdo será organizado como um dossiê vertical, com uma coluna de metadados que ancora a leitura.

### Princípios centrais

1. **Legibilidade como prioridade:** cada bloco deve permitir uma leitura rápida e segura, inclusive em telas pequenas.
2. **Assimetria equilibrada:** uma margem lateral marcada e uma coluna informativa dão identidade à página sem interferir no fluxo.
3. **Informação com hierarquia:** nome, função, trajetória e habilidades recebem pesos visuais distintos, nunca concorrentes.
4. **Materialidade sutil:** superfícies de marfim, linhas finas e sombras quase imperceptíveis sugerem uma publicação de alto padrão.

### Filosofia de cor

O fundo será um **marfim levemente quente**, associando o currículo a uma peça editorial impressa e tornando a leitura longa menos fatigante do que em branco puro. Um **azul-petróleo profundo** será usado como assinatura de credibilidade e foco; um terracota queimado aparecerá apenas em detalhes de navegação e ação, para criar contraste humano e memorável.

### Paradigma de layout

A página será uma **faixa editorial vertical**: a apresentação ocupa uma abertura ampla e deslocada, enquanto as seções seguintes alternam entre uma coluna lateral de rótulos e uma área principal de conteúdo. Em dispositivos móveis, essa lógica vira uma única sequência, mantendo os rótulos visíveis como pequenas legendas acima do conteúdo correspondente.

### Elementos de assinatura

1. Uma barra lateral com dados de contato e o índice de seções em telas largas.
2. Uma linha do tempo profissional com marcadores numerados e conectores delicados.
3. A presença recorrente de uma pequena cápsula terracota para ações e destaques factuais.

### Filosofia de interação

As interações devem confirmar a organização do conteúdo. Links de navegação percorrem a página suavemente; cartões de experiência elevam-se de forma mínima ao foco; ações de contato indicam claramente o destino. Nenhum efeito deve competir com a informação profissional.

### Animação

As entradas iniciais ocorrerão somente por opacidade e pequeno deslocamento vertical, com escalonamento de 50 ms entre elementos e duração máxima de 320 ms. Os estados de foco e hover usarão transições de 160–220 ms com curva de saída firme. A página respeitará `prefers-reduced-motion`, desativando movimentos não essenciais.

### Sistema tipográfico

**DM Serif Display** será reservada ao nome e às grandes chamadas, criando presença editorial. **Manrope** será usada para corpo, datas, metadados e interfaces, preservando precisão em tamanhos pequenos. Os títulos usarão contraste de escala generoso, e textos auxiliares aparecerão em caixa alta com espaçamento de letras controlado.

### Essência de marca

**Um currículo digital claro e cuidadosamente editado para apresentar uma trajetória profissional com contexto, rigor e personalidade.**

Personalidade: **precisa, serena, distintiva**.

### Voz da marca

Os títulos devem ser diretos, informativos e seguros. CTAs e microcopys devem indicar uma ação concreta, sem fórmulas vagas.

> “Trajetória profissional, organizada para leitura rápida.”

> “Vamos conversar sobre o próximo desafio.”

### Logotipo e marca

A marca será um monograma geométrico composto pelas iniciais do profissional, dentro de uma moldura vertical aberta que remete a uma lombada editorial. O símbolo aparece sem texto no topo e como favicon, preservando escala e contraste.

### Cor de assinatura

**Azul-petróleo editorial — `#123C4A`**.

## Style Decisions

- O hero terá o **nome do profissional em escala editorial dominante**, acompanhado da função/território de atuação como informação de apoio. Como o documento de origem não contém o nome ou contatos, o projeto usa marcadores explícitos para serem substituídos antes da publicação.
- O monograma geométrico sem texto atua como assinatura visual; “Dossiê profissional” permanece como metadado secundário de publicação.
- Uma faixa de metadados laterais ancora o dossiê com foco profissional, área de atuação, contato e um índice de seção, substituindo a dependência de uma navegação convencional.
- O terracota queimado é reservado para ações, marcadores numerados e fatos memoráveis. Na imagem de abertura, regras, marcadores e uma grade cartográfica abstrata reforçam visualmente cidade, mobilidade e planejamento.
