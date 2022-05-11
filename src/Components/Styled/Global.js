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
  /* background: #202e30; */
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
