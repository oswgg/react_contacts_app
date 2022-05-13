import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useLS from './useLS';
import helpHttp from '../helpers/helpHttp';

const api = helpHttp();

const useContacts = () => {
  const [contacts, setContacts] = useState([]);
  const [data, newData] = useLS('userInformation', null);
  const [error, setError] = useState(null);
  const [dataToEdit, setDataToEdit] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const token = data?.token;

    if (!token) return navigate('/login');

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

  const createContact = form => {
    const { contactName, contactNumber } = form;

    const options = {
      Authorization: `Bearer ${data.token}`,
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
      Authorization: `Bearer ${data.token}`,
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

  const handleOnEdit = (data = null) => setDataToEdit(data);

  const deleteContact = ({ target }) => {
    const id = target.dataset.id;
    const options = {
      Authorization: `Bearer ${data.token}`,
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

  return {
    data,
    contacts,
    createContact,
    updateContact,
    handleOnEdit,
    deleteContact,
    logOut,
    error,
    dataToEdit,
  };
};

export default useContacts;
