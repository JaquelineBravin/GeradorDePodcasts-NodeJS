import { IStatusPodcast } from '../model/status-podcast-model';
import { repositoryPodcast } from '../repositories/podcasts-repository';
import { StatusCode } from '../utils/status-code';

// Recebe a categoria de um podcast como parametro e chama a função repositoryPodcast para obter os dados.
export const serviceFilterCategory = async (category: string | undefined) => {
  //define a interface de retorno
  let responseFormat: IStatusPodcast = {
    statusCode: 0,
    body: [],
  };

  // busca os dados
  const queryString = category?.split('?c=')[1] || '';
  const data = await repositoryPodcast(queryString);

  // Verifica se tem conteudo
  if (data.length !== 0) {
    responseFormat.statusCode = StatusCode.OK;
  } else {
    responseFormat.statusCode = StatusCode.NO_CONTENT;
  }
  responseFormat.body = data;

  return responseFormat;
};
