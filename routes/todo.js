var express = require("express");
var router = express.Router();
var db = require("../models");
router.get("/",function(req,res){
    db.Todo.find()
      .then(function(todo){
        res.json(todo);
      })
      .then(function(todos){
          console.log(todos);
      })
      .catch(function(err){
          console.log(err);
      });   
});
router.put("/:todoId",function(req,res){
    db.Todo.findByIdAndUpdate(req.params.todoId,req.body)
    .then(function(todo){
        res.json(todo);
    })
    .catch(function(err){
        console.log(err);
    })
})
router.post("/",function(req,res){
    db.Todo.create(req.body)
    .then(function(newtodo){
        res.status(201).json(newtodo);
    })
    .catch(function(err){
        console.log(err);
    })
})
router.get("/:todoId",function(req,res){
    db.Todo.findById(req.params.todoId)
    .then(function(foundtodo){
        res.json(foundtodo);
    })
    .catch(function(err){
        console.log(err);
    })
})
router.delete("/:todoId",function(req,res){
    db.Todo.findByIdAndRemove(req.params.todoId)
    .then(function(){
        res.json({message:"We deleted it"});
    })
    .catch(function(err){
        console.log(err);
    })
});
module.exports=router;