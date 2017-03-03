var Article = require("../models/article.js");
var mongoose = require("mongoose");

module.exports = function (app) {

    app.get("/api/saved", function (req, res) {
        Article.find({}, function (err, docs) {
            res.json(docs);
        });
    });

    app.post("/api/saved", function (req, res) {

        var articleTitle = req.body.articleToSave.headline.main;
        var articleLink = req.body.articleToSave.web_url;
        var articleDate = req.body.articleToSave.pub_date;

        Article.find({ "title": articleTitle },
            function (err, docs) {
                if (docs.length === 0) {
                    var newArticle = new Article({
                        title: articleTitle,
                        link: articleLink,
                        date: articleDate
                    });
                    newArticle.save(function (err, newArticles) {
                        if (err) return console.error(err);
                        console.log(newArticles);
                    });
                }
            }
        );
    });
};