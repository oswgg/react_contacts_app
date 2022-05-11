import styled from 'styled-components';

export const NewContactContainer = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(100, 100, 100, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(8px);
  position: absolute;
  z-index: 200;
  top: 0;
  transform: ${props => (props.visible ? '' : 'translateY(100%)')};
  transition: transform 300ms;
`;
