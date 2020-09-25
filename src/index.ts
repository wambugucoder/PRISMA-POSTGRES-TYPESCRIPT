import  express from 'express';
import * as bodyParser from 'body-parser';
import * as  dotenv from 'dotenv';
import routes from './routes';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// BODY-PARSER
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// ROUTES
app.use('/api/v1', routes);

// LISTEN
app.listen(PORT, () => {
  // tslint:disable-next-line:no-console
  console.log(`Server is listening on port ${PORT}🔥`);
});

export default app;
