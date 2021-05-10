//linking the model
const Task  = require('../models/tasks');

//function
module.exports.delete = function(req,res){

    // lets see the request from ajax
    console.log('this came from ajax: ',req.body);

    Task.deleteMany({_id: { $in: req.body.selectedArray}}, function(err) {
        if(err){
            console.log("Can't delete tasks..:(");
            return;
        }

        console.log('Tasks deleted Successfully');
        res.send('/home_no_anim');
    })
}