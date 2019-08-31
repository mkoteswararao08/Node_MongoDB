const {MongoClient,ObjectID} =require('mongodb');



MongoClient.connect('mongodb://localhost:27017',{useNewUrlParser:true,useUnifiedTopology:true},(err,client)=>{
    if(err){
        return console.log('Unable to connect to MongoDB server')
     }
    const db =client.db('nodedb');
    
    /*--------To get all data in collection. use find() method--------*/
    // db.collection('User').find().toArray().then((documents)=>{
    //     console.log(JSON.stringify(documents,undefined,2))
    // },(err)=>{console.log(err)})

    /*--------To get data from collection who ever having field {"completed":"true"} . use find({"completed":"true"}) method--------*/
    // db.collection('User').find({"completed":"true"}).toArray().then((documents)=>{
    //     console.log(JSON.stringify(documents,undefined,2))
    // },(err)=>{console.log(err)}) 
    
    /*-->To get data from collection with objectID field.
         use find({"_id":new ObjectID("5d67ba792a108a12746fbe38")}) method.
         ObjectID value is not a string so we can't pass String value directly,
         we need to create new ObjectID with required value. after that we need to pass that object as value. 
    --------*/
    // db.collection('User').find({"_id":new ObjectID("5d67ba792a108a12746fbe38")}).toArray().then((documents)=>{
    //     console.log(JSON.stringify(documents,undefined,2))
    // },(err)=>{console.log(err)})
    
    /*-->To get count documents based on our condition.
         find().count() 
    */
    db.collection('User').find({"completed": "true"}).count((err,document)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log(document);
        }
    })


})

/*-->After the find() method, we can use any methods based on our requirement to get documents(rows)
     we will use toArray() method.
  -->To get count we will use count() method.
  -->we can see all methods inside http://mongodb.github.io/node-mongodb-native/3.3/api/Cursor.html.     
  -->the above methods( toArray(), count()) will returns promise. we can also use promise or callback.
     all methods will returns Promise if no callback is passed.
*/