const {Schema, model} = require('mongoose');


// Define the Schema
const Todo = new Schema({
    title: String,
    description: String
})

// Create the Model
const TodoModel = model('Todo', Todo);

module.exports = TodoModel;