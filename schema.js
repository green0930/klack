const mongoose = require('mongoose')
const Schema = mongoose.Schema

const MessagesSchema = new Schema({
    messages: {
        sender: String,
        message: String,
        timestamp: Date
    },
  users: {
      name: String, 
      active: Boolean},
})
//Registers the "User" model with mogoose so it can be used anywhere
module.exports = mongoose.model("Messages", MessagesSchema)


