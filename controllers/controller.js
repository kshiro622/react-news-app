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
        var articleSnippet = req.body.articleToSave.snippet;

        Article.find({ "title": articleTitle },
            function (err, docs) {
                if (docs.length === 0) {
                    var newArticle = new Article({
                        title: articleTitle,
                        link: articleLink,
                        date: articleDate,
                        snippet: articleSnippet
                    });
                    newArticle.save(function (err, newArticles) {
                        if (err) return console.error(err);
                        console.log(newArticles);
                    });
                }
            }
        );
    });

    app.delete("/api/saved/:id", function (req, res) {
        Article.findByIdAndRemove(req.params.id, function (err, response) {
            if (err) {
                console.log(err);
            }
        });
    });
};