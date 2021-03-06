const express = require('express');
const path = require('path');
const app = express();

app.get('/', (req, res) => {
	res.sendFile(path.join(`${__dirname}/../index.html`));
});

app.use('/public', express.static(`${__dirname}/../frontend/public`));

app.listen(9000, () => {
	console.log("http://127.0.0.1:9000");
});