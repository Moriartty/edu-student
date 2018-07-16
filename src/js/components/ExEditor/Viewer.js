require('./ueditor.parse');

var Views=React.createClass({
    propTypes:{
        html:React.PropTypes.string.isRequired
    },
    componentDidMount:function(){
        uParse('#viewer');
    },
    render: function() {
        return (
            <div id="viewer" dangerouslySetInnerHTML={{__html:this.props.html}}></div>
        );
    }
});

module.exports = Views;