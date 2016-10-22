"use strict";
var express = require('express');
var app = express();
var route = require('./handler/handler');
var cors = require('cors');
var bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/////ENDPOINTS FOR FUNCTIONS//////////////
app.post('/signIn', function (req,res) {
	route.signIn(req.body,function(result){
		res.send(result);
	})
});

app.post('/createProject',function(req,res){
	route.createProject(req.body,function(result){
		res.send(result);
	});
})

app.post('/register',function(req,res){
	route.register(req.body,function(result){
		res.send(result);
	});
});

app.post('/getProjects',function(req,res){
	route.getProjects(req.body,function(result){
		res.send(result);
	});
});

app.post('/getProjectData',function(req,res){
	route.getProjectData(req.body,function(result){
		res.send(result);
	});
});

app.post('/updateProject',function(req,res){
	route.updateProject(req.body,function(result){
		res.send(result);
	});
});


///////////////////// SERVER /////////////////////
app.listen(3000,function(){
	console.log("server running on port 3000...");
});