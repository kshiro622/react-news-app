var React = require("react");

var Query = React.createClass({
    render: function () {
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title">Search</h3>
                </div>
                <div className="panel-body">
                    <form>
                        <div className="form-group">
                            <label for="topic">Topic</label>
                            <input type="text" className="form-control" id="topic" />
                        </div>
                        <div className="form-group">
                            <label for="start-year">Start Year</label>
                            <input type="date" className="form-control" id="start-year" placeholder="e.g. 1999" />
                        </div>
                        <div className="form-group">
                            <label for="end-year">End Year</label>
                            <input type="date" className="form-control" id="end-year" placeholder="e.g. 2014" />
                        </div>
                        <button type="submit" className="btn btn-info">Search</button>
                    </form>
                </div>
            </div>
        );
    }
});

module.exports = Query;

