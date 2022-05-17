import { useState, useEffect } from 'react';
import ErrorMessage from './Styled/ErrorMessage';
import { FormInput, FormSubmit } from './Styled/Form/FormInput';
import { FormMessageContainer } from './Styled/Form/FormMessageContainer';
import FormWrapper from './Styled/Form/FormWrapper';
import { CancelButton, StyledTitle } from './Styled/Global';

const initialForm = {
  contactName: '',
  contactNumber: '',
};

const ContactForm = props => {
  const { handleOnSubmit, dataToEdit, formError, handleOnEdit, changeVisible } =
    props;
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

  const handleOnCancel = e => {
    e.preventDefault();
    handleOnEdit();
    changeVisible();
    setForm(initialForm);
  };

  return (
    <FormWrapper>
      <StyledTitle>
        {dataToEdit ? `Edit ${form.contactName}` : 'Create New Contact'}
      </StyledTitle>
      <form
        style={{ width: '90%' }}
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
          {formError && (
            <ErrorMessage textColor='#000'>{formError}</ErrorMessage>
          )}
        </FormMessageContainer>
      </form>
      <CancelButton onClick={handleOnCancel}>Cancel</CancelButton>
    </FormWrapper>
  );
};

export default ContactForm;
