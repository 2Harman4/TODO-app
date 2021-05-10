//linking the model
const Task  = require('../models/tasks');

//function
module.exports.home = function(req,res){

    console.log('******Welcome To Home Page*********');
    
    Task.find({},function(err,tasks){
        if(err){
            console.log('error in fetching tasks from  Database');
            return;
        }

        return res.render('home.ejs',{
            title : 'TODO List APP',
            tasksArray: tasks
        });
    });
}