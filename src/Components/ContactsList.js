import Contact from './Contact';

const ContactsList = ({ contacts, deleteContact, setDataToEdit }) => {
  return (
    <div>
      {contacts ? (
        contacts.map((el, i) => (
          <Contact
            key={i}
            el={el}
            deleteContact={deleteContact}
            setDataToEdit={setDataToEdit}
          />
        ))
      ) : (
        <p>Sin elementos</p>
      )}
    </div>
  );
};

export default ContactsList;
