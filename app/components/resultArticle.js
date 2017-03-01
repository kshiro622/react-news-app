var React = require("react");

var ResultArticle = React.createClass({
    render: function () {
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title">
                        Result Article
                        <button className="btn btn-success pull-right" type="submit">Save</button>
                        <div className="clearfix"></div>
                    </h3>
                </div>
                <div className="panel-body">
                    Article Info
                </div>
            </div>
        );
    }
});

module.exports = ResultArticle;