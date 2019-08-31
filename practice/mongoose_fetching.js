const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost:27017/TodoApp',{useNewUrlParser:true});

var todo=mongoose.model('Todo',{
    text:{type:String,required:true,minlength:1,trim:true},
    completed:{type:Boolean,default:false},
    completedAt:{type:Number}
})

/*-------------to get all todos data.------------- */
// todo.find().then(document=>{
//     console.log(document);
// }).catch(err=>{
//     console.log(err);
// })

/*--------------to get todo by Id--------------------------*/
//In mongoose it automatically converts string to objectId, so need to pass objectId we can pass id as String also.
todo.findById("5d6a01a6980a4217ac8b5ca6").then(document=>{
    console.log(document)
}).catch(err=>{
    console.log(err);
})

/*----------------to get todo by text------------------------- */
// this will returns all documents that are matchs for given condition.
// todo.find({text:'molabanti koteswara rao'}).then(document=>{
//     console.log(document);
// }).catch(err=>{
//     console.log(err)
// })

/*----------------to get todo by text but first value----------------- */
// todo.findOne({text:'molabanti koteswara rao'}).then(document=>{
//     console.log(document);
// }).catch(err=>{
//     console.log(err)
// })