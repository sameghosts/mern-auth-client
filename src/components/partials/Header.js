import { Link } from 'react-router-dom';
const Header = (props) => {
  let style = {
    backgroundColor: 'chartreuse',
    borderBottom: '3px solid black',
    margin: 0,
    padding: '1em 0'
  }

  let conditionalLinks = props.currentUser ?
    <nav >
      <Link to="/" className="nav-link">Home</Link>{'  |  '}
      <Link to="/profile" className="nav-link">Profile</Link>
      <span  className="nav-link" onClick={e => props.handleAuth(null)}>Logout</span>
      {/* TODO Logout link styling and functionality */}
    </nav> :
    <nav >
      <Link to="/" className="nav-link">Home</Link>{'  |  '}
      <Link to="/auth" className="nav-link">Login or Signup</Link>
    </nav> 

    
  return(
    <header style={style}>
      <h1>This is a website!</h1>
      {conditionalLinks}
    </header>
    
  );
};
export default Header;