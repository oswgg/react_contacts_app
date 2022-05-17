import { CardButton, CardContainer } from './Styled/ContactCard';
import { StyledText } from './Styled/Global';

const Contact = ({ el, deleteContact, handleOnEdit, changeVisible }) => {
  const { name, number, id } = el;

  const first = name[0].toUpperCase();

  const handleEdit = () => {
    handleOnEdit({
      contactName: name,
      contactNumber: number,
      id,
    });
    changeVisible();
  };

  return (
    <CardContainer>
      <div style={{ flexGrow: '1' }}>
        <div
          style={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyItems: 'center',
            alignItems: 'center',
          }}
        >
          <StyledText
            textColor='#000'
            size='xxl'
            style={{ flexGrow: '1', verticalAlign: 'middle' }}
          >
            {first}
            {name.substring(1)}
          </StyledText>
          <StyledText textColor='rgba(0, 0,0, .5)'>{number}</StyledText>
        </div>
      </div>
      <div>
        <CardButton onClick={handleEdit}>Editar</CardButton>
        <CardButton data-id={id} onClick={deleteContact} delete>
          Eliminar
        </CardButton>
      </div>
    </CardContainer>
  );
};

export default Contact;
