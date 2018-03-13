const express = require('express');
const server = express();
const PORT = process.env.PORT || 8080;

// Loading models
require('./settings')(server);
require('./models')(server);
require('./middlewares')(server);
require('./controller')(server);

server.listen(server.settings.port);
console.log(`Server is listening on port ${PORT}`);


// Users
// --------------------------------------------------------------------
server.get('/users', server.controller.users.list);

server.post('/users',
    server.middleware.bodyParser.json(), server.controller.users.insert);

server.put('/users/:id',
    server.middleware.bodyParser.json(), server.controller.users.update);

server.delete('/users/:id', server.controller.users.remove);


// Cars
// --------------------------------------------------------------------
server.get('/cars', server.controller.cars.list);

server.post('/cars',
    server.middleware.bodyParser.json(), server.controller.cars.insert);

server.put('/cars/:id',
    server.middleware.bodyParser.json(), server.controller.cars.update);

server.delete('/cars/:id', server.controller.cars.remove);