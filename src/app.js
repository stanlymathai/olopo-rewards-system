const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/user.route');

const app = express();

app.use(bodyParser.json());
app.use('/api/users', userRoutes);

module.exports = app;
