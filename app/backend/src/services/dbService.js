const MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;
const url = "mongodb://localhost:27017/";

const client = new MongoClient(url)

const addValueToDb = async (value) => {
  const insert = async (value) => {
    try {
      await client.connect()
      const database = client.db('mydb');
      const todos = database.collection('todos');

      const doc = { text: value, isCompleted: false }
      const result = await todos.insertOne(doc)
      console.log(`A document was inserted with the _id: ${result.insertedId}`);
      return result
    } finally {
      await client.close()
    }
  };
  const result = await insert(value)
  return result;
}

const updateValueInDb = async (id, value, isCompleted) => {
  const update = async (id, value, isCompleted) => {
    try {
      await client.connect()
      const database = client.db('mydb');
      const todos = database.collection('todos');
      console.log(id)

      const filter = { "_id": ObjectID(id) };
      const options = { upsert: false };
      const updateDoc = {
        $set: {
          "text": value,
          "isCompleted": isCompleted
        },
      };
      const result = await todos.updateOne(filter, updateDoc, options);
      console.log(
        `${result.matchedCount} document(s) matched the filter, updated ${result.modifiedCount} document(s)`,
      );
      return result
    } finally {
      await client.close()
    }
  };
  const result = await update(id, value, isCompleted)
  return result;
}

const deleteValueFromDb = async (id) => {
  const deleteValue = async (id) => {
    try {
      await client.connect()
      const database = client.db('mydb');
      const todos = database.collection('todos');
      console.log(id)

      const query = { "_id": ObjectID(id) };

      const result = await todos.deleteOne(query);
      console.log(
        `${result.deletedCount} document(s) deleted`,
      );
      return result
    } finally {
      await client.close()
    }
  };
  const result = await deleteValue(id)
  return result;
}

const getAllValuesFromDb = async () => {
  const getAll = async () => {
    try {
      await client.connect()
      const database = client.db('mydb');
      const todos = database.collection('todos');
      
      const query = {}
      const options = {projection: { _id: 1, text: 1, isCompleted: 1 }}
      const cursor = todos.find(query, options);
      const result = []
      await cursor.forEach((entry) => {console.log(entry); result.push(entry)})
      return result
    } finally {
      await client.close()
    }
  }
  const result = await getAll()
  return result;
}

module.exports = { addValueToDb, getAllValuesFromDb, updateValueInDb, deleteValueFromDb }