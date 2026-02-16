import express from 'express';
import cors from 'cors';
const app = express();
app.use(cors());
app.get('/ping', (req, res) => res.json('pong'));
app.listen(8080, () => console.log('Server on 8080'));
