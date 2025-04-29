import { IStatusPodcast } from '../model/status-podcast-model';
import { repositoryPodcast } from '../repositories/podcasts-repository';
import { StatusCode } from '../utils/status-code';

export const serviceFilterEpisodes = async (
  podcastName: string | undefined
): Promise<IStatusPodcast> => {
  //define a interface de retorno
  let responseFormat: IStatusPodcast = {
    statusCode: 0,
    body: [],
  };

  // busca os dados
  const queryString = podcastName?.split('?p=')[1] || '';
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
