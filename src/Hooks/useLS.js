import { useState } from 'react';

const useLS = (key, initialValue) => {
  const [data, setData] = useState(() => {
    const item = JSON.parse(localStorage.getItem(key) || initialValue);
    return item;
  });

  const newData = data => {
    if (data) {
      setData(data);
      localStorage.setItem('userInformation', JSON.stringify(data));
    } else {
      localStorage.removeItem('userInformation');
    }
  };

  return [data, newData];
};

export default useLS;
