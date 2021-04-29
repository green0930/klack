const MongoClient= require('mongodb').MongoClient
const util = require('util')

// Connection URL
const url = process.env.MONGO_URL || "mongodb://localhost:27017"
console.log("MongoDB")
//Database Name
const dbName = 'klack'

const connectToMongo = util.promisify(MongoClient.connect)

async function start(){
    try{
        const client = await connectToMongo(url)
        //the client should  e connected here
        const db = client.db(dbName)
        console.log("It works still")
    }catch(err){
        console.error("Unable to connect to MongoDB")
    }
}

start()