var React = require("react");
var Query = require("./query");
var Results = require("./results");

var Search = React.createClass({
    render: function () {
        return (
            <div>
                <Query />
                <Results />
            </div >
        );
    }
});

module.exports = Search;