import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ContactForm from './Components/ContactForm';
import ContactsList from './Components/ContactsList';
import fetchAPI from './helpers/fetchAPI';

function App() {
  const [userToken, setUserToken] = useState('');
  const [contacts, setContacts] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem('userInformation')).token;
    setUserToken(token);
    if (!token) navigate('/login');

    const getContacts = async () => {
      const options = {
        endpoint: 'contacts',
        method: 'GET',
        Authorization: `Bearer ${token}`,
      };
      const data = await fetchAPI(options);
      setContacts([...data]);
    };

    getContacts();
  }, [navigate]);

  return (
    <>
      <h1>Hello</h1>
      <ContactForm token={userToken} />
      <ContactsList contacts={contacts} />
    </>
  );
}

export default App;
