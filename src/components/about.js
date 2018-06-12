import React, {Component} from 'react';
import {connect} from 'react-redux';
import Radium from 'radium'
import { withRouter } from 'react-router-dom'

class About extends Component {

		render() {
			return (
				<div style={comStyles().mainview}>
					About Page
				</div>
			)
		}
}

About.propTypes = {
}

function mapStateToProps(state){
	return {
	}
}

const RadiumHOC = Radium(About)

export default withRouter(connect(

)(RadiumHOC))

// ================================

const comStyles = () => {
	return {
		mainview: {
			textAlign: "center",
			padding: "20px"
		},
	}
}
