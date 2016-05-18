var mongoose=require('mongoose');
var db = mongoose.createConnection('mongodb://localhost:27017/todo');

db.on('error', function(error) {
    console.log(error);
});
var TodoSchema = new mongoose.Schema({
	title:String,
	dateTime:String,
	createTime:Date,
	todo:String,
	userId:String
});

var dao = db.model('todo', TodoSchema,'todo');

module.exports = {	
	//新增
	add:function(data,callback){
		console.log("---保存todo---");
		dao.create(data, function(error){
	    if(error) {
	        console.log(error);
	    } else {
	        console.log('save ok');
	        callback();
	    }
	});
	},
	//查询
	findOne:function(dateTime,userId,callback){
		console.log("---查询todo---");
		dao.findOne({dateTime:dateTime,userId:userId},function(err,result){
	  		callback(err,result);
	  	});
	}
}
