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
    var userInfo ={"username":event.username,"password":event.password,"email":event.email};
    dbConnect(function(db){
        var user = db.collection('user');
        user.find({username: event.username})
        .toArray(function (err, result) {
          if (err) {
            return cb(false);
          }else{
            if(result.length > 0){
                return cb({err:false,usernameExists:true});
            }else{
                user.insert(userInfo,function(err, result){
                    if(err){
                        return cb(err);
                    }else{
                        return cb({err:false,usernameExists:false,data:result.ops[0]})
                    }
                });
            }
          }
          db.close();
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
        var projects = db.collection('projects');
        projects.find({isTemplate:true},{isTemplate:0,_id:0}).toArray(function(err,result){
            if(err){
                return cb(err);
            }else{
                var template = result[0];
                template.projectName = event.projectName;
                template.projectOwner = event.username;
                projects.insert(template, function (err, result) {
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

module.exports.getProjects = function(event,cb){
    dbConnect(function(db){
        var user = db.collection('projects');
        user.find({projectOwner:event.username},{projectName:1,_id:0})
        .toArray(function (err, result) {
          if (err) {
            return cb(false);
          }else{
            if(result.length > 0){
                return cb({err:false,projectExist:true,data:result[0]});
            }else{
                return cb({err:false,projectExist:false});
            }
          }
          db.close();
        }); 
    });
}

module.exports.getProjectData = function(event,cb){
    dbConnect(function(db){
        var user = db.collection('projects');
        user.find({projectName:event.projectName,projectOwner:event.username})
        .toArray(function (err, result) {
          if (err) {
            return cb(false);
          }else{
            if(result.length > 0){
                console.log(result);
                return cb({err:false,projectExist:true,data:result[0]});
            }else{
                return cb({err:false,projectExist:false});
            }
          }
          db.close();
        }); 
    });
}

module.exports.updateProject = function(event,cb){
    dbConnect(function(db){
        var projects = db.collection('projects');
        projects.findAndRemove({"projectName":event.projectName,"projectOwner":event.projectOwner}, function(err, result) {
           if(err){
            return cb(err);
           }else{
            projects.insert(event, function (err, data) {
                if (err) {
                    return cb(err);
                } else {
                    return cb({err:false,data:data.ops[0]});
                }
                    db.close();
            });
           }
        });
    });
}