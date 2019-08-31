const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost:27017/TodoApp', {useNewUrlParser: true});

var todo=mongoose.model('Todo',{
   text:{  type:String,required: true, minlength:1, trim:true },
   completed:{ type : Boolean, default:false },
   completedAt:{ type : Number }  
})

var newTodo = new todo({
    text:'hi koti mongoose'
});

// newTodo.save().then(document=>{
//     console.log(document);
// },(err)=>{console.log(err)})

// newTodo.save((err,document)=>{
//   if(err){
//       console.log(err);
//   }
//   else{
//       console.log(document);
//   }
// })

var otherTodo= new todo({
    // text:'molabanti koteswara rao',
    text:'   molabanti koteswara rao',
    age:23
})

// otherTodo.save().then((document)=>{
//     console.log(document);
// }).catch(err=>{console.log(err)})




/*---------Model---------------- */
var user=mongoose.model('user',{
    name:{type:String},
    email:{type:String},
    phone:{type:String,minlength:10,maxlength:10}
})


var user1=new user({
   name:'molabanti koteswara Rao',
   email:'mkoteswararao08@gmail.com',
   phone:9840360764 
})
user1.save().then(document=>{
    console.log(document);
}).catch(err=>{console.log(err)})
