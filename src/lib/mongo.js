// Importing DB configuration from the config file
const { config } = require('../config/index');
const {dbHost, dbName, dbPassword, dbUser} = config;

// Mongo config
const {MongoClient, ObjectId} = require('mongodb');
const uri = `mongodb+srv://${dbUser}:${dbPassword}@${dbHost}/${dbName}?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

/**
 * Checks if the client is already connected and returns a db instance
*/
async function connectToDatabase() {
   if (!client.isConnected()) {
      await client.connect();
      return client.db(dbName);
   }
   return client.db(dbName);
}


/**
 * Gets all the documents of a collection
 * @param {String} collection Name of the collection
*/
async function getAll (collection) {
   try {
      let db = await connectToDatabase();

      let allElementsList =  await db.collection(collection).find();

      return allElementsList;
   } catch (error) {
      console.log(error);
   }
}

/**
 * Gets all the documents of a collection by specifying a query
 * @param {String} collection Name of the collection
 * @param {Object} query Query to be performed by the db
*/
async function queryAll (collection, query) {
   try {
      let db = await connectToDatabase();

      let queriedDocuments =  await db.collection(collection).find(query);

      return queriedDocuments;
   } catch (error) {
      console.log(error);
   }
}

/**
 * Gets only one document of a collection by the id
 * @param {String} collection Name of the collection
 * @param {String} documentId Document id to be searched
*/
async function getOneById (collection, documentId) {
   try {
      let db = await connectToDatabase();
      let gatheredDocument =  await db.collection(collection).findOne({ "_id": ObjectId(documentId) });

      console.log(gatheredDocument)
      return gatheredDocument;
   } catch (error) {
      console.log(error);
   }
}

/**
 * Inserts one document in the collection
 * @param {String} collection Collection where the document will be saved
 * @param {Object} contentData Body of the document that will be saved
 */
async function saveOne (collection, contentData) {
   try {
      let db = await connectToDatabase();

      let savedElement = await db.collection(collection).insertOne(contentData);

      return savedElement;
   } catch (error) {
      console.log(error);
   }
}

/**
 * Finds and replaces one document in the collection
 * @param {String} collection Collection where the document will be replaced
 * @param {String} documentId Id of the document that will be replaced
 * @param {Object} contentData New body of the document that will be saved
 */
async function updateOne (collection, documentId, contentData) {
   try {
      let db = await connectToDatabase();

      let documentFound = await await db.collection(collection).findOne({ "_id": ObjectId(documentId) });

      if (documentFound) {
         let updatedDocument = await db.collection(collection).replaceOne({_id: ObjectId(documentId)}, contentData);
         return updatedDocument;
      } else {
         return null;
      }
   } catch (error) {
      console.log(error);
   }
}

/**
 * Finds and deletes one document from the given collection
 * @param {String} collection Collection where the document will be deleted
 * @param {String} documentId Id of the document to be deleted
 */
async function deleteOne (collection, documentId) {
   try {
      let db = await connectToDatabase();

      let documentFound = await db.collection(collection).findOne({ "_id": ObjectId(documentId) });

      if (documentFound) {
         let deletedDocument = await db.collection(collection).deleteOne({ "_id": ObjectId(documentId) });

         return deletedDocument;
      } else {
         return null;
      }
   } catch (error) {
      console.log(error);
   }
}

module.exports = {
   getAll,
   queryAll,
   getOneById,
   saveOne,
   updateOne,
   deleteOne,
};