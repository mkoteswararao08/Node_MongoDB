const {MongoClient,ObjectID} =require('mongodb');

MongoClient.connect('mongodb://localhost:27017',{useNewUrlParser:true,useUnifiedTopology:true},(err,client)=>{
    if(err){
       return console.log('Unable to connect to MongoDB server')
    }

    const db=client.db('nodedb');
    db.collection('User').findOneAndUpdate({_id:new ObjectID('5d67ba792a108a12746fbe38')},{
        $set:{completed:false},
        $inc:{age:12}
    },{returnOriginal:false}).then((document)=>{
        console.log(document)
    }).catch(err=>{console.log(err)})
})


/*--> findOneAndUpdate() method will finds document, and updates that value with new one.
  --> http://mongodb.github.io/node-mongodb-native/3.3/api/Collection.html#findOneAndUpdate 
  --> syntex: findOneAndUpdate(filter, update, options, callback)
  --> this method will takes first parameter is filter id or any filed. 
        Ex:{_id:new ObjectID('5d67ba792a108a12746fbe38')}
      ->second parameter is update value, which value need to be updated.we need to pass using 
        update Operators(https://docs.mongodb.com/manual/reference/operator/update/).
      ->$set operator is used to set values.Sets the value of a field in a document.
        $inc operator is used to Increments the value of the field by the specified amount  
        Ex:{
               $set:{completed:false},
               $inc:{age:2}
            }  



*/