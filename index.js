const express = require('express');
const app = express();
const port = 8000;

//static files
app.use(express.static('./assets'));

//setting the template engine
app.set({
    'view engine':'ejs',
    'views':'./views'
});

//the main router
app.use('/',require('./routes/index'));


//checking if server is on or not
app.listen(port,function(err){
    
    if(err){
        console.log(`Error in starting the server: ${err}`);
        return;
    }

    console.log(`Server is up and running on port: ${port}`);
})