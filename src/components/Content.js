import { Route, Redirect } from 'react-router-dom';
import Home from './Pages/Home';
import Auth from './Pages/Auth';
import Profile from './Pages/Profile';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const token = localStorage.getItem('jwtToken');
  return <Route {...rest} render={(renderProps) => ( 
    token ?
    <Component {...rest} {...renderProps} /> :
    <Redirect to="/auth" />
  )}/>
}

const Content = (props) => {
  return(
    <main>
      <Route exact path='/' component={Home} />
      <Route path='/auth' render={(renderProps) => (
        <Auth handleAuth={props.handleAuth} {...renderProps} />
      )}/>
      <PrivateRoute path="/profile" 
        component={Profile} 
        currentUser={props.currentUser} 
        handleAuth={props.handleAuth} 
      />
      {/* <Route path='/profile' render={(renderProps) => (
        <Profile currentUser={props.currentUser} handleAuth={props.handleAuth} {...renderProps} />  )} /> */}
    </main>
  );
};
export default Content;