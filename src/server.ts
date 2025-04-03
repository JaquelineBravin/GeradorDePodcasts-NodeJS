import * as http from 'http';
import { getListEpisodes } from './controllers/podcasts.controller';

const server = http.createServer(
  async (req: http.IncomingMessage, res: http.ServerResponse) => {
    if (req.method === 'GET') {
      await getListEpisodes(req, res);
    }
  }
);

// Aqui eu estou pegando a variável de ambiente PORT, que é a porta que o servidor vai rodar
const port = process.env.PORT;
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// npm run start:watch
