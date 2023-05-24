import { useState } from 'react'

import ContactForm from '../Components/ContactForm'
import ContactsList from '../Components/ContactsList'

// Styles
import ErrorMessage from '../Components/Styled/ErrorMessage'
import { Header } from '../Components/Styled/Header'
import { BlurredContainer } from '../Components/Styled/BlurredContainer'
import useContacts from '../Hooks/useContacts'
import {
   Wrapper,
   StyledTitle,
   NewButton,
   Button,
} from '../Components/Styled/Global'
import NavModal from '../Components/NavModal'
import useVisible from '../Hooks/useVisible'

// Images or svg
import menu from '../Assets/images/menu.svg'

function App() {
   const formModal = useVisible()
   const navModal = useVisible()
   const [formError, setFormError] = useState(null)

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
   } = useContacts()

   const handleSubmit = form => {
      const { contactName, contactNumber } = form
      if (!contactName || !contactNumber) {
         setFormError('All fields are required')
         setTimeout(() => {
            setFormError(null)
         }, 3000)
         return
      }

      if (contactNumber.length !== 10) {
         setFormError('El numero de telefono debe tener 10 dígitos')
         setTimeout(() => {
            setFormError(null)
         }, 3000)
         return
      }

      formModal.changeVisibility()
      if (form.id) {
         updateContact(form)
      } else {
         createContact(form)
      }
   }

   return (
      <Wrapper>
         <BlurredContainer visible={formModal.visible}>
            <ContactForm
               handleOnSubmit={handleSubmit}
               handleOnEdit={handleOnEdit}
               dataToEdit={dataToEdit}
               changeVisible={formModal.changeVisibility}
               formError={formError}
            />
         </BlurredContainer>

         <BlurredContainer visible={navModal.visible}>
            <NavModal
               logOut={logOut}
               changeVisible={navModal.changeVisibility}
            />
         </BlurredContainer>

         <Header>
            <StyledTitle textColor='rgba(255,255,255, 0.9)'>
               <span style={{ fontWeight: '100' }}>Hello,</span> {data?.user}
            </StyledTitle>
            <Button onClick={() => navModal.changeVisibility()}>
               <img src={menu} />
            </Button>
         </Header>

         {error ? (
            <ErrorMessage>{error}</ErrorMessage>
         ) : (
            <ContactsList
               contacts={contacts}
               deleteContact={deleteContact}
               handleOnEdit={handleOnEdit}
               changeVisible={formModal.changeVisibility}
            />
         )}

         <NewButton onClick={formModal.changeVisibility}></NewButton>
      </Wrapper>
   )
}

export default App
