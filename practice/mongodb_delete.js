const {MongoClient} =require('mongodb');

MongoClient.connect('mongodb://localhost:27017',{useNewUrlParser:true,useUnifiedTopology:true},(err,client)=>{
     if(err){
        return console.log('Unable to connect to MongoDB server')
     }
     const db=client.db('nodedb');

    //  db.collection('User').deleteMany({text:"hi mongodb i am from mkr"}).then((document)=>{
    //      console.log(document) ;
    //  }).catch((err)=>{console.log(err)})

    //  db.collection('User').deleteOne({"text" : "hi mongodb"}).then((document)=>{
   //          console.log(document)
   //   }).catch((err)=>{console.log(err)});

     db.collection('User').findOneAndDelete({"text" : "hi mongodb i am from mkr 2"}).then((document)=>{
             console.log(document);
     }).catch((err)=>{console.log(err)});
})




/* --> deleteMany({text:"hi mongodb"}) method will deletes all documents which are matches
       for given condition.
   --> deleteOne({text:"hi mangodb"})  method will delete only one first document which matches
       for given condition. 
   --> findOneAndDelete({{"text" : "hi mongodb i am from mkr 2"}}) method will retrives the user details 
       after that it deletes that user.       
*/