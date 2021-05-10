const mongoose = require('mongoose');

//lets create a schema for a task
const taskSchema = new mongoose.Schema({
    
    description :{
        type : String
    },
    category :{
        type : String
    },
    date :{
        type: String
    }
});

//linking with the database
//Task becomes the Collection in database todo_list_db,,defined by taskSchema
const Task = mongoose.model('Task',taskSchema);

//finally exporting---should be added to controller-----------
module.exports = Task;