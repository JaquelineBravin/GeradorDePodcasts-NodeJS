import { repositoryPodcast } from '../repositories/podcasts-repository';

// Recebe a categoria de um podcast como parametro e chama a função repositoryPodcast para obter os dados.
export const serviceFilterCategory = async (category: string | undefined) => {
  const queryString = category?.split('?c=')[1] || '';
  const data = await repositoryPodcast(queryString);
  return data;
};
