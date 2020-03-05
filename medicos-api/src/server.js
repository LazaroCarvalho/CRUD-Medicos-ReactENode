// Configurando o app, adicionando as rotas dos recursos e configurando o cors.
const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json())
app.use(cors());

// Rotas    
const medicoRouter = require('./router/medicoRouter');
const especialidadeRouter = require('./router/especialidadeRouter');

app.use('/medicos', medicoRouter);
app.use('/especialidades', especialidadeRouter)

module.exports = app;