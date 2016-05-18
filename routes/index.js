var express = require('express');
var todoDao = require('../dao/todoDao');
var router = express.Router();

/* GET home page. */
router.get('/api/todo/msgList', function(req, res, next) {
  	var msgList = [{
      id:'01',
      title:'系统消息',
      num:8,
      face:'系',
      from:'system',
      msg_short:'这是一条系统消息',
      msg_detail:'这是消息的详细内容，哈哈哈哈哈哈哈哈哈'
    },{
      id:'02',
      title:'小怪兽',
      num:2,
      face:'黎',
      from:'lj',
      msg_short:'你是小怪兽',
      msg_detail:'你是小怪兽,这是消息的详细内容，哈哈哈哈哈哈哈哈哈'
    },{
      id:'03',
      title:'李昊天',
      num:4,
      face:'李',
      from:'lht',
      msg_short:'正在学习ionic',
      msg_detail:'正在学习ionic,这是消息的详细内容，哈哈哈哈哈哈哈哈哈'
    }];
  res.json(msgList);
});
router.get('/api/todo/schedule', function(req, res, next) {
  todoDao.find("",function(err,result){
    res.json(result);
  });
  
});

router.post('/api/todo/saveSchedule', function(req, res, next) {
  var data = req.body;
  var todoData = {
      title:data.title,
      dateTime:data.dataTime,
      createTime:new Date(),
      todo:data.todo,
      userId:"1"
  };
  todoDao.add(todoData,function(err,result){
      if(result){
        res.json({returnState:1,msg:"保存成功"});
      }else{
        console.log(err);
        res.json({returnState:0,msg:"保存失败"});
      }
  });
});

module.exports = router;
