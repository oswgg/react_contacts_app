import styled from 'styled-components';
import { Button } from './Global';

export const SocialItem = styled.a`
  margin-bottom: 15px;
  width: 80%;
  display: flex;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  text-decoration: none;
  color: #000;
  border: 1px solid rgba(255, 255, 255, 0.15);
`;

export const SocialItemImg = styled.img`
  margin-left: 45px;
`;

export const SocialItemText = styled.p`
  margin-left: 30px;
`;

export const LogOut = styled(Button)`
  width: 80%;
  background: rgba(200, 50, 50, 0.2);
  border: 1px solid rgba(200, 50, 50, 0.2);
  backdrop-filter: blur(1px);
  color: #222;
`;

export const CancelModal = styled.button`
  position: absolute;
  width: 50px;
  height: 50px;
  background: rgba(200, 50, 50, 0.2);
  border-radius: 50%;
  backdrop-filter: blur(15px);
  color: rgba(200, 10, 70, 0.8);
  font-size: 15px;
  bottom: 120px;
  border: 1px solid rgba(200, 50, 50, 0.2); ;
`;
