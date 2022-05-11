import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import helpHttp from '../helpers/helpHttp';

// styles
import ErrorMessage from '../Components/Styled/ErrorMessage';
import { FormContainer } from '../Components/Styled/Form/FormContainer';
import { FormInput, FormSubmit } from '../Components/Styled/Form/FormInput';
import { FormLabel } from '../Components/Styled/Form/FormLabel';
import { FormMessageContainer } from '../Components/Styled/Form/FormMessageContainer';
import FormWrapper from '../Components/Styled/Form/FormWrapper';
import {
  StyledLink,
  StyledText,
  StyledTitle,
} from '../Components/Styled/Global';

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
      setError('All fields are required');
      setTimeout(() => {
        setError(null);
      }, 3000);
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
          setError(res.message);
          setTimeout(() => {
            setError(null);
          }, 3000);
        } else {
          navigate('/login');
          setError(null);
        }
      });
    }
  };

  return (
    <FormContainer>
      <FormWrapper>
        <StyledTitle textColor='#fff'>Register</StyledTitle>
        <form
          onSubmit={handleOnSubmit}
          style={{
            width: '90%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <FormLabel htmlFor='username'>Username</FormLabel>
          <FormInput
            id='username'
            type='text'
            onChange={handleOnChange}
            name='username'
            placeholder='username'
          />
          <FormLabel htmlFor='email'>Email</FormLabel>
          <FormInput
            id='email'
            type='email'
            onChange={handleOnChange}
            name='email'
            placeholder='email'
          />
          <FormLabel htmlFor='password'>Password</FormLabel>
          <FormInput
            pid='password'
            type='password'
            onChange={handleOnChange}
            name='password'
            placeholder='password'
          />
          <FormLabel htmlFor='confirmPass'>Confirm Password</FormLabel>
          <FormInput
            id='confirmPass'
            type='password'
            onChange={handleOnChange}
            name='confirmedPassword'
            placeholder='confirm your password'
          />
          <FormMessageContainer>
            <FormSubmit type='submit' />
            {error && <ErrorMessage>{error}</ErrorMessage>}
          </FormMessageContainer>
        </form>
        <StyledText textColor='rgba(255, 255, 255, 0.6)'>
          Already have an account? <StyledLink to='/login'>Log in</StyledLink>
        </StyledText>
      </FormWrapper>
    </FormContainer>
  );
};

export default Register;
