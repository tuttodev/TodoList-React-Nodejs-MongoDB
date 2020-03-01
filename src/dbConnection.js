const mongoose = require('mongoose');

const connect = async () => {
    const connection = await mongoose.connect('mongodb://127.0.0.1/todoList', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    });

    connection && console.log('connected')
}

module.exports = connect;