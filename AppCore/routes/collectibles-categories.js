const { Router } = require('express');
const DiscordShopItems = require('../../AppAssets/DiscordShop');

const app = Router();

app.get('/', (req, res) => {
	res.send(DiscordShopItems);
});

module.exports = app;
