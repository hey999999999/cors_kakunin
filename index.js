const express = require('express');
const app1 = express();
app1.use(express.static(__dirname + '/public'));
const port = process.env.PORT || '3000';
app1.listen(port, () => console.log('listen ' + port));

const app2 = express();
app2.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'X-HOGEHOGE');
	next();
});
app2.use((req, res) => {
	console.log('app2-> ', req.method, req.header('x-hogehoge'));
	res.send('OK');
});
app2.listen(3012, () => console.log('listen 3012'));
