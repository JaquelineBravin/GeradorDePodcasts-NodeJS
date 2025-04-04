import * as http from 'http';
import {
  getFilterEpisodes,
  getListEpisodes,
} from './controllers/podcasts.controller';

const server = http.createServer(
  async (req: http.IncomingMessage, res: http.ServerResponse) => {
    if (req.method === 'GET' && req.url === '/api/list') {
      await getListEpisodes(req, res);
    }

    if (req.method === 'GET' && req.url === '/api/episode') {
      await getFilterEpisodes(req, res);
    }
  }
);

// Aqui eu estou pegando a variável de ambiente PORT, que é a porta que o servidor vai rodar
const port = process.env.PORT;
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// npm run start:watch
