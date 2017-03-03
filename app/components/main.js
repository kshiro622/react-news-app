var React = require("react");
var Query = require("./children/query");
var Results = require("./children/results");
var Saved = require("./children/saved");
var helpers = require("./utils/helpers");

var Main = React.createClass({

    getInitialState: function () {
        return {
            searchTerm: "",
            startYear: "",
            endYear: "",
            results: [],
            saved: ""
        };
    },

    // The moment the page renders get the History
    componentDidMount: function () {
        // Get the latest history.
        helpers.getSaved().then(function (response) {
            console.log(response);
            if (response !== this.state.saved) {
                console.log("Saved", response);
                this.setState({ saved: response });
            }
        }.bind(this));
    },

    // If the component changes (i.e. if a search is entered)...
    componentDidUpdate: function () {

        // Run the query for the address
        helpers.runQuery(this.state.searchTerm, this.state.startYear, this.state.endYear).then(function (data) {
            if (data !== this.state.results) {
                console.log("Results", data.data.response.docs);
                this.setState({ results: data.data.response.docs });
            }
        }.bind(this));

        helpers.postSaved(this.state.saved).then(function () {
            console.log("helpers.postSaved");
        }.bind(this));
    },
    // This function allows childrens to update the parent.
    setParentStates: function (term, startYear, endYear) {
        this.setState({ searchTerm: term, startYear: startYear, endYear: endYear });
    },

    setSavedState: function (stateFromResults) {
        this.setState({ saved: stateFromResults })
    },

    render: function () {
        return (
            <div>

                {/*Nav*/}
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <a className="navbar-brand" href="/">NYT Annotator</a>
                        </div>
                        {/*<!-- Collect content for toggling -->*/}
                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav">
                                <li className="active"><a href="/">Home <span className="sr-only">(current)</span></a></li>
                                <li><a href="/saved">Saved Articles</a></li>
                                <li><a href="/saved/notes">Article Notes</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>

                {/*Main*/}
                <div className="container">
                    <div className="jumbotron">
                        <h1>Article Annotator</h1>
                        <h2>New York Times Edition</h2>
                        <hr />
                        <p>Save and annotate your favorite articles</p>
                    </div>
                    <Query setParentStates={this.setParentStates} />
                    <Results setSavedState={this.setSavedState} results={this.state.results} />
                    <Saved saved={this.state.saved} />
                </div>

            </div>
        );
    }
});

module.exports = Main;