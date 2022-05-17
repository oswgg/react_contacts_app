import Contact from './Contact';
import ErrorMessage from './Styled/ErrorMessage';

const ContactsList = props => {
  const { contacts, deleteContact, handleOnEdit, changeVisible } = props;

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: '20px' }}>
      {contacts.length !== 0 ? (
        contacts.map((el, i) => (
          <Contact
            key={i}
            el={el}
            deleteContact={deleteContact}
            handleOnEdit={handleOnEdit}
            changeVisible={changeVisible}
          />
        ))
      ) : (
        <ErrorMessage>
          Sin elementos. Crea un contacto para iniciar
        </ErrorMessage>
      )}
    </div>
  );
};

export default ContactsList;
