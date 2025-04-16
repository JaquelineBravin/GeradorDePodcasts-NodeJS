# Podcast Manager

## Descrição

Uma aplicação aonde possa centralizar diferentes episódios de podcasts separados por categoria.

### Funcionalidades / Features

- Listar os podcasts em categorias.
  - [...]
- Filtrar episódios por nome de podcast.

## Como vou implementar

**List**

- Endpoint: `GET /list`
- Retornar uma lista json com episódios de podcasts organizados por categoria. Exemplo:

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

- Endpoint: `GET /episode?podcastName={nome}`
- Filtrar episódios por nome do podcasr e retornar a lista em json.

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
