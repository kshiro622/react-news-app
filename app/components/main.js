var React = require("react");
var Search = require("./search");
var Saved = require("./saved");

var Main = React.createClass({
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
                    <Search />
                    <Saved />
                </div>

            </div>
        );
    }
});

module.exports = Main;