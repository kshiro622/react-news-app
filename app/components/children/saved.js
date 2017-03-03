var React = require("react");
var SavedArticle = require("./savedArticle");

var Saved = React.createClass({
    render: function () {
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title">Saved</h3>
                </div>
                <div className="panel-body">
                    <SavedArticle />
                </div>
            </div>
        );
    }
});

module.exports = Saved;