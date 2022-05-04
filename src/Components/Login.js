import { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [form, setForm] = useState({});

  const handleOnChange = ({ target }) => {
    setForm({
      ...form,
      [target.name]: target.value,
    });
  };

  const handleOnSubmit = e => {
    e.preventDefault();
  };

  return (
    <div>
      <h1>Login</h1>
      <form>
        <input type='text' onChange={handleOnChange} name='username' />
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
