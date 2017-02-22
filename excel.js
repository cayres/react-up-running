var Excel = React.createClass({
    displayName: 'Excel',
    render: function(){
        return (
            React.DOM.table(null,
                React.DOM.thead(null,
                    React.DOM.tr(null,
                        this.props.headers.map(function(title, idx){
                            return React.DOM.th({key: idx}, title);
                        })
                    )
                )
            )
        );
    }
});