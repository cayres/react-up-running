var Excel = React.createClass({
    displayName: 'Excel',

    getInitialState: function () {
        return { data: this.props.initialData }
    },

    render: function () {
        return (
            React.DOM.table(null,
                React.DOM.thead(null,
                    React.DOM.tr(null,
                        this.props.headers.map(function (title, idx) {
                            return React.DOM.th({ key: idx }, title);
                        })
                    )
                ),
                React.DOM.tbody(null,
                this.state.data.map(function (row, idx) {
                    return (React.DOM.tr({key: idx},
                        row.map(function (cell, idx) {
                            return React.DOM.td({ key: idx }, cell);
                        }))
                    )
                }))
            )
            
        );
    }
});