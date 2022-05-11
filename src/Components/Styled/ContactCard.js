import styled from 'styled-components';
import { Button } from './Global';

export const CardContainer = styled.div`
  background: rgba(240, 240, 240, 0.8);
  backdrop-filter: blur(10px);
  display: flex;
  width: 44%;
  max-width: 300px;
  margin: 20px auto;
  flex-direction: column;
  align-items: center;
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 20px 0;
  border-radius: 15px;
  box-shadow: 0 10px 15px rgba(100, 100, 100, 0.2);
`;

export const CardButton = styled(Button)`
  backdrop-filter: blur(10px);
  display: inline-block;
  width: 100%;
  margin-top: 5px;

  background: ${props =>
    props.delete ? '#e44217' : 'rgba(240, 240, 240, 0.8)'};
  color: ${props => (props.delete ? '#fff' : 'blue')};
  border: ${props => (props.delete ? 'none' : '1px solid blue')};
`;
