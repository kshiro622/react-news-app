var React = require("react");

var SavedArticle = React.createClass({
    render: function () {
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title">
                        Saved Article
                        <button className="btn btn-danger pull-right" type="submit">Remove</button>
                        <div className="clearfix"></div>
                    </h3>
                </div>
                <div className="panel-body">
                    Article Notes
                </div>
            </div>
        );
    }
});

module.exports = SavedArticle;