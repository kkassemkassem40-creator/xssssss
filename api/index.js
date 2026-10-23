const express = require('express');
const { createBaseApp, finalizeApp } = require('../src/apps/base');
const createLiveApp = require('../src/apps/liveApp');
const createLoginApp = require('../src/apps/loginApp');
const createMainApp = require('../src/apps/mainApp');

const app = express();

// O Vercel gerencia as rotas. Como o projeto original divide por portas,
// vamos tentar unificar as rotas em um único app Express para o Vercel.
// Nota: Protocolos TCP não funcionarão no Vercel.

const liveApp = createLiveApp();
const loginApp = createLoginApp();
const mainApp = createMainApp();

// Montar as aplicações em sub-rotas ou tentar unificar
// O Free Fire client geralmente espera endpoints específicos.
app.use('/live', liveApp);
app.use('/login', loginApp);
app.use('/', mainApp);

module.exports = app;
