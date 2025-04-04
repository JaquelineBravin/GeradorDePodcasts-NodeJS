import { repositoryPodcast } from '../repositories/podcasts-repository';

// A função serviceFilterEpisodes recebe o nome de um podcast e chama a função repositoryPodcast para obter os dados desse podcast.
export const serviceFilterEpisodes = async (podcastName: string) => {
  const data = await repositoryPodcast(podcastName);
  return data;
};
