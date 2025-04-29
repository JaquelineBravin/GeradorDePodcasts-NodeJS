# Podcast Manager

# ENGLISH

## Description

NodeAPI with TypeScript where you can save different podcast episodes.

### Features

- List podcasts.
- Filter podcast by name.
- Filter podcast by category.

## How am I implementing it

**List**

- Endpoint: `GET /list`
- Return a json list with all podcast episodes.

```js
[
{
  podcastName: 'AssombradO.com.br';
  episode: 'SÓ RELATOS DE SETEALÉM (PARTE 5) - COLETÂNEA TEMÁTICA';
  videoId: '9Iug4KC4hK8';
  link: 'https://www.youtube.com/watch?v=9Iug4KC4hK8&t=1712s';
  category: ['SETEALÉM'];
},
{
  podcastName: 'AssombradO.com.br';
  episode: 'SÓ RELATOS SOBRE SÍTIOS E FAZENDAS - PARTE 02 - COLETÂNEA TEMÁTICA';
    videoId: 'cAFIPDKWEkA';
  link: 'https://www.youtube.com/watch?v=cAFIPDKWEkA&t=170s';
  category: ['FAZENDA'];
},
]
```

**Filter**

- Endpoint: `GET /episode?p={nome}`
- Filter podcast by name and return a json list.

- Endpoint: `GET /category?c={categoria}`
- Filter podcast by category and return a json list.

### Methods

- GET: Return a list based on the parameter sent.

## Used technologies

- NodeJS: JavaScript runtime environment.
- Typescript: Programming language.
- Tsup: TS project construction/packaging.
- Tsx: TypeScript compiler.

## How to use

1. Clone this repo
2. Install all dependencies through `npm install`.
3. Start server using `start:dev`.
4. Access endpoints to list or filter podcasts.

# ------------------------------------

# PORTUGUÊS

## Descrição

Uma aplicação Node com TypeScript aonde possa centralizar diferentes episódios de podcasts.

### Funcionalidades / Features

- Listar os podcasts.
- Filtrar episódios por nome de podcast.
- Filtrar episódios por categoria do podcast.

## Como vou implementar

**List**

- Endpoint: `GET /list`
- Retornar uma lista json com todos os episódios de podcasts. Exemplo:

```js
[
{
  podcastName: 'AssombradO.com.br';
  episode: 'SÓ RELATOS DE SETEALÉM (PARTE 5) - COLETÂNEA TEMÁTICA';
  videoId: '9Iug4KC4hK8';
  link: 'https://www.youtube.com/watch?v=9Iug4KC4hK8&t=1712s';
  category: ['SETEALÉM'];
},
{
  podcastName: 'AssombradO.com.br';
  episode: 'SÓ RELATOS SOBRE SÍTIOS E FAZENDAS - PARTE 02 - COLETÂNEA TEMÁTICA';
    videoId: 'cAFIPDKWEkA';
  link: 'https://www.youtube.com/watch?v=cAFIPDKWEkA&t=170s';
  category: ['FAZENDA'];
},
]
```

**Filter**

- Endpoint: `GET /episode?p={nome}`
- Filtrar episódios por nome do podcast e retornar a lista em json.

- Endpoint: `GET /category?c={categoria}`
- Filtrar episódios por categoria do podcast e retornar a lista em json.

### Métodos

- GET: Retorna lista de episódios baseado em um parametro enviado pelo cliente do nome do podcast.

## Tecnologias utilizadas

- NodeJS: Ambiente de execução JavaScript.
- Typescript: Linguagem de programação utilizada.
- Tsup: Contrução/empacotamento de projetos TS.
- Tsx: Compilador de TypeScript.

## Como utilizar

1. Clone este repositório
2. Instale as dependências através do comando `npm install`.
3. Inicie o servidor usando `start:dev`.
4. Acesse os endpoints para listar ou filtrar os episódios dos podcasts.
