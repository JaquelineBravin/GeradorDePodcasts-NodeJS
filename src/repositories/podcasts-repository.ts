// O arquivo podcasts-repository.ts é responsável por fazer a leitura do arquivo JSON que contém os dados dos podcasts e retornar esses dados em formato de objeto.
// Esse arquivo é importante para separar a lógica de leitura do arquivo JSON da lógica de filtragem dos episódios, que está no arquivo filter-episodes-services.ts.
//

import fs from 'fs';
import path from 'path';
import { IPodcast } from '../model/podcast-model';

const pathData = path.join(__dirname, '../repositories/podcasts.json');

// Com a promise, eu estou prometendo que vou retornar um vetor de Podcast
export const repositoryPodcast = async (
  // ? significa que é opcional
  podcastName?: string
): Promise<IPodcast[]> => {
  const rawData = fs.readFileSync(pathData, 'utf-8');
  let jsonFile = JSON.parse(rawData);

  // se o podcastname estiver preenchido, ele vai filtrar através do jsonFile, pois o jsonFile tem tudo
  if (podcastName) {
    // Ele vai ler cada um dos registros de podcast no modelo da interface, e vai filtrar somente o que tiver o podcastName igual ao que foi passado como parametro

    jsonFile = jsonFile.filter(
      (podcast: IPodcast) => podcast.podcastName === podcastName
    );
  }
  return jsonFile; //retorna o vetor de podcast
  //o parse le um texto e transforma em objeto/json
};
