import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import helpHttp from '../helpers/helpHttp';
import useLS from '../Hooks/useLS';

// Styles
import { LoginContainer } from '../Components/Styled/Login/LoginContainer';
import LoginWrapper from '../Components/Styled/Login/LoginWrapper';
import { StyledLabel } from '../Components/Styled/Login/LoginLabel';
import ErrorMessage from '../Components/Styled/Login/ErrorMessage';
import { StyledTitle } from '../Components/Styled/Global';
import {
  StyledInput,
  StyledSubmit,
} from '../Components/Styled/Login/LoginInput';

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
        setTimeout(() => {
          setError(null);
        }, 3000);
      });
  };
  return (
    <LoginContainer>
      <LoginWrapper>
        <StyledTitle textColor='#fff'>Login Here</StyledTitle>
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

        {error && <ErrorMessage>{error}</ErrorMessage>}
        <p>
          Don't you have an account? <Link to='/register'>Register</Link>
        </p>
      </LoginWrapper>
    </LoginContainer>
  );
};

export default Login;
