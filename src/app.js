require("./db/connection");
const mongoose = require('mongoose')
const yargs = require("yargs")
const { 
    createMovie, 
    readMovies,
    updateMovie,
    deleteMovie, 
    findMovie,
} = require("./movie/movieFunctions")
const {
    createShow, 
    readShow, 
    updateShow, 
    deleteShow
} = require("./show/showFunctions")

////////////// MOVIE ////////////////////
const app = async (yargsObject) => {
    try {
        if (yargsObject.create) {
            //////////// CREATE /////////////
            await createMovie({
                title: yargsObject.title, 
                actor: yargsObject.actor,
                director: yargsObject.director,
                genre: yargsObject.genre,
                rating: yargsObject.rating,
            })
        } 
        else if (yargsObject.read) {
            console.log(await readMovies(yargsObject.key, yargsObject.filter));
        } 
        else if (yargsObject.update) {
            ///////////////// UDPATE ///////////////////
            await updateMovie({[yargsObject.key]: yargsObject.value}, {[yargsObject.updateKey]: yargsObject.updateValue})
        }
        else if (yargsObject.delete) {
            ///////////// DELETE //////////////////////
            await deleteMovie({ title: yargsObject.title, actor: yargsObject.actor })
        } 
        else if (yargsObject.find) {
            ///////////////FIND////////////////////
            await findMovie({title: yargsObject.title, actor: yargsObject.actor, rating: yargsObject.rating})
        } 
        ////////////// SHOW ////////////////////
        else if (yargsObject.createTV){
            await createShow({title: yargsObject.title, actor: yargsObject.actor})
        }
        else if (yargsObject.readTV){
            console.log(await readShow (yargsObject.key, yargsObject.filter))
        }
        else if (yargsObject.updateTV){
            await updateShow({[yargsObject.key]: yargsObject.value}, {[yargsObject.updateKey]: yargsObject.updateValue})
        }
        else if (yargsObject.deleteTV){
            await deleteShow({ title: yargsObject.title, actor: yargsObject.actor})
        }
        else {
            console.log("Incorrect command")
        }
        await mongoose.disconnect()
    } catch (error) {
        await mongoose.disconnect()
        console.log(error)

    }
}
 //// node src/app.js --updateTitle --title 2222 --newTitle 4444



app(yargs.argv)