const Contact = ({ el, deleteContact, setDataToEdit }) => {
  const { name, number, id } = el;

  const handleEdit = () => {
    setDataToEdit({
      contactName: name,
      contactNumber: number,
      id,
    });
  };

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ margin: '5px' }}>
        Name: {name} {'—'} Number: {number}
      </div>
      <button data-id={id} onClick={deleteContact}>
        Eliminar
      </button>
      <button onClick={handleEdit}>Editar</button>
    </div>
  );
};

export default Contact;
