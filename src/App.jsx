"use strict";
var React = require('react');

 module.exports= React.createClass({
 	getInitialState: function() {
		return {items: this.props.items};
	},
	render:function(){
		return (
			<div>
				<div>饮料</div>
				<ul>
				{(this.state.items || []).map(function(value) {
			        return <li>{value}</li>
			    })}
			    </ul>
			</div>
		);
	}
});