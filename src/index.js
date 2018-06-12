import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router'
import { Route, Switch } from 'react-router'
import { StyleRoot } from 'radium'

import Store, { history } from './store'
import App from './components/app'
import Login from './components/Auth/Login'
import SignUp from './components/Auth/SignUp'
import SignOut from './components/Auth/SignOut'
import VerifyAccount from './components/Auth/VerifyAccount'
import ResetPassword from './components/Auth/ResetPassword'


// dirty trick to force update
const Root = ({ location }) => (
  <Switch>
    <App>
      <Route path='/login' component={Login} location={location} />
      <Route path='/signup' component={SignUp} location={location}/>
      <Route path='/signout' component={SignOut} location={location} />
      <Route path='/verify-account' component={VerifyAccount} location={location} />
      <Route path='/forgot-password' component={ResetPassword} location={location} />
    </App>
  </Switch>
)

const mapStateToProps = ({ router }) => ({ location: router.location })

const AppRoot = connect(mapStateToProps)(({ location }) => <Root location={location} />)

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
  	<ConnectedRouter history={history}>
      <StyleRoot>
        <AppRoot />
      </StyleRoot>
  	</ConnectedRouter>
  </Provider>
  , document.querySelector('.container'))       // we select the html div with class 'container' to inject our component tree into
