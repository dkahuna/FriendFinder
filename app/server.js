var express = require('express');
var app = express();
var bodyParser = require("body-parser");

var PORT = process.env.PORT || 8080;

//creating application/json parser
var jsonParser = bodyParser.json();

//create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded( { extended: false } );

// parse various different custom JSON types as JSON
app.use(bodyParser.json( { type: "application/*+json" } ) );

// parse some custom thing into a BUFFER
app.use(bodyParser.raw( { type: "application/vnd.custom-type" } ) );

// parse an HTML body into a string
app.use(bodyParser.text( { type: "text/html" } ) );

require("./routing/apiRoutes.js")(app);
require("./routing/htmlRoutes.js")(app);

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});
