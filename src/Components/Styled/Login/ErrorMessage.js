import styled from 'styled-components';

const ErrorMessage = styled.p`
  width: 85%;
  text-align: center;
  padding: 10px 0;
  background: rgba(200, 50, 10, 0.2);
  backdrop-filter: blur(10px);
  border-radius: 5px;
  z-index: 200;
  color: #fff;
`;

export default ErrorMessage;
