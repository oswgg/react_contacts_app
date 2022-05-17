import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import helpHttp from '../helpers/helpHttp';
import useLS from '../Hooks/useLS';

// Styles
import { FormContainer } from '../Components/Styled/Form/FormContainer';
import FormWrapper from '../Components/Styled/Form/FormWrapper';
import { FormLabel } from '../Components/Styled/Form/FormLabel';
import ErrorMessage from '../Components/Styled/ErrorMessage';
import {
  StyledLink,
  StyledText,
  StyledTitle,
} from '../Components/Styled/Global';
import { FormInput, FormSubmit } from '../Components/Styled/Form/FormInput';
import { FormMessageContainer } from '../Components/Styled/Form/FormMessageContainer';

const Login = () => {
  const [form, setForm] = useState({});
  const [error, setError] = useState(null);
  const { newData } = useLS('userInformation', null);
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
      setError('All fields are required');
      setTimeout(() => {
        setError(null);
      }, 3000);
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
    <FormContainer>
      <FormWrapper>
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
          <FormLabel htmlFor='usernameEmail'>Username</FormLabel>
          <FormInput
            id='usernameEmail'
            placeholder='username or email'
            type='text'
            onChange={handleOnChange}
            name='usernameEmail'
          />
          <FormLabel htmlFor='password'>Password</FormLabel>

          <FormInput
            id='password'
            placeholder='password'
            type='password'
            onChange={handleOnChange}
            name='password'
          />

          <FormMessageContainer>
            <FormSubmit type='submit' value='Login' />
            {error && <ErrorMessage>{error}</ErrorMessage>}
          </FormMessageContainer>
        </form>

        <StyledText textColor='rgba(255, 255, 255, 0.6)'>
          Don't you have an account?{' '}
          <StyledLink to='/register'>Register</StyledLink>
        </StyledText>
      </FormWrapper>
    </FormContainer>
  );
};

export default Login;
