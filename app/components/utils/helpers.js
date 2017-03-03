// Include the axios package for performing HTTP requests (promise based alternative to request)
var axios = require("axios");

// NYT API
var apiKey = '46ba128fd7fe4d9bb083047938f7d947';

// Helper functions for making API Calls
var helper = {

    // This function serves our purpose of running the query to geolocate.
    runQuery: function (searchTerm, startYear, endYear) {

        var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";

        queryURL += '?api-key=' + apiKey + '&q=' + searchTerm + '&begin_date=' + startYear + '0101&end_date=' + endYear + '0101';
        console.log(queryURL);

        return axios.get(queryURL).then(function (response) {
            // If get get a result, return that result's formatted address property
            if (response) {
                return response;
            }
            // If we don't get any results, return an empty string
            return "";
        });
    },

    // This function hits our own server to retrieve the record of query results
    getSaved: function () {
        return axios.get("/api/saved");
    },

    // This function posts new searches to our database.
    postSaved: function (article) {
        return axios.post("/api/saved", { articleToSave: article });
    },

    deleteArticle: function (id) {
        return axios.delete("/api/saved/" + id);
    }

};

// We export the API helper
module.exports = helper;
