const express = require('express')
const app = express()

// routes

app.get("/", (req, res) => {
    res.send('Hello Node Api')
})

app.listen(3000, () => {
    console.log('Node Api app is running on port 3000')
})