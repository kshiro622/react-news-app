var React = require("react");

var Saved = React.createClass({

    handleRemove: function (id) {
        event.preventDefault();
        this.props.deleteArticle(id);
    },

    render: function () {
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title">Saved</h3>
                </div>
                <div className="panel-body">
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
                                    <p>Date Published: {response.date}</p>
                                    <p>{response.snippet}</p>
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

module.exports = Saved;