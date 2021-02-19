import { Route } from 'react-router-dom';
import Home from './Pages/Home';
import Auth from './Pages/Auth';
import Profile from './Pages/Profile';

const Content = (props) => {
  return(
    <main>
      <Route exact path='/' component={Home} />
      <Route path='/auth' render={(renderProps) => (
        <Auth handleAuth={props.handleAuth} {...renderProps} />
      )}/>
      <Route path='/profile' component={Profile} />
    </main>
  );
};
export default Content;