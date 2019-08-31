const mongoose=require('mongoose');

var user=mongoose.model('user',{
    name:{ type:String },
    email:{type:String },
    phone:{type:String,minlength:10,maxlength:10} 
})

module.exports={user};