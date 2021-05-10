//linking the model
const Task  = require('../models/tasks');

//function
module.exports.home = function(req,res){

    console.log('omitted the welcoming animation!!');
    
    Task.find({},function(err,tasks){
        if(err){
            console.log('error in fetching tasks from  Database');
            return;
        }

        console.log('data found from database !!');
        return res.render('home_without_animation.ejs',{
            title : 'TODO List APP',
            tasksArray: tasks
        });
    });
}