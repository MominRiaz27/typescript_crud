import express, { Express, Request, Response } from 'express';
import router from "./routes/route"
import swaggerUi from 'swagger-ui-express';
//import swaggerDocument from "./swagger/swagger.yaml"
import YAML from 'yamljs';
const swaggerDocument = YAML.load('./swagger/swagger.yaml');
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;
app.use(express.json());
app.use(cors()); /* NEW */

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


app.use('/', router);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});