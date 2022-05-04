import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();
  useEffect(() => {
    const item = JSON.parse(localStorage.getItem('"user"'));
    if (!item) navigate('/login');
  }, [navigate]);

  return (
    <>
      <h1>Hello</h1>
    </>
  );
}

export default App;
