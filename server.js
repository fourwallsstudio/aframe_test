const express = require('express');
app = express();
port = process.env.port || 8000;

app.use(express.static(__dirname + '/public'));
app.listen(port);
