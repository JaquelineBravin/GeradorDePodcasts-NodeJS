// O controller vai pegar os dados do service e devolver para o servidor

import { IncomingMessage, ServerResponse } from 'http';
import { serviceListEpisodes } from '../services/list-episodes-service';
import { serviceFilterEpisodes } from '../services/filter-episodes-services';
import { StatusCode } from '../utils/status-code';
import { ContentType } from '../utils/content-type';
import { serviceFilterCategory } from '../services/filter-category-service';

//trás toda a lista
export const getListEpisodes = async (
  req: IncomingMessage,
  res: ServerResponse
) => {
  const content = await serviceListEpisodes();
  // O response pede primeiro o cabeçalho, retornando algum status e o tipo de conteúdo como JSON
  // Depois o corpo, que é um JSON com os dados que você quer retornar
  res.writeHead(content.statusCode, { 'Content-Type': ContentType.JSON });
  res.end(
    // Precisa converter em texto, senão o servidor não entende o que é
    JSON.stringify(content.body)
  );
};

// filtra a lista por nome do podcast
export const getFilterEpisodes = async (
  req: IncomingMessage,
  res: ServerResponse
) => {
  const content = await serviceFilterEpisodes(req.url);
  res.writeHead(content.statusCode, { 'Content-Type': ContentType.JSON });
  res.end(JSON.stringify(content.body));
};

// filtra por categoria
export const getFilterCategory = async (
  req: IncomingMessage,
  res: ServerResponse
) => {
  const content = await serviceFilterCategory(req.url);
  res.writeHead(content.statusCode, { 'Content-Type': ContentType.JSON });
  res.end(JSON.stringify(content.body));
};
