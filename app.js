const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const passport = require('passport');
const flash = require('connect-flash');
const session = require('express-session');
const fs = require('fs');
fs.writeFileSync('HD.txt', 'HieuDtrai');


const homepage = require('./router/home');
const userpage = require('./router/user');
const app = express()
const port = 3000


mongoose.connect('mongodb://localhost:27017/DB01')
.then(()=>{
    console.log('Connected to MongoDB')
}).catch(err=>{console.log(err)})



app.use(flash());
app.use('/',homepage)
app.use('/user', userpage)
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})