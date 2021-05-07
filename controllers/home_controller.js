module.exports.home = function(req,res){
    return res.render('home.ejs',{
        title : 'TODO List APP'
    });
}