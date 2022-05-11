import { useState, useEffect } from 'react';
import ErrorMessage from './Styled/ErrorMessage';
import { FormInput, FormSubmit } from './Styled/Form/FormInput';
import { FormMessageContainer } from './Styled/Form/FormMessageContainer';
import FormWrapper from './Styled/Form/FormWrapper';
import { StyledTitle } from './Styled/Global';

const initialForm = {
  contactName: '',
  contactNumber: '',
};

const ContactForm = ({ handleOnSubmit, dataToEdit, error, setVisible }) => {
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
    <FormWrapper>
      <StyledTitle>
        {dataToEdit ? `Edit ${form.contactName}` : 'Create New Contact'}
      </StyledTitle>
      <form
        onSubmit={e => {
          e.preventDefault();
          handleOnSubmit(form);
          setForm(initialForm);
        }}
      >
        <FormInput
          black
          type='text'
          name='contactName'
          placeholder='Contact name'
          value={form.contactName}
          onChange={handleOnChange}
        />
        <FormInput
          black
          type='number'
          name='contactNumber'
          placeholder='Contact number'
          value={form.contactNumber}
          onChange={handleOnChange}
        />
        <FormMessageContainer>
          <FormSubmit type='submit' value={dataToEdit ? 'Confirm' : 'Create'} />
          {error && <ErrorMessage>{error}</ErrorMessage>}
        </FormMessageContainer>
        <button
          onClick={e => {
            e.preventDefault();
            setVisible(false);
          }}
        >
          Cancel
        </button>
      </form>
    </FormWrapper>
  );
};

export default ContactForm;
