// O controller vai pegar os dados do service e devolver para o servidor
// A repositories é responsável por ler os dados, que podem ser de qualquer lugar

import { IncomingMessage, ServerResponse } from 'http';
import { serviceListEpisodes } from '../services/list-episodes-service';

export const getListEpisodes = async (
  req: IncomingMessage,
  res: ServerResponse
) => {
  const content = await serviceListEpisodes();
  // O response pede primeiro o cabeçalho, retornando algum status e o tipo de conteúdo como JSON
  // Depois o corpo, que é um JSON com os dados que você quer retornar
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(
    // Precisa converter em texto, senão o servidor não entende o que é
    // O JSON.stringify transforma o objeto em texto, e o JSON.parse transforma o texto em objeto
    JSON.stringify(content)
  );
};
