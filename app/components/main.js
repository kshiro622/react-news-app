// Dependencies
var React = require("react");
var Search = require("./children/search");
var Results = require("./children/results");
var Saved = require("./children/saved");
var helpers = require("./utils/helpers");

// Main component
var Main = React.createClass({

    // Function to get initial state
    getInitialState: function () {
        return {
            searchTerm: "",
            startYear: "",
            endYear: "",
            results: [],
            saved: []
        };
    },

    // The moment the page renders get saved articles from db
    componentDidMount: function () {
        helpers.getSaved().then(function (response) {
            var savedArticles = response.data;
            if (savedArticles !== this.state.saved) {
                this.setState({ saved: savedArticles });
            }
        }.bind(this));
    },

    // If the component changes (i.e. if a search is entered)...
    componentDidUpdate: function () {

        helpers.runQuery(this.state.searchTerm, this.state.startYear, this.state.endYear).then(function (data) {

            var allResults = data.data.response.docs;
            var firstFive = [];

            // For loop to store only first 5 results
            for (var i = 0; i < 5; i++) {
                firstFive.push(allResults[i]);
            }

            // Set state
            if (data !== this.state.results) {
                this.setState({ results: firstFive });
            }
        }.bind(this));

    },
    // Allows childrens to update the parent
    setParentStates: function (term, startYear, endYear) {
        this.setState({ searchTerm: term, startYear: startYear, endYear: endYear });
    },

    // Allows children to save article to db
    saveArticle: function (indexFromResults) {
        helpers.postSaved(this.state.results[indexFromResults]).then(function () { }.bind(this));
        helpers.getSaved().then(function (response) {
            var savedArticles = response.data;
            if (savedArticles !== this.state.saved) {
                this.setState({ saved: savedArticles });
            }
        }.bind(this));
    },

    // Allows children to delete article from db
    deleteArticle: function (idFromSaved) {
        helpers.deleteArticle(idFromSaved).then(function () { }.bind(this));
        helpers.getSaved().then(function (response) {
            var savedArticles = response.data;
            if (savedArticles !== this.state.saved) {
                this.setState({ saved: savedArticles });
            }
        }.bind(this));
    },

    // Render function
    render: function () {
        return (
            <div>

                {/*Nav*/}
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <a className="navbar-brand" href="/">NYT Article Keeper</a>
                        </div>
                        {/*<!-- Collect content for toggling -->*/}
                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav">
                                <li className="active"><a href="/">Home <span className="sr-only">(current)</span></a></li>
                            </ul>
                        </div>
                    </div>
                </nav>

                {/*Main*/}
                <div className="container">
                    <div className="jumbotron">
                        <h1>Article Saver</h1>
                        <h2>New York Times Edition</h2>
                        <hr />
                        <p>Save your favorite articles</p>
                    </div>

                    {/*Components*/}
                    <Search setParentStates={this.setParentStates} />
                    <Results saveArticle={this.saveArticle} results={this.state.results} />
                    <Saved deleteArticle={this.deleteArticle} saved={this.state.saved} />

                </div>

            </div>
        );
    }
});

// Export component
module.exports = Main;