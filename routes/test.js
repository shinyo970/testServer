var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    res.render('test', {
        msg: 'test'
    })
});

function randomString(length) {
    let chars ='0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var result = '';
    for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
    return result;
}



router.post('/getData', function (req, res) {
    let p=req.body.pageNo;
    let arr=[];
    for(let i=1;i<25;i++){
        arr.push({
            str: randomString(8),
            pageNo:p
        })
    }
    setTimeout(function(){
        res.status(200).send({
            msg: arr,
        })
    },5000)
    
});
module.exports = router;