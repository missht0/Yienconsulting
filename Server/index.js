// node 后端服务器
//index.js——Express 服务器入口文件

var express = require('express')
var app = express();
const cors = require('cors');

app.use(cors());
app.get("/api/data",function (request,response) {
  var data = require('./data.json');//要获取的json文件
  // 返回json数据
  response.json(data);
})
app.listen('8000',function () {
  console.log('>listening on 8000')
});