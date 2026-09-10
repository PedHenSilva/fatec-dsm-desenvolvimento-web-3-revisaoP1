# Revisão — Desenvolvimento Web III

Coletânea de exercícios em **Node.js**, desenvolvidos como revisão da disciplina **Desenvolvimento Web III** — FATEC Diadema, cobrindo os fundamentos trabalhados: manipulação de arquivos, JSON, CSV e criação de servidores HTTP nativos.

## 🚀 Tecnologias Utilizadas
> ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

## 📋 Exercícios

| # | Tema | Conceito principal |
|---|---|---|
| [Questão 1](#questão-1--leitura-de-configuração-json) | Leitura de configuração JSON | `fs.promises.readFile` + `JSON.parse` |
| [Questão 2](#questão-2--verificação-e-atualização-de-log) | Verificação e atualização de log | `readFile`, `appendFile`, `writeFile` + recuperação de erro |
| [Questão 3](#questão-3--portal-de-apis-acadêmicas) | Portal de APIs Acadêmicas | Servidor HTTP com rotas + `fetch` no client-side |
| [Questão 4](#questão-4--servidor-com-rotas-e-página-404) | Servidor com rotas e página 404 | Roteamento + página de erro via `stream` |
| [Questão 5](#questão-5--processamento-de-csv) | Processamento de CSV | Leitura de CSV + geração de relatório `.txt` |

---

### Questão 1 — Leitura de configuração JSON

Lê o arquivo `config.json` de forma assíncrona e exibe no terminal os dados de curso e campus carregados.

```bash
cd Questao1
node index.js
```

### Questão 2 — Verificação e atualização de log

Verifica se `log.txt` existe: se sim, imprime seu conteúdo e registra um novo acesso com timestamp; se não existir, recria o arquivo do zero.

```bash
cd Questao2
npm start
# ou: node script.js
```

### Questão 3 — Portal de APIs Acadêmicas

Servidor HTTP nativo com rotas, além de servir arquivos estáticos da pasta.

```bash
cd Questao3
node app.js
```
Acesse `http://localhost:3000/` e `http://localhost:3000/instituicao`.

### Questão 4 — Servidor com rotas e página 404

Servidor HTTP nativo com rotas nomeadas e uma página de erro 404 personalizada, servida quando a rota ou arquivo não existe.

```bash
cd Questao4
node app.js
```
Acesse `http://localhost:3000/`, `/fatec`, `/fecap`.

### Questão 5 — Processamento de CSV

Lê CSV, grava o conteúdo em um relatório e, em seguida, anexa uma linha de rodapé com a data/hora de geração do relatório.

```bash
cd Questao5
node script.js
```

---
## 📁 Estrutura do Repositório

```
fatec-dsm-desenvolvimento-web-3-revisaoP1/
├── Questao1/
│   ├── index.js
│   ├── config.json
│   └── package.json
├── Questao2/
│   ├── script.js
│   ├── log.txt
│   └── package.json
├── Questao3/
│   ├── app.js
│   └── public/
│       ├── index.html
│       ├── instituicao.html
│       ├── dados.json
│       └── script.js
├── Questao4/
│   ├── app.js
│   └── public/
│       ├── index.html
│       ├── fatec.html
│       ├── fecap.html
│       └── erro404.html
└── Questao5/
    ├── script.js
    ├── estudantes.csv
    ├── export_relatorio.txt
    └── package.json
```

## 🎓 Contexto Acadêmico

- **Disciplina:** Desenvolvimento Web III
- **Professor:** Vinicius Heltai Pacheco
- **Curso:** Desenvolvimento de Software Multiplataforma (DSM)
- **Instituição:** FATEC Diadema Luigi Papaiz
- **Autor:** Pedro Henrique Oliveira Silva
