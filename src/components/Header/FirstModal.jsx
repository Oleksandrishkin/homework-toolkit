
import { useState } from 'react';
import { Overlay, Modalp, ModalH1, ModalUserName, ModalEmail, ModalPassword, ModalForm, Submit, LinkModal, LinkModalSecond } from './Header.styled';
import { AiOutlineClose } from "react-icons/ai";
import { MainButton } from '../Button/Button';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operation';
export const FirstModal = ()=>{

  const dispatch = useDispatch();
    const handleSubmit = (e)=>{
        e.preventDefault();
        const form = e.currentTarget;
        dispatch(register({

            name: form.elements.name.value, 
            email: form.elements.email.value,
            password: form.elements.password.value

        }))
        form.reset()
    }
  

return(
<>
<Overlay >
          <Modalp>
            <NavLink to='/'>  <AiOutlineClose
    size={25}
 
    style={{ marginLeft: '570px' }}
  /></NavLink>
        
  <ModalH1>Sign Up</ModalH1>
  <ModalForm  onSubmit={handleSubmit} >
    <label htmlFor="username">
      Username
      <ModalUserName
        placeholder="Username"
        id="username"
        type="text"
        name="name"
       
      />
    </label>
    <label htmlFor="email">
      E-mail
      <ModalEmail
        id="email"
        placeholder="E-mail"
        type="email"
        name="email"
     
      />
    </label>
    <label htmlFor="password">
      Password
      <ModalPassword
        id="password"
        placeholder="Password"
        type="password"
        name="password"
        
      />
    </label>
    <Submit>
      <MainButton type="submit">Sign Up</MainButton>
    </Submit>
  </ModalForm>
  <LinkModal>
    Already have an account?{" "}
    <NavLink  to='/login'> <MainButton type="button">Log In</MainButton></NavLink>

  </LinkModal> 
          </Modalp>
        </Overlay>

</>
   
)
}