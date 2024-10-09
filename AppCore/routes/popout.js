const { Router } = require('express');
const fetch = require('node-fetch');

const app = Router();

app.get('/*', (req, res) => {
	fetch('https://dis-proxy.stormgalaxy.com/popout').then(r => r.text()).then(t => res.send(t));
});

module.exports = app;
