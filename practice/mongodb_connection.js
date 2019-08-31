// const MongoClient= require('mongodb').MongoClient;
const { MongoClient,ObjectID } =require('mongodb');  // Object Destructuring in ES6


// let id=new ObjectID();
// console.log(id);

MongoClient.connect('mongodb://localhost:27017', {  useNewUrlParser: true,
                                                    useUnifiedTopology: true   },(err,client)=>{
    if(err){
       return console.log('Unable to connect to MongoDB server')
    }
     
    const db= client.db('nodedb')
    console.log('Connected to MongoDB Server');
    db.collection('User').insertOne({
        "text":"hi mongodb i am from mkr" 
    },(err,result)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log(JSON.stringify(result.ops[0]._id.getTimestamp(),undefined,2));
        }    
    })
    client.close();
})



/*----------------------MongoDB------------------------ */
/*-->In mongodb we can mention database name directly without creating it before.
     mongodb will create database automatically.
     same way it also creates collection(table).
  -->For every insertion mongodb will generates new ObjectID. this is represented by _id.
  -->_id contains creation time and some other data, in encoded format.
  --> we also can able to create ObjectID, using objectID().
      Ex:  let id=new ObjectID();
           console.log(id);

 * 
 */