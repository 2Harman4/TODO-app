//linking the model
const Task  = require('../models/tasks');

//function
module.exports.add = function(req,res){

    let formData = req.body;
    console.log('Form data recieved by server:',formData);

    //Populating the database
    Task.create(formData,function(err,newTask){
        if(err){
            console.log('Error in creating the task!!');
            return;
        }

        //Task created
        console.log('****Task Created: ', newTask);

        return res.redirect('/home_no_anim');
    })
    
}