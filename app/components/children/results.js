// Require React
var React = require("react");

// Result component
var Result = React.createClass({

    // Saves article when "Save" button is clicked
    handleClick: function (index) {
        event.preventDefault();
        this.props.saveArticle(index);
    },

    // Render function
    render: function () {
        return (
            // Top 5 Results Panel
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title">Top 5 Results</h3>
                </div>
                <div className="panel-body">

                    {/*Create a panel for each article*/}
                    {this.props.results.map(function (response, i) {
                        var pubDate = response.pub_date;
                        pubDate = pubDate.slice(5, 8) + pubDate.slice(8, 10) + "-" + pubDate.slice(0, 4) + " " + pubDate.slice(11, 19);
                        console.log(pubDate);
                        return (
                            <div className="panel panel-default" key={i}>
                                <div className="panel-heading">
                                    <h3 className="panel-title">
                                        {response.headline.main}
                                        <button onClick={() => this.handleClick(i)} id={i} className="btn btn-success pull-right">Save</button>
                                        <div className="clearfix"></div>
                                    </h3>
                                </div>
                                <div className="panel-body">
                                    <p><em>Date Published:</em> {pubDate}</p>
                                    <p><em>Snippet:</em> {response.snippet}</p>
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

// Export component
module.exports = Result;