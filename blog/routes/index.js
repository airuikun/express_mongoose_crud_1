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
	//两种添加方式
	var movie = new Movie({
		name:'airuikun',
		password:'123456'
	});
	movie.save();

	var movie1 = new Movie();
	movie1.addMovie({
		name:'liuyating',
		password:'123456'
	});

	movie1.addMovie({
		name: req.body.name,
		password: req.body.password
	});

	res.send("<a href='/'>添加成功 点击返回主页</a>");
	//res.end();
	//res.redirect('/');
});

//查找：find  findOne findAll  查询所有栏目 findById



//---------------------------------------------------------
router.get('/login', function(req, res, next) {
  res.render('login', { title: '登陆' });
});
router.post('/login', function(req, res, next) {
});

router.get('/post', function(req, res, next) {
  res.render('post', { title: '发表' });
});
router.post('/post', function(req, res, next) {
});

router.get('/logout', function(req, res, next) {
  res.render('logout', { title: '登出' });
});

module.exports = router;
