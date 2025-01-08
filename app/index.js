require('./services/mongo');

const express = require('express');
const user = require('./router/user');
const app = express();

const PORT = 8000;

app.use(express.json({ extended: false }));

app.use('/', user);

app.listen(PORT, console.log(`Running on port ${PORT}`));
