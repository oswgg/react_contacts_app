import { useState } from 'react';

const useVisible = (initialValue = false) => {
  const [visible, setVisible] = useState(initialValue);

  const changeVisibility = () => setVisible(!visible);

  return {
    visible,
    changeVisibility,
  };
};

export default useVisible;
