import { useState, useEffect } from 'react';
import axios from 'axios';
import setAuthToken from '../../utilities/setAuthToken';
import { Redirect } from 'react-router-dom';

// TODO: Move into its own partial file

const Error = (props) => {
  useEffect(() => {
    console.log(props.error)
  }, [])
  return (
    <div className="error-card">
      <h3>There was an issue</h3>
      <p>{props.error.message}</p>
    </div>
  )
}

const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = e => {
    e.preventDefault();

    axios.post(
      `${process.env.REACT_APP_SERVER_URL}/api/login`,
      {email, password}
    ).then( response => {
      localStorage.setItem('jwtToken', response.data.token);
      setAuthToken(response.data.token);
      props.handleAuth(response.data.user);
      setRedirect(true);
    }).catch(setError);
  }
  if (redirect) return <Redirect to="/profile" />
  return(
    <section>
      {error ? <Error error={error} /> : null}
      <h1>LOGIN</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-elem">
          <label htmlFor="email">Email:   </label>
          <input 
            type="email" 
            name="email"
            placeholder="example@example.com"
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div className="form-elem">
          <label htmlFor="password">Password:   </label>
          <input 
            type="password" 
            name="password"
            placeholder="more long more better"
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <input type="submit" value="Login" />
      </form>
    </section>
  );
};
export default Login;