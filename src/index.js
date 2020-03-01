const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const PORT = 4001;

//middleware
app.use(express.json());
app.use(express.static(path.resolve(__dirname, '../client/build')));
app.use(cors());

// db
const connection = require('./dbConnection');
connection();

//routes
app.use('/api', require('./routes/api/todo.routes'));

app.listen(PORT, () => console.log(`server on port ${PORT}`));