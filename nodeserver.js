const express = require('express ') //web framwork
const app = express()
const port = 3000


app.get('/', (req,res) => {
    res.send("express started")
})

app.listen(port, () => {
    console.log('start listening port active ${port}')
})