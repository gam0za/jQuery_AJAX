var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// ID 중복 검사하여 그 결과를 참/거짓으로 반환
router.get('/isUsableID',function(req,res,next){
  
});

// 현재 존재하는 아이디 배열
router.get('/displayIDs',function(req,res,next){

});

// userID DB에 추가
router.post('/memberJoinDo',function(req,res,next){

});

module.exports = router;
