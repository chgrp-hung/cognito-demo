import React, {Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import Radium from 'radium'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { xMidBlue } from '../../stylesJS/base_colors'

import { setUser, setUserToReduxState } from '../../actions/auth_actions'
import {signInUser, forgotPassword, retrieveUserFromLocalStorage} from '../../api/aws/aws_cognito'

class Login extends Component {

	constructor(){
		super()
		this.state = {
			email: "",
			password: "",
			errorMessage: null,
			loading: false
		}
  }

	componentDidMount(){
		const savedEmail = localStorage.getItem('User_Email')
		if(savedEmail){
			this.setState({
				email: savedEmail
      })
		}
		retrieveUserFromLocalStorage()
			.then((data)=>{
        console.log('data', data)
        this.props.setUserToReduxState(data)
			})
	}

	handleChange(attr, event){
		this.setState({
			[attr]: event.target.value
		})
	}

	signin(){
		this.setState({loading: true})
		signInUser({
			email: this.state.email,
			password: this.state.password
		}).then((userProfileObject)=>{
			localStorage.setItem('User_Email', this.state.email)
      this.props.setUser(userProfileObject)
      this.props.history.push('/profile')
		})
		.catch((err)=>{
			this.setState({
				errorMessage: err.message,
				loading: false
			})
		})
	}

	redirectTo(route){
		this.props.history.push(route)
	}


	render(){
		return (
			<div style={comStyles().mainview}>
				<div style={comStyles().entrance}>
					<img src='static/images/aws_logo.png' style={comStyles().logo} />
					<h1 style={comStyles().landlordText}>User Login</h1>
					<form style={comStyles().form}>
						<div className='form-group'>
							<label style={comStyles().formText}>Email</label>
							{/* Field name determines the name of the variables being passed to handleSubmit(this.props.signinLandlord) */}
							<input value={this.state.email} onChange={this.handleChange.bind(this, 'email')} type="email" className='form-control' style={comStyles().formInput} />
						</div>
						<div className='form-group'>
							<label style={comStyles().formText}>Password</label>
							<input value={this.state.password} onChange={this.handleChange.bind(this, 'password')} type="password" className='form-control' style={comStyles().formInput} />
						</div>
						{
							this.state.loading
							?
							<div style={comStyles().loadingBox}>
								<img src='static/images/loading.gif' style={comStyles().loadingGif} />
							</div>
							:
							<button onClick={this.signin.bind(this)} style={comStyles().signupButton} type='button' className='btn btn-primary btn-block'>Sign in</button>
						}
					</form>
					{
						this.state.errorMessage
						?
						<div className='alert alert-danger' style={comStyles().errorMessage}>
							{this.state.errorMessage}
							<b onClick={()=>this.setState({errorMessage: ""})} style={comStyles().messageClose}>&times;</b>
						</div>
						:
						null
          }
          <Link style={comStyles().signup} to={'/signup'}>Sign Up</Link>
          <Link style={comStyles().verify} to={'/verify_account'}>Verify Account</Link>
          <Link style={comStyles().forgot} to={'/forgot_password'}>Forgot Password</Link>
				</div>
			</div>
		);
	}
}

Login.propTypes = {
	handleSubmit: PropTypes.func
};

const RadiumHOC = Radium(Login);

// if there is an error, it will appear on the state tree
const mapStateToProps = ({ location }) => ({ location })

export default connect(mapStateToProps, { setUser, setUserToReduxState }, null)(RadiumHOC)


// =========================================================


const comStyles = () => {
	return {
		mainview: {
			backgroundColor: xMidBlue,
			width: "100%",
			height: "100%",
			margin: "0",
			left: "0",
			top: "0",
			display: "flex",
			justifyContent: "center",
		},
		entrance: {
			display: "flex",
			flexDirection: "column",
			margin: "auto",
			justifyContent: "center"
		},
		form: {
			width: "500px",
			margin: "auto",
			"@media (max-width: 600px), and (max-height: 740px)": {
				width: "90%"
			}
		},
		formText: {
			color: "black",
			fontSize: "1.2rem",
			fontWeight: "bold",
		},
		formInput: {
			fontSize: "1.2rem",
			textAlign: "center",
			backgroundColor: "rgba(0,0,0,0.05)"
		},
		landlordText: {
			color: "black",
			fontWeight: "bold",
			textAlign: "center",
			margin: "15px auto"
		},
		signupButton: {
			color: "white",
			fontSize: "1.2rem",
			fontWeight: "bold"
		},
		logo: {
			height: "auto",
			width: "200px",
			margin: "30px auto"
		},
		signup: {
			color: "black",
			fontSize: "1.2rem",
			textAlign: "center",
			margin: "50px 0px 30px 0px",
			cursor: "pointer"
		},
		verify: {
			color: "black",
			fontSize: "1.2rem",
			textAlign: "center",
			margin: "5px",
			cursor: "pointer"
		},
		forgot: {
			color: "black",
			fontSize: "1.2rem",
			textAlign: "center",
			margin: "5px",
			cursor: "pointer"
		},
		errorMessage: {
			width: "500px",
			margin: "15px auto",
			"@media (max-width: 600px), and (max-height: 740px)": {
				width: "90%"
			}
		},
		loadingBox: {
			width: "500px",
			margin: "auto",
			display: "flex",
			flexDirection: "row",
			justifyContent: "center",
			alignItems: "center",
			"@media (max-width: 600px), and (max-height: 740px)": {
				width: "90%"
			}
		},
		loadingGif: {
			width: "50px",
			height: "50px"
		},
		messageClose: {
			float: "right",
			fontSize: "1rem",
			cursor: "pointer"
		}
	}
}