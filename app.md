# Podcast Manager

### Descrição

Um app aonde possa centralizar diferentes episódios de podcasts separados por categoria.

### Domínio

Poscasts feitos em vídeo

### Funcionalidades / Features

- Listar os episódios em categorias
  - [...]
- Filtrar episódios por nome de podcast

## Como

### Feature:

- Listar os episódios em categorias

### Como vou implementar:

Retornar em uma API REST (json) o nome do podcast, nome do episódio, imagem de capa e link.

```js
[
{
  podcastName: 'AssombradO.com.br';
  episode: 'SÓ RELATOS DE SETEALÉM (PARTE 5) - COLETÂNEA TEMÁTICA';
  videoId: '9Iug4KC4hK8';
  cover: 'https://i.ytimg.com/vi/9Iug4KC4hK8/hqdefault.jpg';
  link: 'https://www.youtube.com/watch?v=9Iug4KC4hK8&t=1712s';
  category: ['SETEALÉM'];
},
{
  podcastName: 'AssombradO.com.br';
  episode: 'SÓ RELATOS SOBRE SÍTIOS E FAZENDAS - PARTE 02 - COLETÂNEA TEMÁTICA';
    videoId: 'cAFIPDKWEkA';
  cover: 'https://i.ytimg.com/vi/cAFIPDKWEkA/hqdefault.jpg';
  link: 'https://www.youtube.com/watch?v=cAFIPDKWEkA&t=170s';
  category: ['FAZENDA'];
},
]
```

### Métodos

- GET: Retorna lista de episódios baseado em um parametro enviado pelo cliente do nome do podcast

## Tecnologias utilizadas:

- NodeJS
- Typescript
- Postman
