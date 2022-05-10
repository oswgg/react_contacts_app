import styled from 'styled-components';

export const StyledText = styled.p`
  font-size: ${props => (props.size === 'xxl' ? '20px' : '12px')};
  margin: 5px 0;
  text-align: center;
  color: ${props => props.textColor};
`;

export const StyledTitle = styled.h1`
  font-family: 'Poppins';
  font-weight: 500;
  font-size: 30px;
  margin: 35px;
  color: ${props => props.textColor};
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 120vh;
  margin: -20px auto;
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

export const Button = styled.button`
  border: none;
  background: rgba(100, 100, 100, 0.2);
  backdrop-filter: blur(1px);
  padding: 15px 15px;
  border-radius: 5px;
  color: #ddd;
`;
