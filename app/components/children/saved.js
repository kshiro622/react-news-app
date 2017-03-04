// Require React
var React = require("react");

// Saved component
var Saved = React.createClass({

    // Removes article from saved when "Remove" is clicked
    handleRemove: function (id) {
        event.preventDefault();
        this.props.deleteArticle(id);
    },

    // Render function
    render: function () {
        return (

            // Saved articles panel
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title">Saved Articles</h3>
                </div>
                <div className="panel-body">

                    {/*Create a panel for each saved article*/}
                    {this.props.saved.map(function (response, i) {
                        return (
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    <h3 className="panel-title">
                                        {response.title}
                                        <button onClick={() => this.handleRemove(response._id)} className="btn btn-danger pull-right" type="submit">Remove</button>
                                        <div className="clearfix"></div>
                                    </h3>
                                </div>
                                <div className="panel-body">
                                    <p><em>Date Published:</em> {response.date}</p>
                                    <p><em>Snippet:</em> {response.snippet}</p>
                                    <p><a href={response.link} target="blank">Link to Article</a></p>
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
module.exports = Saved;