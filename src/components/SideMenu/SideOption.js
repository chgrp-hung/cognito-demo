// See <App> (ie ../app.js) to read documentation on how a React component works
import React, {Component} from 'react';
import {connect} from 'react-redux';
import Radium from 'radium'
import PropTypes from 'prop-types'
// `Link` is a react-router component for routing buttons that redirect you to various urls
import { Link } from 'react-router-dom'

import { toggleSideMenu } from '../../actions/sideMenuActions'

console.log('Link', Link)

class SideOption extends Component {
	render() {
		return (
<Link to={this.props.link} style={comStyles(this.props.sideMenuVisible).mainview} onClick={this.props.toggleSideMenu}>{this.props.text}</Link>
		)
	}
}

console.log('side', SideOption)

SideOption.propTypes = {
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
	toggleSideMenu: PropTypes.func.isRequired,
	sideMenuVisible: PropTypes.bool
}

const RadiumHOC = Radium(SideOption)

function mapStateToProps(state){
	return {
		sideMenuVisible: state.sideMenu.visible
	}
}

export default connect(mapStateToProps, {toggleSideMenu})(RadiumHOC)

// ================================

const comStyles = (sideMenuVisible) => {
	let paramsCSS = {
		color: "rgba(0,0,0,0)"
	}
	if(sideMenuVisible){
		paramsCSS.color = "white"
	}
	return {
		mainview: {
			padding: "5px",
			textAlign: "center",
			width: "100%",
			":hover": {
				color: "red"
			},
			...paramsCSS
		},
	}
}
