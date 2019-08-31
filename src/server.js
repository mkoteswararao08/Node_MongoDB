var exprees=require('express');
const mongoose=require('mongoose');
const {todo} = require('./models/todo');
const {user}= require('./models/user')
const bodyparser= require('body-parser');
mongoose.connect('mongodb://localhost:27017/TodoApp',{useNewUrlParser: true});
const app=exprees();
app.use(bodyparser.json());
var port=process.env.PORT || 3000
app.listen(port,()=>{
    console.log('server is started at '+port+' hi molabanti koteswararao' );
})

app.post('/todos',(req,res)=>{
    console.log(req.body);
    var todo1= new todo({
        text:req.body.text,
        completed:req.body.completed
    })
    todo1.save((err,document)=>{
       if(err){
           res.send(err);
       }
       else{
           res.send(document);
       }    
    })
})

app.get('/todos',(req,res)=>{
    todo.find().then(document=>{
        //  console.log(document); 
         res.send({document});
    },(err)=>{
        // console.log(err);
        res.send(err);
    })
})

app.get('/todos/:id',(req,res)=>{
     console.log(req.params) //if we pass as url parameters (http://localhost:3000/todos/5d69232d08962e44409b7bd5)
     // console.log(req.query) // if we pass as query parameters (http://localhost:3000/todos?id=5d69232d08962e44409b7bd5)

     todo.findById(req.params.id).then(document=>{
         res.send({document});
     }).catch(err=>{
         res.send(err);
     })
})
