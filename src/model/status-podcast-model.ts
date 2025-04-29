import { IPodcast } from './podcast-model';

export interface IStatusPodcast {
  statusCode: number;
  body: IPodcast[];
}
