import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
  margin: 30px;
  color: ${props => props.textColor};
`;

export const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
  background: #fdfcff;
`;

export const Button = styled.button`
  border: none;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(1px);
  padding: 15px 15px;
  border-radius: 5px;
  color: #ddd;
`;

export const StyledLink = styled(Link)`
  color: aliceblue;
`;

export const CancelButton = styled.button`
  background: rgba(200, 50, 50, 0.2);
  padding: 8px 15px;
  border: none;
  border-radius: 20px;
  color: #000;
  backdrop-filter: blur(15px);
  margin-bottom: 5px;
  font-weight: 400;
  font-size: 11px;
`;

export const NewButton = styled.button`
  position: fixed;
  bottom: 5%;
  right: 5%;
  width: 65px;
  height: 65px;
  background-color: rgba(90, 90, 255, 1);
  border: none;
  border-radius: 50%;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);

  &::after {
    content: '+';
    position: absolute;
    top: 54%;
    left: 51%;
    transform: translate(-50%, -50%) scale(300%);
    color: #fff;
  }
`;
