const { count } = require("console");
const { MongoClient } = require("mongodb");

//connection url
const url =
  "mongodb+srv://vaddevaibhav8:uWODjKZ5MHFmldgH@namstenode.uetgi.mongodb.net/";
const client = new MongoClient(url);

// Database Name
const dbName = "HelloWorld";

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  const collection = db.collection("User");

  // the following code examples can be pasted here...

  const data = {
    firstName: "Vishal",
    lastName: "Manne",
    location: "Mumbai",
    phoneNo: "9876543210",
    rollNo: 2,
  };
  //inserting one document
    const insertResult = await collection.insertOne(data);
    console.log("Inserted documents =>", insertResult);

  //to get all documents

  const findResult = await collection.find({}).toArray();
  console.log("Found documents =>", findResult);

  //to get document with filter

  const filteredDocs = await collection.find({ rollNo: 2 }).toArray();
  console.log("Found documents filtered by {rollNo:2} =>", filteredDocs);

  //to update a document

  const updateResult = await collection.updateOne({ rollNo: 1 }, { $set: { phoneNo:"9292345610" } });
  console.log("Updated documents =>", updateResult);

  //remove the documents
  const deleteResult = await collection.deleteMany({ rollNo: 2 });
console.log('Deleted documents =>', deleteResult);

//counting all the documents

const countResult = await collection.countDocuments({});
console.log("total documents =>", countResult);

  return "done.";
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
