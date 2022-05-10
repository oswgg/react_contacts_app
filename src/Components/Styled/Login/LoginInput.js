import styled from 'styled-components';

export const StyledInput = styled.input`
  font-family: 'Poppins';
  font-size: 13px;
  border: none;
  width: 90%;
  background: rgba(100, 100, 100, 0.2);
  backdrop-filter: blur(1px);
  padding: 14px 10px;
  margin-bottom: 25px;
  border-radius: 3px;
  color: #fff;
`;

export const StyledSubmit = styled(StyledInput).attrs({ type: 'submit' })`
  background: #fff;
  width: 95%;
  color: #000;
  margin-bottom: 10px;
  padding: 10px;
`;
