"use strict";
var React = require('react');

 module.exports= React.createClass({
 	getInitialState: function() {
		return {items: this.props.items};
	},
	handleClick: function() {
		this.setState({
		  items: this.state.items.concat('Item ' + this.state.items.length)
		})
	},
	render:function(){
		return (
			<div>
				<button onClick={this.handleClick}>添加</button>
				<div>饮料</div>
				<ul>
				{(this.state.items || []).map(function(value) {
			        return <li key={value}>{value}</li>
			    })}
			    </ul>
			</div>
		);
	}
});