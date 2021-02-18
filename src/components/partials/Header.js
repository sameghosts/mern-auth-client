import { Link } from 'react-router-dom';
const Header = (props) => {
  let style = {
    backgroundColor: 'chartreuse',
    borderBottom: '3px solid black',
    margin: 0,
    padding: '1em 0'
  }
  return(
    <header style={style}>
      <h1>This is a website!</h1>
      <nav>
        <Link to="/">Home</Link>{'  |  '}
        <Link to="/auth">Auth</Link>{'  |  '}
        <Link to="/profile">Profile</Link>
      </nav>
    </header>
    
  );
};
export default Header;