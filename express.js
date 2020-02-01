const express = require('express');

function apiRoutes() {
    const routes = new express.Router();

    routes.get('/hello', (req, res) => res.send({ response: 'world' }));

    routes.post('/echo', (req, res) => res.send({ ...req.body }));

    return routes;
}


const getApp = () => {
    return express()
        .use(express.json())
        .use(apiRoutes());
}

exports.getApp = getApp;