import Contact from './Contact';
import ErrorMessage from './Styled/ErrorMessage';

const ContactsList = props => {
  const { contacts, deleteContact, handleOnEdit, setVisible } = props;

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: '20px' }}>
      {contacts.length !== 0 ? (
        contacts.map((el, i) => (
          <Contact
            key={i}
            el={el}
            deleteContact={deleteContact}
            handleOnEdit={handleOnEdit}
            setVisible={setVisible}
          />
        ))
      ) : (
        <ErrorMessage>Sin elementos</ErrorMessage>
      )}
    </div>
  );
};

export default ContactsList;
