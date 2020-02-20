

function apiRoutes(express) {
    const routes = new express.Router();

    routes.get('/api/hello', (req, res) => res.send({ response: 'world' }))   ;

    return routes;
}


const getApp = (express, middlewareFn) => {
    const exp = express();

    if(middlewareFn) {
        exp.use(middlewareFn)
    }

    return exp.use(express.json())
    .use(apiRoutes(express));
}

exports.getApp = getApp;