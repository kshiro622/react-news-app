var Article = require("../models/article.js");
var mongoose = require("mongoose");

module.exports = function (app) {

    app.get("/api/saved", function (req, res) {
        Article.find({}, function (err, docs) {
            res.json(docs);
        });
    });

    app.post("/api/saved", function (req, res) {
        console.log(req.body);
        // var newArticle = new Article({
        //     title: req.body.title,
        //     link: req.body.link,
        //     date: req.body.date
        // });
        // newArticle.save(function (err, newArticles) {
        //     if (err) return console.error(err);
        // })
    });
}