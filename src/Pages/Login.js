import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import helpHttp from '../helpers/helpHttp';
import useLS from '../Hooks/useLS';

const Login = () => {
  const [form, setForm] = useState({});
  const [error, setError] = useState(null);
  const [data, newData] = useLS('userInformation', null);
  const navigate = useNavigate();

  const api = helpHttp();

  const handleOnChange = ({ target }) => {
    setForm({
      ...form,
      [target.name]: target.value,
    });
  };

  const handleOnSubmit = e => {
    e.preventDefault();
    const { usernameEmail, password } = form;
    if (!usernameEmail || !password) {
      alert('Completa los campos');
      return;
    }
    const options = {
      method: 'POST',
      body: { usernameEmail, password },
    };

    api
      .post('login', options)
      .then(res => {
        if (res.error) {
          res.message = res.message || 'Ocurrió un error';
          throw res;
        }
        newData(res);
        navigate('/');
      })
      .catch(error => {
        setError(error.message);
      });
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleOnSubmit}>
        <input type='text' onChange={handleOnChange} name='usernameEmail' />
        <input type='password' onChange={handleOnChange} name='password' />
        <input type='submit' />
      </form>

      {error && <p>{error}</p>}
      <p>
        Don't you have an account? <Link to='/register'>Register</Link>
      </p>
    </div>
  );
};

export default Login;