const express = require('express');
const PORT = 3003;

const api = express();

api.use(express.json());

api.use(require('./routes'));



api.listen(PORT, () => {
    console.log('Subiu na porta 3003');
})