import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import helpHttp from '../helpers/helpHttp';
import useLS from '../Hooks/useLS';

import LoginWrapper from '../Components/Styled Login/LoginWrapper';
import {
  StyledInput,
  StyledSubmit,
} from '../Components/Styled Login/StyledInput';
import { StyledWrapper } from '../Components/Styled Login/StyledWrapper';
import { StyledLabel } from '../Components/Styled Login/StyledLabel';
import StyledTitle from '../Components/Styled Login/StyledTitle';

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
    <StyledWrapper>
      <LoginWrapper>
        <StyledTitle>Login Here</StyledTitle>
        <form
          onSubmit={handleOnSubmit}
          style={{
            width: '90%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <StyledLabel htmlFor='usernameEmail'>Username</StyledLabel>
          <StyledInput
            id='usernameEmail'
            placeholder='username or email'
            type='text'
            onChange={handleOnChange}
            name='usernameEmail'
          />
          <StyledLabel htmlFor='password'>Password</StyledLabel>

          <StyledInput
            id='password'
            placeholder='password'
            type='password'
            onChange={handleOnChange}
            name='password'
          />
          <StyledSubmit type='submit' />
        </form>

        {error && <p>{error}</p>}
        <p>
          Don't you have an account? <Link to='/register'>Register</Link>
        </p>
      </LoginWrapper>
    </StyledWrapper>
  );
};

export default Login;
