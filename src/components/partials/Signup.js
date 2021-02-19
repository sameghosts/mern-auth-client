import axios from 'axios';
import { useState } from 'react';
import setAuthToken from '../../utilities/setAuthToken';
import { Redirect } from 'react-router-dom';

const Signup = (props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword ] = useState('');
  const [redirect, setRedirect] = useState(false);
  // TODO: add form password validation
  const handleSubmit = e => {
    e.preventDefault();
    // axios.get(process.env.REACT_APP_SERVER_URL)
    //   .then(response =>{
    //     console.log(response.data);
    //   })

    axios.post(
      `${process.env.REACT_APP_SERVER_URL}/api/signup`,
      { name, email, password }
    ).then(response => {
      console.log(response.data)
      // TODO: save the token in local storage 
      localStorage.setItem('jwtToken', response.data.token);
      // TODO: set the token to auth header
      setAuthToken(response.data.token);
      // TODO: set user data
      props.handleAuth(response.data.user);
      setRedirect(true);
    }).catch(err => console.log(`Ruro:\n ${err}`))
    // console.log(`Sending up the new user data`, {name, email, password})
  }
  if (redirect) return <Redirect to='/profile'/>
  return(
    <section>
      <h2>SIGNUP</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-elem">
          <label htmlFor="name">Name:   </label>
          <input 
            type="text" 
            name="name"
            placeholder="Display Name"
            onChange={e => setName(e.target.value)}
          />
        </div>
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
        <input type="submit" value="Signup" />
      </form>
    </section>
  );
};
export default Signup;