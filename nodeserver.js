const express = require('express')
const app = express()
const port = 3000


//set view engine to els 
app.set('view engine', 'ejs');
//use res,render to load up an ejs view file 
app.get('/homepage', function(req, res) {
    res.render('indexejs')

})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/home', (req,res) => {
    res.send('route to home page ')
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})