const { MongoClient } = require("mongodb");

const uri =
  "mongodb+srv://chiranjeevmishra13:H8qKDuvga2w24dtI@deri-pulse.3ge5ego.mongodb.net/?retryWrites=true&w=majority";

let client;
let clientPromise;
const options = {};

if (!global._mongoClientPromise) {
  client = new MongoClient(uri, options);
  global._mongoClientPromise = client.connect();
}

clientPromise = global._mongoClientPromise;

export default clientPromise;
