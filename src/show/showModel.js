const mongoose = require("mongoose")

const showSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  actor: {
    type: String,
    default: "Not Specified"
  }
});
const Show = mongoose.model("show", showSchema)
module.exports = Show