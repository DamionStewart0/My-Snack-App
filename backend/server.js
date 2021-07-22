const express =require('express');
const cors = require('cors');
const bodyParser = require("body-parser");
const logger = require("morgan");
const db = require("./db/connection");
// const routes = require("./routes");


const app = express();
const PORT =process.env.PORT || 4000;

app.use(cors());

app.use(bodyParser.json());
app.use(logger('dev'));
// app.use('./api', routes);

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));