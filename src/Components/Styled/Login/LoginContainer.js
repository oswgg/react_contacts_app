import { Wrapper } from '../Global';
import styled from 'styled-components';
export const LoginContainer = styled(Wrapper)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

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
