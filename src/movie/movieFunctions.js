const Movie = require("./movieModel") 

exports.createMovie = async (movieObject) => {
    try {
        await Movie.create(movieObject)
    } catch (error) {
        console.log(error)
    }
}

exports.readMovies = async (key, filter) => {
    try {
      if (key) {
        return await Movie.findOne({ [key]: filter });
      } else {
        return await Movie.find({}); //Returns all objects instead
      }
    } catch (error) {
      console.log(error);
    }
  };
  
exports.updateMovie = async (filterObject, updateObject) => {
  try {
      await Movie.updateOne(filterObject, {$set: updateObject})
  }
  catch (error) {
      console.log(error)
  }
}


exports.deleteMovie = async (movieObject) => {
    try {
        await Movie.deleteOne({title: movieObject.title})
    } catch (error) {
        console.log(error)
    }
}
exports.findMovie = async (movieObject) => {
  try {
   const response = await Movie.findOne({title: movieObject.title})
   console.log(response) 
  }catch (error){
    console.log(error)
  }
}