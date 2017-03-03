var React = require("react");

var Result = React.createClass({
    render: function () {
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title">Results</h3>
                </div>
                <div className="panel-body">
                    {/*<ResultArticle />*/}
                    {this.props.results.map(function (response, i) {
                        return (
                            <div className="panel panel-default" key={i}>
                                <div className="panel-heading">
                                    <h3 className="panel-title">
                                        {response.headline.main}
                                        <button className="btn btn-success pull-right" type="submit">Save</button>
                                        <div className="clearfix"></div>
                                    </h3>
                                </div>
                                <div className="panel-body">
                                    <p>{response.pub_date}</p>
                                    <p>{response.snippet}</p>
                                    <p><a href={response.web_url} target="blank">Link to Article</a></p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
});

module.exports = Result;