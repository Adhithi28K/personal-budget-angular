// Budget API

const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

const budget = {
    myBudget: [
        {
            title: 'Eat out',
            budget: 25
        },
        {
            title: 'Rent',
            budget: 275
        },
        
        {
            title: 'garden',
            budget: 567
        },
        {
            title: 'history',
            budget: 47
        },
        {
            title: 'school',
            budget: 35
        },
        {
            title: 'flight',
            budget: 213
        },
        {
            title: 'source',
            budget: 89
        },
    ]
};


app.get('/budget', (req, res) => {
    res.json(budget);
});

app.listen(port, () => {
    console.log(`API served at http://localhost:${port}`);
});