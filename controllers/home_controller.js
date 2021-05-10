//linking the model
const Task  = require('../models/tasks');

//function
module.exports.home = function(req,res){
    
    Task.find({},function(err,tasks){
        if(err){
            console.log('error in fetching tasks from  Database');
            return;
        }

        console.log('data found from database !!');

        return res.render('home.ejs',{
            title : 'TODO List APP',
            tasksArray: tasks
        });
    });
}