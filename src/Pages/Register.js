import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import helpHttp from '../helpers/helpHttp';

const Register = () => {
  const [form, setForm] = useState({});
  const [matchedPass, setMatchedPass] = useState(false);
  const [error, setError] = useState(null);

  const api = helpHttp();
  const navigate = useNavigate();

  const handleOnChange = ({ target }) => {
    setForm({
      ...form,
      [target.name]: target.value,
    });
  };

  const handleOnSubmit = e => {
    e.preventDefault();
    const { username, email, password, confirmedPassword } = form;
    if (!username || !password || !confirmedPassword) {
      alert('Completa los campos');
      return;
    }
    if (confirmedPassword !== password) {
      setMatchedPass(false);
      return;
    }
    setMatchedPass(true);
    if (matchedPass) {
      const options = {
        body: {
          username,
          email,
          password,
        },
      };
      api.post('users', options).then(res => {
        if (res.error) {
          setError(res.error);
        } else {
          navigate('/login');
          setError(null);
        }
      });
    }
  };

  return (
    <>
      <h1>Register</h1>
      <form onSubmit={handleOnSubmit}>
        <input
          type='text'
          onChange={handleOnChange}
          name='username'
          placeholder='username'
        />
        <input
          type='email'
          onChange={handleOnChange}
          name='email'
          placeholder='email'
        />
        <input
          type='password'
          onChange={handleOnChange}
          name='password'
          placeholder='password'
        />
        <input
          type='password'
          onChange={handleOnChange}
          name='confirmedPassword'
          placeholder='confirm your password'
        />
        <input type='submit' />
      </form>
      {error && (
        <div>
          <p>{error}</p>
        </div>
      )}
    </>
  );
};

export default Register;
