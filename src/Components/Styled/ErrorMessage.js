import styled from 'styled-components';

const ErrorMessage = styled.p`
  width: 65%;
  font-size: 11px;
  text-align: center;
  padding: 10px 0;
  margin: 0;
  background: rgba(200, 50, 50, 0.2);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  color: ${props => (props.textColor ? `${props.textColor}` : '#fff')};
`;

export default ErrorMessage;
