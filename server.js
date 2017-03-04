// Dependencies
var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");

// Set up db
mongoose.connect('mongodb://heroku_whprclxk:une33v8gej92d2taojj0i4ehul@ds117830.mlab.com:17830/heroku_whprclxk');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log("Connected.");
});

// Initialize Express
var app = express();
var PORT = process.env.PORT || 8080;

// Use body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Serve static files from public
app.use(express.static("./public"));

// Routes
require("./controllers/controller.js")(app);

// Listing on PORT
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});