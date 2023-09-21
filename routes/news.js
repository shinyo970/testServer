var express = require('express');
var router = express.Router();
let {p}=require('./../public/read');

router.get('/',function(req,res){
	Promise.all([p]).then(function(results){
		res.render('news/news',{
			msg:results[0]
		})
	},function(err){
		res.render('news/news',{
			msg:'error'
		})
	})
	
});
router.get('/:id',function(req,res){
	res.render('index',{
		msg:'news'
	})
});
module.exports=router;