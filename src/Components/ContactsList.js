import Contact from './Contact';
import ErrorMessage from '../Components/Styled/Login/ErrorMessage';

const ContactsList = ({ contacts, deleteContact, setDataToEdit }) => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {contacts.length !== 0 ? (
        contacts.map((el, i) => (
          <Contact
            key={i}
            el={el}
            deleteContact={deleteContact}
            setDataToEdit={setDataToEdit}
          />
        ))
      ) : (
        <ErrorMessage>Sin elementos</ErrorMessage>
      )}
    </div>
  );
};

export default ContactsList;
