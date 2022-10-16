const mongoose = require('mongoose')
//Everything in Mongoose starts with a Schema. 
//organization or structure for a collection insdide a databse
//Essentially, it is a library that allows you to pass documents to a DBMS
//Mongoose is an Object Document Mapping
//defining the structure of your documents and the types of data you're storing
const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
    },
    actor: {
        type: String,
        default: "Not Specified"
    },
    director: {
        type: String,
        default: "Not Specified",
      },
    genre: {
        type: String,
        default: "Not Specified",
      },
    rating: {
        type: Number,
        default: "Not specified",
      },
}); 
const Movie = mongoose.model("movie2", movieSchema)
module.exports = Movie


// // Each schema maps to a MongoDB collection and 
// // defines the shape of the documents within that collection.