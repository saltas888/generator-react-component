import React from "react";
import PropTypes from "prop-types";
import "./<%= name %>.css";


export default class <%= nameUp %> extends React.Component {

	constructor(props){
		super(props);
		this.state = {};
	}

	render(){
		return(
			<div><%= nameUp %></div>
		);
	}

}

<%= nameUp %>.propTypes = {
	name: PropTypes.string
};