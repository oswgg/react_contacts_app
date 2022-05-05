import { useState } from 'react';
import fetchAPI from '../helpers/fetchAPI';

const ContactForm = ({ token }) => {
  const [form, setForm] = useState({});

  const handleOnChange = ({ target }) => {
    setForm({
      ...form,
      [target.name]: target.value,
    });
  };

  const handleOnSubmit = async e => {
    e.preventDefault();
    const { contactName, contactNumber } = form;
    if (!contactName || !contactNumber || contactNumber.length < 10) {
      alert('Rellena correctamente los campos');
      return;
    }

    const createContact = async () => {
      const options = {
        endpoint: 'contacts',
        method: 'POST',
        Authorization: `Bearer ${token}`,
        body: {
          name: contactName,
          number: contactNumber,
        },
      };
      const data = await fetchAPI(options);
      return data;
    };
    const fetchedAPI = await createContact();
    console.log(fetchedAPI);
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <input
        type='text'
        name='contactName'
        placeholder='Contact name'
        onChange={handleOnChange}
      />
      <input
        type='number'
        name='contactNumber'
        placeholder='Contact number'
        onChange={handleOnChange}
      />
      <input type='submit' value='Create' />
    </form>
  );
};

export default ContactForm;
