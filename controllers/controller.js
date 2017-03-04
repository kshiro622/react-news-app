// Dependencies
var mongoose = require("mongoose");

// Require model
var Article = require("../models/article.js");

// Routes
module.exports = function (app) {

    // Route to get all documents from db
    app.get("/api/saved", function (req, res) {
        Article.find({}, function (err, docs) {
            res.json(docs);
        });
    });

    // Route to save article to db
    app.post("/api/saved", function (req, res) {

        // store values in variables
        var articleTitle = req.body.articleToSave.headline.main;
        var articleLink = req.body.articleToSave.web_url;
        var articleSnippet = req.body.articleToSave.snippet;
        var articleDate = req.body.articleToSave.pub_date;

        // Make articleDate more readable
        articleDate = articleDate.slice(5, 8) + articleDate.slice(8, 10) + "-" + articleDate.slice(0, 4) + " " + articleDate.slice(11, 19);

        // Save new article to db, only if it doesn't already exist
        Article.find({ "link": articleLink },
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

    // Route to remove article from db
    app.delete("/api/saved/:id", function (req, res) {
        Article.findByIdAndRemove(req.params.id, function (err, response) {
            if (err) {
                console.log(err);
            }
        });
    });

    // Route to serve index.html
    app.get("*", function (req, res) {
        res.sendFile(__dirname + "/public/index.html");
    });

};