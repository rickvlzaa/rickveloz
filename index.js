const express = require('express');

const app = express();

app.use("*", (req, res) => {
    res.send('Hello Rick Veloz');
});

app.listen(5000, err => {
    if(!err) {
        console.log('website running on port 5000');
    }
});