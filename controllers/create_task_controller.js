module.exports.add = function(req,res){
    // return res.render('home.ejs',{
    //     title : 'TODO List: Contact Created'
    // });

    console.log('contact created!!!!!!!!');
    return res.redirect('/home_no_anim');
}