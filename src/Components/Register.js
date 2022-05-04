import { useState } from 'react';
import fetchAPI from '../helpers/fetchAPI';

const Register = () => {
  const [form, setForm] = useState({});
  const [matchedPass, setMatchedPass] = useState(false);

  const handleOnChange = ({ target }) => {
    setForm({
      ...form,
      [target.name]: target.value,
    });
  };

  const handleOnSubmit = async e => {
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
      const postUser = async () => {
        const options = {
          endpoint: 'users',
          method: 'POST',
          body: {
            username,
            email,
            password,
          },
        };
        const data = await fetchAPI(options);
        return data;
      };

      const fetchedAPI = await postUser();
      console.log(fetchedAPI?.error ?? fetchedAPI.message);
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
    </>
  );
};

export default Register;
