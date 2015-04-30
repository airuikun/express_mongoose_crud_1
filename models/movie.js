var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/blog');

var MovieSchema = new mongoose.Schema({
	name: String,
	password: String
});

//添加
//这里面的这个methods是固定的 代表添加实例方法
MovieSchema.methods.addMovie = function(movie, callback) {
	this.name = movie.name;
	this.password = movie.password;
	this.save(callback);
}


//这里面的movies是数据库的一个集合
var Movie = mongoose.model('movies', MovieSchema);

module.exports = Movie;