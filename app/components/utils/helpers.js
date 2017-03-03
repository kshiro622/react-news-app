// Include the axios package for performing HTTP requests (promise based alternative to request)
var axios = require("axios");

// NYT API key
var apiKey = '46ba128fd7fe4d9bb083047938f7d947';

// Helper functions for making API Calls
var helper = {

    // Runs query to NYT API
    runQuery: function (searchTerm, startYear, endYear) {

        var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";

        queryURL += '?api-key=' + apiKey + '&q=' + searchTerm + '&begin_date=' + startYear + '0101&end_date=' + endYear + '0101';
        console.log(queryURL);

        return axios.get(queryURL).then(function (response) {
            // If get get a result, return the result
            if (response) {
                return response;
            }
            // If we don't get any results, return an empty string
            return "";
        });
    },

    // Saves article to db
    getSaved: function () {
        return axios.get("/api/saved");
    },

    // Posts saved articles to db
    postSaved: function (article) {
        return axios.post("/api/saved", { articleToSave: article });
    },

    // Deletes articles from db
    deleteArticle: function (id) {
        return axios.delete("/api/saved/" + id);
    }

};

// We export the API helper
module.exports = helper;
