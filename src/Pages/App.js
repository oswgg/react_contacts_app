import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ContactForm from '../Components/ContactForm';
import ContactsList from '../Components/ContactsList';
import helpHttp from '../helpers/helpHttp';
import useLS from '../Hooks/useLS';

// Styles
import { Wrapper, StyledTitle } from '../Components/Styled/Global';
import ErrorMessage from '../Components/Styled/ErrorMessage';
import { Button } from '../Components/Styled/Global';

function App() {
  const [user, setUser] = useState({});
  const [contacts, setContacts] = useState([]);
  const [dataToEdit, setDataToEdit] = useState(null);
  const [error, setError] = useState(null);
  const [data, newData] = useLS('userInformation', null);

  const navigate = useNavigate();
  const api = helpHttp();

  useEffect(() => {
    const token = data?.token;

    if (!token) {
      navigate('/login');
      return;
    }

    setUser({
      token: data.token,
      username: data.user,
    });

    const options = {
      Authorization: `Bearer ${token}`,
    };

    api
      .get('contacts', options)
      .then(res => {
        if (res.error) {
          res.message = res.message || 'Ocurrió un error';
          throw res;
        }
        setContacts([...res]);
      })
      .catch(error => setError(error.message));
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
      Authorization: `Bearer ${user.token}`,
      body: {
        name: contactName,
        number: contactNumber,
      },
    };
    api.post('contacts', options).then(res => {
      setContacts([...contacts, res.newContact]);
    });
  };

  const updateContact = form => {
    const { contactName, contactNumber, id } = form;

    const options = {
      Authorization: `Bearer ${user.token}`,
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
      setDataToEdit(null);
    });
  };

  const deleteContact = ({ target }) => {
    const id = target.dataset.id;
    const options = {
      Authorization: `Bearer ${user.token}`,
      body: {
        id,
      },
    };
    api.del('contacts', options).then(res => {
      const newData = contacts.filter(el => el.id !== Number(id));
      setContacts(newData);
    });
  };

  const logOut = () => {
    newData(null);
    navigate('/login');
  };

  return (
    <Wrapper>
      <div
        style={{
          width: '95%',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <StyledTitle textColor='#000'>
          <span style={{ fontWeight: '100' }}>Hello,</span> {user.username}
        </StyledTitle>
        <Button onClick={logOut}>Log out</Button>
      </div>

      {dataToEdit && <p>Editando: {dataToEdit.contactName}</p>}

      <ContactForm handleOnSubmit={handleSubmit} dataToEdit={dataToEdit} />

      {error ? (
        <ErrorMessage>{error}</ErrorMessage>
      ) : (
        <ContactsList
          contacts={contacts}
          deleteContact={deleteContact}
          setDataToEdit={setDataToEdit}
        />
      )}
    </Wrapper>
  );
}

export default App;
