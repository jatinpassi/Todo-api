var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;
var todos = [{
    id : 1,
    description : 'Meet mom for lunch',
    completed : false
},{
    id : 2,
    description : 'go to market',
    completed : false
},{
    id : 3,
    description : 'feed the cat',
    completed : false
}]
app.get('/',function(req,res){
    res.send('Hello to do');
});


app.get('/todo',function(req,res){
    res.json(todos);
});

app.get('/todo/:id',function(req,res){
    var todoid = parseInt(req.params.id);
    var matchTodo;
    todos.forEach(function(todo){
        if(todoid===todo.id){
            matchTodo=todo;
        }
    });
    if(matchTodo){
        res.json(matchTodo);
    }else{
        res.status(404).send();
    }
});

app.listen(PORT,function(){
    console.log('Express listening on port '+ PORT + '!');
});