import express from 'express';

const app = express()

app.get('/ads', (req, res) => {
    return res.json({
        name: "Igor",
        age: 90,
        ha: 909
    })
})

app.listen(3333)