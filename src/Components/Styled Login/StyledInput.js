import styled from 'styled-components';

export const StyledInput = styled.input`
  font-family: 'Poppins';
  font-size: 13px;
  border: none;
  width: 90%;
  background: rgba(100, 100, 100, 0.2);
  padding: 10px 10px;
  margin-bottom: 25px;
  border-radius: 3px;
  color: #fff;
`;

export const StyledSubmit = styled(StyledInput)`
  background: #fff;
  color: #000;
  padding: 10px;
`;
