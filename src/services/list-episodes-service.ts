// A service vai devolver os dados para o controller, que vai devolver para o servidor
import { repositoryPodcast } from '../repositories/podcasts-repository';

export const serviceListEpisodes = async () => {
  const data = await repositoryPodcast();
  return data;
};
