
// Database creation in mangodb
var MongoClient= require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/demodb";
MongoClient.connect(url,{useUnifiedTopology:true},function(err,db)
{
    if(err) throw err;
    console.log('database created successfully');
    db.close();

});
      
//collection(table creation)

var MongoClient= require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
MongoClient.connect(url,{useUnifiedTopology:true},function(err,db)
{
    var dbname=db.db('demodb');
    dbname.createCollection("students",function(err,result){
        if(err) throw err;
        console.log('collection  created successfully');
        db.close(); 
    }); 
    });
     

     // insert values into student
      var MongoClient= require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
MongoClient.connect(url,{useUnifiedTopology:true},function(err,db){
    var dbname=db.db('demodb');
    
        dbname.collection('students').insertOne({name:"kom",city:"chennai"},function(err,result){
            if(err) throw err;
                console.log('one document inserted sucessfully');
                db.close();
        });
    });



 // display inserted values using findone()

var MongoClient= require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
MongoClient.connect(url,{useUnifiedTopology:true},function(err,db){
    var dbname=db.db('demodb');
    // declare values using array
    
        dbname.collection('students').findOne({}, function(err,result){
            if(err) throw err;
                console.log(result);
                db.close();
        });
    });
 

 * // display inserted values using find()

var MongoClient= require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
MongoClient.connect(url,{useUnifiedTopology:true},function(err,db){
    var dbname=db.db('demodb');
    // declare values using array
    
        dbname.collection('students').find({}).toArray(function(err,result){
            if(err) throw err;
                console.log(result);
                db.close();
        });
    });

 

 
  var MongoClient= require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
MongoClient.connect(url,{useUnifiedTopology:true},function(err,db){
    var dbname=db.db('demodb');
    // here projection avoid particular field city
    
        dbname.collection('students').find({},{ projection:{city:0}}).toArray(function(err,result){
            if(err) throw err;
                console.log(result);
                db.close();
        });
    });
  
 
  * // display inserted values using find() with projection (to avoid particular field)

var MongoClient= require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
MongoClient.connect(url,{useUnifiedTopology:true},function(err,db){
    var dbname=db.db('demodb');
    // here projection avoid particular field if _id=0  then not displayed city=1 it displayed
    
        dbname.collection('students').find({},{ projection:{_id:0,city:1}}).toArray(function(err,result){
            if(err) throw err;
                console.log(result);
                db.close();
        });
    });
  
 


        
    