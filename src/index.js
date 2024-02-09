const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');  // Add this line to import the CORS middleware
const port = 3000;

// Enable CORS for your frontend domain
app.use(cors({
    origin: 'https://mysoladi.github.io/arithmetic-service-front/' // Replace with your frontend origin
}));

app.get('/', (req, res) => {
    // Send the HTML file when the root URL is accessed
    res.sendFile(path.join(__dirname, 'arithmetic-service-front', 'index.html'));
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

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
