import { useEffect, useState } from 'react';
function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/api/users')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setUsers([...data]);
      });
  }, []);

  return (
    <div className='App'>
      <h1>Hello World</h1>
      {users.length == 0 ? (
        <></>
      ) : (
        users.map((u, i) => <p key={i}>{u.username}</p>)
      )}
    </div>
  );
}

export default App;
