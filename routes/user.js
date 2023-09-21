var express = require('express');
var router = express.Router();

router.get('/',function(req,res){
	res.render('user',{
		msg:'user'
	})
});
router.post('/mm',function(req,res){
	console.log('监听')
	res.send({
		msg:'12456'
	})
});
module.exports=router;