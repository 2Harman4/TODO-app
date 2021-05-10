//linking the model
const Task  = require('../models/tasks');

//function
module.exports.home = function(req,res){

    console.log('omitted the welcoming animation!!');
    
    return res.render('home_without_animation.ejs',{
        title:'TODO LIST APP'
    });
}