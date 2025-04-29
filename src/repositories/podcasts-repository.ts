// Separa a logica de leitura da logica de listagem/filtragem, que está no service.

// fs = FileSystem, é um módulo do Node.js que permite trabalhar com o sistema de arquivos, como ler e escrever arquivos.
import fs from 'fs';
import path from 'path';
import { IPodcast } from '../model/podcast-model';

const pathData = path.join(__dirname, '../repositories/podcasts.json');

export const repositoryPodcast = async (
  //parametro opcional
  podcastParameter?: string
): Promise<IPodcast[]> => {
  const rawData = fs.readFileSync(pathData, 'utf-8');
  let jsonFile = JSON.parse(rawData);

  if (podcastParameter) {
    jsonFile = jsonFile.filter(
      (podcast: IPodcast) =>
        podcast.category === podcastParameter ||
        podcast.podcastName === podcastParameter
    );
  }

  return jsonFile; //retorna o vetor de podcast
};
