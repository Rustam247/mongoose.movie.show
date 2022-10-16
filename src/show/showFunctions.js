const Show = require("./showModel")

exports.createShow = async (showObject) => {
    try {
        await Show.create(showObject)
    } catch (error) {
        console.log(error)
    }
}

exports.readShow = async (key, filter) => {
    try {
        if (key) {
            return await Show.findOne({ [key]: filter });
        } else {
            return await Show.find({});
        }
    } catch (error) {
        console.log(error)
    }
};

exports.updateShow = async (filterObject, updateObject) => {
    try {
        await Show.updateOne(
            filterObject,
            {$set: updateObject}
        )
    } catch (error){
        console.log(error)
    }
}

exports.deleteShow = async (showObject) => {
    try {
        await Show.deleteOne(
            {title: showObject.title}
            )
    } catch (error) {
        console.log(error)
    }
}

