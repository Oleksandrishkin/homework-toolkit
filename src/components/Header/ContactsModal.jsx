import { useDispatch } from "react-redux";
import { login } from "redux/auth/operation";
import { LinkModalSecond, ModalEmail, ModalForm, ModalH1, ModalPassword, Modalp, Overlay, Submit } from "./Header.styled";
import { NavLink } from "react-router-dom";
import { MainButton } from "components/Button/Button";
import { AiOutlineClose } from "react-icons/ai";
import { addContacts } from "redux/operation";

export const ContactsModal = ()=>{
    const dispatch = useDispatch();

 

    const handleSubmit = (e) => {
      e.preventDefault();
  
      const name = e.currentTarget.elements.name.value;
      const number = e.currentTarget.elements.number.value;
  
      const newContact = {  name, number };
      dispatch(addContacts(newContact));
     
  
      e.currentTarget.reset()
    };
  

  return (
    <>
     
        <Overlay >
          <Modalp>
            <NavLink to='/'><AiOutlineClose
            size={25}
       
            style={{ marginLeft: '570px' }}
          /></NavLink>
          
          <ModalH1>Add Contact</ModalH1>
          <ModalForm  onSubmit={handleSubmit} >
          <label htmlFor="email">
          Name
      <ModalEmail
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
     
      />
    </label>
            <label htmlFor="password">
            Number
              <ModalPassword
               type="tel"
               name="number"
               pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
               title="Phone number must be digits and can contain о spaces, dashes, parentheses and can start with +"
               required
              />
            </label>
            <Submit>
                <MainButton type="submit">Add Contact</MainButton>
          
          </Submit>
          </ModalForm>
          
          
          </Modalp>
        </Overlay>
    
    </>
  );
}