// Dependencies
var mongoose = require("mongoose");

// Schema
var Schema = mongoose.Schema;

// Rules
var articleSchema = new Schema({
    title: String,
    date: String,
    url: String,
    snippet: String,
    time: { type: Date, default: Date.now }
});

// Model
var Article = mongoose.model("Article", articleSchema);

// Export
module.exports = Article;