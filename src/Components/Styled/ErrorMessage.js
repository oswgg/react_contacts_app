import styled from 'styled-components';

const ErrorMessage = styled.p`
  width: 65%;
  font-size: 12px;
  text-align: center;
  padding: 10px 0;
  margin: 0;
  background: rgba(200, 50, 50, 0.2);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  z-index: 200;
  color: #fff;
`;

export default ErrorMessage;
