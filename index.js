var express = require('express');
var expressLayouts = require('express-ejs-layouts');


var app = express();
app.use(express.static('./public/'));
app.use('/scripts', express.static(__dirname + '/node_modules/'));


app.use(expressLayouts);
app.set('view engine', 'ejs');




start()

function start() {

    let port = process.env.PORT;
    if (port == null || port == "") {
        port = 8000;
    }
    app.listen(port);
    console.log("listening on port " + port);

    var gc = require('./controllers/getController')(app);

}