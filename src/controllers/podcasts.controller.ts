import { IncomingMessage, ServerResponse } from 'http';

export const getListEpisodes = async (
  req: IncomingMessage,
  res: ServerResponse
) => {
  // O response pede primeiro o cabeçalho, retornando algum status e o tipo de conteúdo como JSON
  // Depois o corpo, que é um JSON com os dados que você quer retornar
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(
    // Precisa converter em texto, senão o servidor não entende o que é
    // O JSON.stringify transforma o objeto em texto, e o JSON.parse transforma o texto em objeto
    JSON.stringify([
      {
        podcastName: 'AssombradO.com.br',
        episode: 'SÓ RELATOS DE SETEALÉM (PARTE 5) - COLETÂNEA TEMÁTICA',
        videoId: '9Iug4KC4hK8',
        cover: 'https://i.ytimg.com/vi/9Iug4KC4hK8/hqdefault.jpg',
        link: 'https://www.youtube.com/watch?v=9Iug4KC4hK8&t=1712s',
        category: ['SETEALÉM'],
      },
      {
        podcastName: 'AssombradO.com.br',
        episode:
          'SÓ RELATOS SOBRE SÍTIOS E FAZENDAS - PARTE 02 - COLETÂNEA TEMÁTICA',
        videoId: 'cAFIPDKWEkA',
        cover: 'https://i.ytimg.com/vi/cAFIPDKWEkA/hqdefault.jpg',
        link: 'https://www.youtube.com/watch?v=cAFIPDKWEkA&t=170s',
        category: ['FAZENDA'],
      },
    ])
  );
};
