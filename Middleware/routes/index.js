const express = require('express');
const data = require('../salesProducts');


const middlewares = require('../middlewares');

const routes = express.Router();

routes.get('/sales',(req, res) => {
    res.status(201).json(data)
})


routes.use(middlewares.incompleteInfo);
routes.use(middlewares.validationSales);

routes.post('/sales',(req, res) => {
    const { productName, infos: {saleDate, warrantyPeriod} } = req.body;
    data.push({ productName, infos: {saleDate, warrantyPeriod} } )
    res.status(201).json({ message: "Venda cadastrada com sucesso" });
})

routes.use(middlewares.errorHandler)

module.exports = routes;