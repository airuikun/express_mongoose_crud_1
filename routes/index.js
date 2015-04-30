var express = require('express');
var router = express.Router();

var Movie = require('../models/movie');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '主页' });
});


//添加 三种方法
router.get('/add', function(req, res, next) {
  res.render('add', { title: '添加' });
});
router.post('/add', function(req, res, next) {

	//自定义实例方法
	var movie2 = new Movie();
	movie2.addMovie({
		name: req.body.name,
		password: req.body.password
	});
	res.send("<a href='/'>添加成功 点击返回主页</a>");
});


//删除
router.get('/delete', function(req, res, next) {
  res.render('delete', { title: '删除' });
});
router.post('/delete', function(req, res, next) {
	var userName = req.body.name;
	Movie.remove({name: userName}, function(err){
	 	console.log('delete success');
	});
	res.send("<a href='/'>删除成功 点击返回主页</a>");
});


//更新
router.get('/update', function(req, res, next) {
  res.render('update', { title: '更新' });
});
router.post('/update', function(req, res, next) {
	var condition = {name: req.body.name},
		update = {$set: {password: req.body.password}},
		options = {multi: true};
	Movie.update(condition, update, options, function(err){
		console.log('update error');
	});
	res.send("<a href='/'>更新成功 点击返回主页</a>");
});


//查找：find  findOne findAll  查询所有栏目 findById
router.get('/find', function(req, res, next) {
  res.render('find', { title: '查找' });
});
router.post('/find', function(req, res, next) {
	Movie.find({name: req.body.name}, function(err, docs){
		console.log(docs);
		var str = "<a href='/'>查找成功 点击返回主页</a><br />" + docs;
		res.send(str);
	});
});


module.exports = router;
