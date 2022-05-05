import { useState } from 'react';
import { Link } from 'react-router-dom';
import fetchAPI from '../helpers/fetchAPI';

const Login = () => {
  const [form, setForm] = useState({});

  const handleOnChange = ({ target }) => {
    setForm({
      ...form,
      [target.name]: target.value,
    });
  };

  const handleOnSubmit = async e => {
    e.preventDefault();
    const { usernameEmail, password } = form;
    if (!usernameEmail || !password) {
      alert('Completa los campos');
      return;
    }

    const postLogin = async () => {
      const options = {
        endpoint: 'login',
        method: 'POST',
        body: {
          usernameEmail,
          password,
        },
      };
      const data = await fetchAPI(options);
      return data;
    };

    const fetchedAPI = await postLogin();
    localStorage.setItem('userInformation', JSON.stringify(fetchedAPI));
    console.log(localStorage.getItem('userInformation'));
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleOnSubmit}>
        <input type='text' onChange={handleOnChange} name='usernameEmail' />
        <input type='password' onChange={handleOnChange} name='password' />
        <input type='submit' />
      </form>
      <p>
        Don't you have an account? <Link to='/register'>Register</Link>
      </p>
    </div>
  );
};

export default Login;
