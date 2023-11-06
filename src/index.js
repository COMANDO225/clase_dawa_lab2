const express = require('express');

const app = express();

const port = 3000;

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html')
})

app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/views/about.html')
})

app.get("/contact", (req, res) => {
    res.sendFile(__dirname + "/views/contact.html")
})

app.listen(port, () => {
    console.log(`Server ready en http://localhost:${port}`)
})