'use strict'
const app = require('../node/bin/express');
const variable = require('../node/bin/configuration/variables');

app.listen(variable.Api, () => {
    console.info(`Servidor ON Port: ${variable.Api.port}`);
});