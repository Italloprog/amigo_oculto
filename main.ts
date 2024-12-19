import express from 'express';
import { Rotas_grupo } from './presentation/rotas_grupo';
import { Rotas_usuario } from './presentation/rotas_usuario';

const app = express();
app.use(express.json());

new Rotas_grupo(app);
new Rotas_usuario(app);

app.listen('3000',() => {
    console.log('server open 3000.');
});