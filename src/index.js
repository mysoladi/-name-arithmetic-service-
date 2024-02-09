const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
const port = 3000;
app.get('/', (req, res) => {
    res.send('Arithmetic service - Hello World!');
});

app.get('/add', (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);

    if (isNaN(num1) || isNaN(num2)) {
        res.status(400).send('Invalid numbers provided');
    } else {
        const sum = num1 + num2;
        res.json({ result: sum });
    }
});

app.get('/subtract', (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);

    if (isNaN(num1) || isNaN(num2)) {
        res.status(400).send('Invalid numbers provided');
    } else {
        const result = num1 - num2;
        res.json({ result: result });
    }
});

app.listen(port);