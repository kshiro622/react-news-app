var React = require("react");

var Result = React.createClass({
    getInitialState: function () {
        return {
            saved: ""
        };
    },
    handleClick: function (event) {
        event.preventDefault();
        this.setState({
            saved: {
                title: event.target.dataset["title"],
                link: event.target.dataset["link"],
                date: event.target.dataset["date"]
            }
        });
        this.props.setSavedState(this.state.saved);
    },

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
                            <div className="panel panel-info" key={i}>
                                <div className="panel-heading">
                                    <h3 className="panel-title">
                                        {response.headline.main}
                                        <button onClick={this.handleClick} className="btn btn-success pull-right" data-title={response.headline.main} data-date={response.pub_date} data-link={response.web_url}>Save</button>
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
                    }.bind(this))}
                </div>
            </div>
        );
    }
});

module.exports = Result;