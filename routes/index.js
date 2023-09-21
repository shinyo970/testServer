let express = require('express');
let router = express.Router();
let {p}=require('./../public/read');
let multiparty = require('multiparty');

router.get('/',function(req,res){
	Promise.all([p]).then(function(results){
		res.render('index',{
			msg:results[0]
		})
	},function(err){
		res.render('index',{
			msg:'error'
		})
	})
	
});
router.post('/uploadFile',function (req,res) {
	let form = new multiparty.Form();
	console.log(req.file)
	form.parse(req, function(err, fields, files) {
		// 这里的files是接收到的文件列表，相当于FileList
		// 对于上传单个文件，取数组里面的第一项
		console.log(files);
		// let file = files[0];
		// console.log(file);
		res.status(200).send({msg:'ok'});
	});

})
function randomNum(minNum, maxNum) {
	switch (arguments.length) {
		case 1:
			let a = parseInt(Math.random() * minNum + 1, 10);
			return ;
			break;
		case 2:
			return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
			break;
		default:
			return 0;
			break;
	}
}
router.post('/bb',function(req,res){
	setTimeout(()=>{
		res.send({
			msg: randomNum(1,5),
			data:req.body.id
		})
	},5000)
})
router.post('/getData',(req,res)=>{
	res.status(200).send({
		data:req.body,
		resCode:'success'
	})
})

module.exports=router;