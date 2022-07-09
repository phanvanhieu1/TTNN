const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const passport = require('passport');
const flash = require('connect-flash');
const session = require('express-session');
const fs = require('fs');
const viewEngine = require('./config/viewEngine');
require('./config/passport');
const XLSX = require('xlsx');
const {google} = require('googleapis')
const logger = require('morgan');


//config router
const homepage = require('./router/home');
const postpage = require('./router/post');
const userRouter= require('./router/user');
const homeRouter= require('./router/phongtro');


//Middleware
// app.use(logger('dev'));

//init app
const app = express()
viewEngine(app);
const port = 3000

//static folder path
app.use('/static', express.static(path.join(__dirname, 'public')))

//connect to DB
const connectDB = async () => {
await mongoose.connect('mongodb://localhost:27017/DB01')
.then(()=>{
    console.log('Connected to MongoDB')
}).catch(err=>{console.log(err)})
}
connectDB();

//catch 404 and forward to error handler
app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
})

//Error handler function
app.use(() => {
  const error = app.get('env') === 'development' ? err : {};
  const status = err.status || 500;
  //sau khi lấy được thông tin lỗi, gửi lại cho client
  res.status(status);
  res.json({
    message: error.message,
    error: error.stack
  });
})

//fetch data from the request
app.use(bodyParser.urlencoded({extended:false}))
app.use(session({
  name: 'login',
  secret : 'secured_key',
  resave : false,
  saveUninitialized : false,
  cookie:{
    maxAge:1000*60*15
  }
}))

app.use([
  bodyParser.json(),
  bodyParser.urlencoded({
    extended: true,
  })
]);
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());


app.use(flash());
app.use('/',homepage)
app.use('/post',postpage)
app.use('/nguoi-dung',userRouter);
app.use('/phong-tro',homeRouter);


//start server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})