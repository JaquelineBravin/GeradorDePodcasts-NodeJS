// A service vai devolver os dados para o controller, que vai devolver para o servidor
import { IStatusPodcast } from '../model/status-podcast-model';
import { repositoryPodcast } from '../repositories/podcasts-repository';
import { StatusCode } from '../utils/status-code';

export const serviceListEpisodes = async () => {
  let responseFormat: IStatusPodcast = {
    statusCode: 0,
    body: [],
  };

  const data = await repositoryPodcast();

  if (data.length !== 0) {
    responseFormat.statusCode = StatusCode.OK;
  } else {
    responseFormat.statusCode = StatusCode.NO_CONTENT;
  }
  responseFormat.body = data;

  return responseFormat;
};
