var React = require("react");
var ResultArticle = require("./resultArticle");

var Result = React.createClass({
    render: function () {
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title">Search</h3>
                </div>
                <div className="panel-body">
                    <ResultArticle />
                </div>
            </div>
        );
    }
});

module.exports = Result;