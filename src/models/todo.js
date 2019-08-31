const mongoose=require('mongoose');

var todo=mongoose.model('Todo',{
    text: {  type:String,required: true, minlength:1, trim:true },
    completed: { type : Boolean, default:false },
    completedAt: { type : Number,default:null }  
 })
 
 module.exports={todo};


/*  -->new todo();
       Model constructor Provides the interface to MongoDB collections as well as creates document instances.
        
*/