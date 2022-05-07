import { useState, useEffect } from 'react';

const initialForm = {
  contactName: '',
  contactNumber: '',
};

const ContactForm = ({ handleOnSubmit, dataToEdit }) => {
  const [form, setForm] = useState(initialForm);

  useEffect(() => {
    if (dataToEdit) {
      setForm(dataToEdit);
    } else {
      setForm(initialForm);
    }
  }, [dataToEdit]);

  const handleOnChange = ({ target }) => {
    setForm({
      ...form,
      [target.name]: target.value,
    });
  };

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        handleOnSubmit(form);
      }}
    >
      <input
        type='text'
        name='contactName'
        placeholder='Contact name'
        value={form.contactName}
        onChange={handleOnChange}
      />
      <input
        type='number'
        name='contactNumber'
        placeholder='Contact number'
        value={form.contactNumber}
        onChange={handleOnChange}
      />
      <input type='submit' value='Create' />
    </form>
  );
};

export default ContactForm;
