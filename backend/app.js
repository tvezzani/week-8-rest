// const express = require('express');
// const bodyParser = require('body-parser');

// const professionalRoutes = require('./routes/professional');

// const app = express();

// // app.use(bodyParser.urlencoded()); // x-www-form-urlencoded <form>
// // app.use(bodyParser.json()); // application/json

// app.use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
//     res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//     next();
// });

// app.use(professionalRoutes);

// app.listen(8080);

const express = require('express');
const bodyParser = require('body-parser');

const professionalDataRoutes = require('./routes/professionalData');

const app = express();

var jsonParser = bodyParser.json({limit:1024*1024*10, type:'application/json'});
app.use(jsonParser);

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use(professionalDataRoutes);

app.listen(8080);