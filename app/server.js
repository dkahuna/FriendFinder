var express = require('express');
var app = express();
var bodyParser = require("body-parser");
var path = require("path");

var PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded( { extended: true } ));
app.use(bodyParser.text());

// parse various different custom JSON types as JSON
app.use(bodyParser.json( { type: "application/*+json" } ) );

// parse some custom thing into a BUFFER
app.use(bodyParser.raw( { type: "application/vnd.custom-type" } ) );

app.use(express.static("app/public"));

require("./routing/apiRoutes.js")(app);
require("./routing/htmlRoutes.js")(app);

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});
