import styled from 'styled-components';
import { Wrapper } from '../Global';
import { keyframes } from 'styled-components';

const Move = keyframes`
  0% {
    transform: translate(0,0);
  }
  50%{
    transform: translate(5px,10px);
  }
  100% {
    transform: translate(0,0);
  }
`;

export const FormContainer = styled(Wrapper)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: linear-gradient(45deg, rgb(240 114 179), rgb(37 212 245));
`;
