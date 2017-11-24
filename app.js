const express = require('express');
const path = require('path');

const app = express();
app.use(express.static(path.join(__dirname, '/public')));
app.use(express.static(path.join(__dirname, '/build')));
app.use((req, res) => res.sendFile(`${__dirname}/public/index.html`));
app.listen(3000);
