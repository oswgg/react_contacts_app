import styled from 'styled-components';

const FormWrapper = styled.div`
  width: 90%;
  z-index: 100;
  background: linear-gradient(
    rgba(134, 154, 133, 0.05),
    rgba(255, 255, 255, 0.07) 100%
  );
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  padding-bottom: 15px;
  align-items: center;
  position: relative;
  z-index: 1;
  overflow: hidden;
`;

export default FormWrapper;
