var path = require("path");
// Main "/" Route. This will redirect to our rendered React application
module.exports = function (app) {
    app.get("/", function (req, res) {
        res.sendFile(__dirname + "/public/index.html");
    });
}