import styled from 'styled-components';

const FormWrapper = styled.div`
  width: 90%;
  z-index: 100;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  padding-bottom: 15px;
  align-items: center;
  position: relative;
  z-index: 1;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

export default FormWrapper;
