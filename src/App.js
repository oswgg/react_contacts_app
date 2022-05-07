import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ContactForm from './Components/ContactForm';
import ContactsList from './Components/ContactsList';
import helpHttp from './helpers/helpHttp';

function App() {
  const [userToken, setUserToken] = useState('');
  const [contacts, setContacts] = useState(null);
  const [dataToEdit, setDataToEdit] = useState(null);

  const navigate = useNavigate();
  const api = helpHttp();

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem('userInformation')).token;
    if (!token) {
      navigate('/login');
      return;
    }
    setUserToken(token);

    const options = {
      Authorization: `Bearer ${token}`,
    };

    api.get('contacts', options).then(data => {
      setContacts([...data]);
    });
  }, []);

  const handleSubmit = form => {
    const { contactName, contactNumber } = form;
    if (!contactName || !contactNumber) {
      alert('Rellena correctamente campos');
      return;
    }

    if (!(contactNumber.length === 10)) {
      alert('El numero de telefono debe tener 10 dígitos');
      return;
    }

    if (form.id) {
      updateContact(form);
    } else {
      createContact(form);
    }
  };

  const createContact = form => {
    const { contactName, contactNumber } = form;

    const options = {
      Authorization: `Bearer ${userToken}`,
      body: {
        name: contactName,
        number: contactNumber,
      },
    };
    api.post('contacts', options).then(res => {
      setContacts([...contacts, res.newContact]);
      setDataToEdit(null);
    });
  };

  const updateContact = form => {
    const { contactName, contactNumber, id } = form;

    const options = {
      Authorization: `Bearer ${userToken}`,
      body: {
        name: contactName,
        number: contactNumber,
        id,
      },
    };

    api.put('contacts', options).then(res => {
      const newData = contacts.map(el =>
        el.id === Number(id) ? options.body : el
      );
      setContacts(newData);
    });
  };

  const deleteContact = ({ target }) => {
    const id = target.dataset.id;
    const options = {
      Authorization: `Bearer ${userToken}`,
      body: {
        id,
      },
    };
    api.del('contacts', options).then(res => {
      const newData = contacts.filter(el => el.id !== Number(id));
      setContacts(newData);
    });
  };

  return (
    <>
      <h1>Hello</h1>
      <ContactForm handleOnSubmit={handleSubmit} dataToEdit={dataToEdit} />
      <ContactsList
        contacts={contacts}
        deleteContact={deleteContact}
        setDataToEdit={setDataToEdit}
      />
    </>
  );
}

export default App;
