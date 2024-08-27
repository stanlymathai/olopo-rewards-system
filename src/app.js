const express = require('express');

const appMiddlewares = require('./middlewares/app.middleware');
const errorHandlers = require('./utils/errorHandler.util');
const routes = require('./routes');

const app = express();

appMiddlewares(app);

app.use('/api/', routes);

errorHandlers(app);

module.exports = app;
