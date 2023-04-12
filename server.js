// Define Express

const express = require('express');
const PORT = 3001;
const app = express();

// Define Middleware (json, url encoded, static)
app.use(express.urlencoded)({extended: false});
app.use(express.json);
app.use(express.static);

// create / define routes 

// start the server
app.listen(PORT, ()=> console.log(`Listening at ${PORT}`));