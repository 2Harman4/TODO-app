const mongoose = require('mongoose');

//create and connect to todo_list_db
mongoose.connect('mongodb://localhost/todo_list_db');

//acquiring the connection
const db = mongoose.connection;

//CHECKING CONNECTION

//error
db.on('error', console.error.bind(console,'Error connecting to database!'));

//succes
db.once('open',function(){
    console.log("Successfully connected to database");
})