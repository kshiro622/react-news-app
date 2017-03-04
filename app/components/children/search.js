var React = require("react");

var Search = React.createClass({

    // Here we set a generic state associated with the text being searched for
    getInitialState: function () {
        return {
            term: "",
            startYear: "",
            endYear: ""
        };
    },
    // This function will respond to the user input
    handleChangeTerm: function (event) {

        this.setState({ term: event.target.value });

    },
    // This function will respond to the user input
    handleChangeStartYear: function (event) {

        this.setState({ startYear: event.target.value });

    },
    // This function will respond to the user input
    handleChangeEndYear: function (event) {

        this.setState({ endYear: event.target.value });

    },

    // When a user submits...
    handleSubmit: function (event) {
        // prevent the HTML from trying to submit a form if the user hits "Enter" instead of
        // clicking the button
        event.preventDefault();

        // Set the parent to have the search term
        this.props.setParentStates(this.state.term, this.state.startYear, this.state.endYear);
        this.setState({ term: "", startYear: "", endYear: "" });
    },

    // render
    render: function () {
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title">Search</h3>
                </div>
                <div className="panel-body">
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="topic">Topic</label>
                            <input type="text" className="form-control" value={this.state.term} id="search-term" onChange={this.handleChangeTerm} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="start-year">Start Year</label>
                            <input type="text" className="form-control" value={this.state.startYear} id="start-year" onChange={this.handleChangeStartYear} placeholder="e.g. 1999" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="end-year">End Year</label>
                            <input type="text" className="form-control" value={this.state.endYear} id="end-year" onChange={this.handleChangeEndYear} placeholder="e.g. 2014" />
                        </div>
                        <button type="submit" className="btn btn-lg btn-primary" id="search-btn">Search</button>
                    </form>
                </div>
            </div>
        );
    }
});

module.exports = Search;

