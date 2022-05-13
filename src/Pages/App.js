import { useState } from 'react';

import ContactForm from '../Components/ContactForm';
import ContactsList from '../Components/ContactsList';

// Styles
import { Wrapper, StyledTitle, NewButton } from '../Components/Styled/Global';
import ErrorMessage from '../Components/Styled/ErrorMessage';
import { Button } from '../Components/Styled/Global';
import { Header } from '../Components/Styled/Header';
import { NewContactContainer } from '../Components/Styled/NewContact';
import useContacts from '../Hooks/useContacts';

function App() {
  const [visible, setVisible] = useState(false);
  const [formError, setFormError] = useState(null);

  const {
    data,
    contacts,
    createContact,
    updateContact,
    handleOnEdit,
    deleteContact,
    logOut,
    error,
    dataToEdit,
  } = useContacts();

  const handleSubmit = form => {
    const { contactName, contactNumber } = form;
    if (!contactName || !contactNumber) {
      setFormError('All fields are required');
      setTimeout(() => {
        setFormError(null);
      }, 3000);
      return;
    }

    if (contactNumber.length !== 10) {
      setFormError('El numero de telefono debe tener 10 dígitos');
      setTimeout(() => {
        setFormError(null);
      }, 3000);
      return;
    }

    setVisible(false);
    if (form.id) {
      updateContact(form);
    } else {
      createContact(form);
    }
  };

  return (
    <Wrapper>
      <NewContactContainer visible={visible}>
        <ContactForm
          handleOnSubmit={handleSubmit}
          handleOnEdit={handleOnEdit}
          dataToEdit={dataToEdit}
          setVisible={setVisible}
          formError={formError}
        />
      </NewContactContainer>
      <Header>
        <StyledTitle textColor='rgba(255,255,255, 0.9)'>
          <span style={{ fontWeight: '100' }}>Hello,</span> {data?.user}
        </StyledTitle>
        <Button onClick={logOut} style={{ marginRight: '5%' }}>
          Log out
        </Button>
      </Header>

      {error ? (
        <ErrorMessage>{error}</ErrorMessage>
      ) : (
        <ContactsList
          contacts={contacts}
          deleteContact={deleteContact}
          handleOnEdit={handleOnEdit}
          setVisible={setVisible}
        />
      )}
      <NewButton onClick={() => setVisible(true)}></NewButton>
    </Wrapper>
  );
}

export default App;
