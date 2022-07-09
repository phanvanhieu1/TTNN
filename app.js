const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const passport = require('passport');
const flash = require('connect-flash');
const session = require('express-session');
const fs = require('fs');
const viewEngine = require('./config/viewEngine');
const XLSX = require('xlsx');
const {google} = require('googleapis')
// const file = fs.readFile('test.xlsx');
// console.log(file);
fs.writeFileSync('HD.txt', 'HieuDtrai');

// console.log(fs.readFileSync('test.xlsx', 'utf8'));


const homepage = require('./router/home');
const userpage = require('./router/user');
const postpage = require('./router/post');
//init app
const app = express()
viewEngine(app);
const port = 3000

//static folder path
app.use('/static', express.static(path.join(__dirname, 'public')))

//connect to DB
mongoose.connect('mongodb://localhost:27017/DB01')
.then(()=>{
    console.log('Connected to MongoDB')
}).catch(err=>{console.log(err)})

//fetch data from the request
app.use(bodyParser.urlencoded({extended:false}))


app.use(flash());
app.use('/',homepage)
app.use('/post',postpage)
// app.use('/user', userpage)
// app.use(passport.initialize());
// app.use(passport.session());
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})