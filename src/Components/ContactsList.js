const ContactsList = ({ contacts }) => {
  return (
    <div>
      {contacts.map((el, i) => (
        <div key={i}>
          Name: {el.name} {'—'} Number: {el.number}
        </div>
      ))}
    </div>
  );
};

export default ContactsList;
