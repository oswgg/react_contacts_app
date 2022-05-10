import styled from 'styled-components';
import { Button } from './Global';

export const CardContainer = styled.div`
  background: rgba(100, 100, 100, 0.2);
  backdrop-filter: blur(10px);
  display: flex;
  width: 45%;
  margin: 20px auto;
  flex-direction: column;
  align-items: center;
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 20px 0;
  border-radius: 15px;
`;

export const CardButton = styled(Button)`
  display: inline-block;
  width: 100%;
  margin-top: 5px;
`;
