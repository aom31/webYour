const express = require('express')
const app = express()
const port = 3000

//define variable data 
var id = 123;
var statuse = "single";
var users = [
    {name : "thamakorn" , lname: "ketnoi ", birth_day : 2000 },
    {name : "tha" , lname : "kot" , birth_day: 2011},
    {name: "asd" , lname: "thjaj" , birth_day: 2001}
];

//set view engine to els 
app.set('view engine', 'ejs');
//use res,render to load up an ejs view file 
// app.get('/homepage', function(req, res) {
//     res.render('indexejs')

// })
app.get('/insertfront' , function(req, res) {
    res.render('indexejs',  {userid : id, statusl : statuse , userlist : users}) //send value from front to back
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