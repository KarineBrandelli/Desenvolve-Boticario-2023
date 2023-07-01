## Instalação

Este projeto já conta com o código necessário para subir a API em um servidor local:

```
├── package.json
├── package-lock.json
├── README.md
├── server.js
├── src
│   ├── app.js
│   ├── controllers
│   │   └── livrosController.js
│   │   └── autoresController.js
│   │   └── editorasController.js
│   ├── db
│   │   ├── dbconfig.js
│   │   └── livraria.sqlite
│   ├── models
│   │   └── livro.js
│   │   └── autor.js
│   │   └── editora.js
│   └── routes
│       ├── autoresRoutes.js
│       ├── editorasRoutes.js
│       ├── index.js
│       └── livrosRoutes.js
```

### Instalação do projeto

- Baixe o repositório do projeto, navegue via terminal até a pasta e instale as dependências necessárias com `npm install`.
- Confira se a pasta `node_modules` foi criada na raiz do projeto.

### Acesso ao banco de dados

Você pode utilizar o CLI do SQLite para fazer consultas ao banco e conferir se os dados iniciais estão retornando.

- Utilize o cli do SQLite para acessar o arquivo `src/db/livraria.sqlite`:
  `sqlite3 ./src/db/livraria.sqlite`

- Digite `.tables` para exibir as tabelas já criadas no banco:

  ```
  sqlite> .tables
  autores   editoras  livros
  ```

- Digite `SELECT * FROM autores;` para exibir o conteúdo da tabela `autores`:

  ```
  sqlite> SELECT * FROM autores;
  1|JRR Tolkien|sul-africano|2022-06-06 19:30:55
  2|Ursula LeGuin|estadunidense|2022-06-06 19:30:55
  3|Machado de Assis|brasileira|2022-06-06 19:30:55
  sqlite>
  ```

- Você pode testar os comandos `SELECT * FROM livros;` e `SELECT * FROM editoras;` para conferir os dados destas tabelas que já deixamos prontos para serem usados na API.

> Importante: Usaremos a API para consultar, criar, atualizar e excluir dados do banco. Não utilize o terminal do SQLite para fazer estas alterações direto nas tabelas.

## Como rodar a API

- No terminal, acesse a pasta raiz do projeto e insira o comando `npm run dev` para rodar o projeto em modo de desenvolvimento. Você deverá ver no terminal a seguinte mensagem:

  ```
  > api-js-local@1.0.0 dev
  > nodemon server.js

  [nodemon] 2.0.16
  [nodemon] to restart at any time, enter `rs`
  [nodemon] watching path(s): *.*
  [nodemon] watching extensions: js,mjs,json
  [nodemon] starting `node server.js`
  Servidor escutando em http://localhost:3000
  ```

- Os recursos da API poderão ser acessados a partir da _base URL_ `http://localhost:3000`.

  > Esta API está programada para ser acessada a partir de `http://localhost:3000`. Certifique-se de que não existem outros recursos ocupando a porta `3000` antes de subir o projeto.

### Endpoints

A API expõe os seguintes _endpoints_ a partir da _base URL_ `localhost:3000`:

`/livros`

- `GET /livros`
- `GET /livros/:id`
- `POST /livros`
- `PUT /livros/:id`
- `DELETE /livros/:id`

`/autores`

- `GET /autores`
- `GET /autores/:id`
- `GET /autores/:id/livros`
- `POST /autores`
- `PUT /autores/:id`
- `DELETE /autores/:id`

`/editoras`

- `GET /editoras`
- `GET /editoras/:id`
- `GET /editoras/:id/livros`
- `POST /editoras`
- `PUT /editoras/:id`
- `DELETE /editoras/:id`
