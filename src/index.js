import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { StyleRoot } from 'radium'

import Store from './store'
import App from './components/app'
import Login from './components/Auth/Login'
import SignUp from './components/Auth/SignUp'
import SignOut from './components/Auth/SignOut'
import VerifyAccount from './components/Auth/VerifyAccount'
import ResetPassword from './components/Auth/ResetPassword'

// This is a component tree that will be injected into index.html <div class='container'></div>
// The <Provider store={Store}> component is one provided by Redux. The `Store` is imported from `./store.js`
// The <Router> component is one provided by React-Router
      // browserHistory manages url routing (react-router)
      // <Route path='/'> creates a url with '/' appended. eg 'www.mywebsite.com/'
      // <IndexRoute component={Home}> sets <Home> as the default component for display
      // <Route path='about' component={About}> sets <About> as the component for display when the url is 'www.mywebsite.com/about'
      // If we add another <Route path='123'> nested inside <Route path='about' component={About}>, the url is 'www.mywebsite.com/about/123'
ReactDOM.render(
  <Provider store={Store}>
  	<Router>
      <StyleRoot>
        <Switch>
          <Route exact path='/' component={App} />
          <Route path='/login' component={Login} />
          <Route path='/signup' component={SignUp} />
          <Route path='/signout' component={SignOut} />
          <Route path='/verify_account' component={VerifyAccount} />
          <Route path='/forgot_passwowrd' component={ResetPassword} />
        </Switch>
      </StyleRoot>
  	</Router>
  </Provider>
  , document.querySelector('.container'))       // we select the html div with class 'container' to inject our component tree into
