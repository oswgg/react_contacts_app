import styled from 'styled-components';

export const StyledWrapper = styled.div`
  height: 100vh;
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #2c3e50;

  &:before {
    content: '';
    position: absolute;
    width: 200px;
    height: 200px;
    top: 180px;
    left: -80px;
    border-radius: 50%;
    background: red;
  }
`;
