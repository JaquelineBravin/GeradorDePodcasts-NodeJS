import * as http from 'http';
import {
  getFilterCategory,
  getFilterEpisodes,
  getListEpisodes,
} from './controllers/podcasts.controller';
import { Routes } from './routes/routes';
import { HttpMethod } from './utils/http-methods';

const server = http.createServer(
  // req: é o que está sendo enviado pro servidor, e res: é o que o servidor vai responder/enviar
  async (req: http.IncomingMessage, res: http.ServerResponse) => {
    // queryString
    //http://localhost:3000/api/episode?p=AssombradO.com.br

    // A base da url e a queryString são separadas por '?', e como isso pode ser nulo, eu coloco um valor padrão
    const [baseUrl, queryString] = req.url?.split('?') || ['', ''];

    if (req.method === HttpMethod.GET && baseUrl === Routes.LIST) {
      await getListEpisodes(req, res);
    }

    if (req.method === HttpMethod.GET && baseUrl === Routes.EPISODE) {
      await getFilterEpisodes(req, res);
    }

    if (req.method === HttpMethod.GET && baseUrl === Routes.CATEGORY) {
      await getFilterCategory(req, res);
    }
  }
);

const port = process.env.PORT;
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// npm run start:watch
