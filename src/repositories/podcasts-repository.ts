import fs from 'fs';
import path from 'path';
import { Podcast } from '../model/podcast-model';

const pathData = path.join(__dirname, '../repositories/podcasts.json');

// Com a promise, eu estou prometendo que vou retornar um vetor de Podcast
export const repositoryPodcast = async (): Promise<Podcast[]> => {
  const rawData = fs.readFileSync(pathData, 'utf-8');
  const jsonFile = JSON.parse(rawData);
  return jsonFile; //retorna o vetor de podcast
  //o parse le um texto e transforma em objeto/json
};
