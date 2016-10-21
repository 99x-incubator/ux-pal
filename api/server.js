"use strict";
var express = require('express');
var app = express();
var route = require('./handler/handler');

/////ENDPOINTS FOR FUNCTIONS//////////////
app.get('/signIn', function (req,res) {
	route.signIn({"username":"admin","password":"uxpal@openhack"},function(result){
		console.log(result);
		return result;
	})
});

app.get('/createProject',function(req,res){
	route.createProject({"username":"avinduhewa","projectName":"first Project"},function(result){
		return result;
	});
})

app.listen(3000,function(){
	console.log("server running on port 3000...");
});