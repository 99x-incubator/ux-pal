'use strict';
var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
var url = 'mongodb://admin:password@ds023593.mlab.com:23593/uxpal';

function dbConnect(cb){
    MongoClient.connect(url, function (err, db) {
        if(err){
            return cb(err);
        }else{
            return cb(db);
        }
    });
}

module.exports.register = function(event, cb){
    dbConnect(function(db){
        var user = db.collection('user');
        var userInfo = {"username":event.username,"password":event.password};
        user.insert(userInfo,function(err, result){
            if(err){
                return cb(err);
            }else{
                return cb({err:false,data:result.ops[0]})
            }
        });
    });
};

module.exports.signIn = function(event, cb){
    dbConnect(function(db){
        var user = db.collection('user');
        user.find({$and:[{username: event.username},{password:event.password}]})
        .toArray(function (err, result) {
          if (err) {
            return cb(false);
          }else{
            if(result.length > 0){
                return cb(true);
            }else{
                return cb(false);
            }
          }
          db.close();
        }); 
    });
};

module.exports.createProject = function(event,cb){
    dbConnect(function(db){
        var collection = db.collection('projects');
        collection.find({isTemplate:true}).toArray(function(err,result){
            if(err){
                return cb(err);
            }else{
                var template = result[0];
                delete template._id; delete template.isTemplate;
                template.projectName = event.projectName;
                template.projectOwner = event.username;
                collection.insert(template, function (err, result) {
                  if (err) {
                    return cb(err);
                  } else {
                    return cb({err:false,data:result.ops[0]});
                  }
                  db.close();
                });
            }
        })
    });
}

