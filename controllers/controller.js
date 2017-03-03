var Article = require("../models/article.js");
var mongoose = require("mongoose");

module.exports = function (app) {

    app.get("/api/saved", function (req, res) {
        Article.find({}, function (err, docs) {
            res.json(docs);
        });
    });

    // app.post("/api/saved", function (req, res) {
    //     new Article = new Article
    // });
}