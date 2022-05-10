import { CardButton, CardContainer } from './Styled/ContactCard';
import { StyledText } from './Styled/Global';

const Contact = ({ el, deleteContact, setDataToEdit }) => {
  const { name, number, id } = el;

  const first = name[0].toUpperCase();

  const handleEdit = () => {
    setDataToEdit({
      contactName: name,
      contactNumber: number,
      id,
    });
  };

  return (
    <CardContainer>
      <div>
        <StyledText textColor='#fff' size='xxl'>
          {first}
          {name.substring(1)}
        </StyledText>
        <StyledText textColor='rgba(255, 255,255, 0.5)'>{number}</StyledText>
      </div>
      <div>
        <CardButton data-id={id} onClick={deleteContact}>
          Eliminar
        </CardButton>
        <CardButton onClick={handleEdit}>Editar</CardButton>
      </div>
    </CardContainer>
  );
};

export default Contact;
