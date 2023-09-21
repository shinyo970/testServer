let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let bodyParser = require("body-parser");
let logger = require('morgan');
let http = require('http');
const fs=require('fs');

let app = express();
app.all("*",function(req,res,next){
    // 相当于域名白名单, 不能写 * ,因为*是通配符 所有网站都可以访问 自己为了玩 用着 也行
    // 不是本公司网站也能访问 ,那就扯了
    res.setHeader("Access-Control-Allow-Origin","*");
    // 所以可以单独配置白名单,也就是能进行跨域访问的网址
    // res.setHeader("Access-Control-Allow-Origin",["http://127.0.0.1:5500"]);

    //...Headers必须的固定值,"content-type"
    res.setHeader("Access-Control-Allow-Headers","X-request-With,content-type");
    // res.setHeader("Access-Control-Allow-Headers","X-request-With");

    res.setHeader("Access-Control-Allow-Methods","GET,POST,DELETE,PUT,OPTIONS")

    // 放行/下一步 不能省
    next()
})
    
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));
let routersFile=fs.readdirSync('./routes');


const index=require('./routes/index')
routersFile.forEach(v=>{
    app.use('/'+v.replace('.js',''),require('./routes/'+v));
})
app.use('/',require('./routes/index.js'));



// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});


// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
