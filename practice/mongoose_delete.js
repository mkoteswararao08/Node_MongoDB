const mongoose= require('mongoose');

mongoose.connect('mongodb://localhost:27017/TodoApp',{useNewUrlParser:true});

var todo=mongoose.model('Todo',{
    text:{type:String,required:true,minlength:1,trim:true},
    completed:{type:Boolean,default:false},
    completedAt:{type:Number}
})

// todo.deleteMany({text:'mkr'}).then(document=>{
//     console.log(document);
// }).catch(err=>{
//     console.log(err)
// })

// todo.deleteOne({text:'hi koti mongoose'}).then(document=>{
//     console.log(document);
// }).catch(err=>{
//     console.log(err);
// })

// todo.findOneAndDelete({text:'hi koti mongoose'}).then(document=>{
//         console.log(document);
//     }).catch(err=>{
//         console.log(err);
// })

// todo.findByIdAndDelete("5d69240ce674da266c704c86").then(document=>{
//     console.log(document);
// }).catch(err=>{
//     console.log(err);
// })
 
/*-------------------remove()----------------- */
// todo.remove({}).then(result=>{
//     console.log(result);
// }).catch(err=>{
//     console.log(err);
// })

// todo.findByIdAndRemove("5d6923be83e1a93e14743f53").then(document=>{
//         console.log(document);
//     }).catch(err=>{
//         console.log(err);
// })

// todo.findOneAndRemove({text:'molabanti koteswara rao'}).then(document=>{
//             console.log(document);
//         }).catch(err=>{
//             console.log(err);
// })

