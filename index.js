const express = require('express');
const app = express();

const port = process.env.PORT || 3000; // Set a default value for port if not defined

app.get('/', (req, res) => {
    res.sendFile('index.html',{root: __dirname + '/public'});
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
