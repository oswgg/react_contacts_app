import styled from 'styled-components';

export const FormInput = styled.input`
  font-family: 'Poppins';
  font-size: 11px;
  border: none;
  width: 90%;
  align-self: flex-start;
  background: rgba(255, 255, 255, 0.15);
  padding: 10px 15px;
  margin-bottom: 25px;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
  color: ${props => (props.black ? '#000' : '#fff')};
  &::placeholder {
    color: ${props => (props.black ? '#000' : 'rgba(255, 255 ,255, 0.8)')};
  }
`;

export const FormSubmit = styled(FormInput).attrs({ type: 'submit' })`
  background: #fff;
  width: 30%;
  align-self: flex-start;
  color: #000;
  margin: 0;
  padding: 10px;
`;
