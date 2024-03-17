import { useState, useEffect} from 'react';
import {  ModalH1, ModalUserName, ModalPassword, ModalForm, Submit,  LinkModalSecond, Overlay, Modalp, ModalEmail } from './Header.styled';
import { AiOutlineClose } from "react-icons/ai";
import { MainButton } from '../Button/Button';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/operation';

export const SecondModal = ()=>{

  
  const dispath = useDispatch();
  const handleSubmit = (e)=>{
      e.preventDefault();
      const form = e.currentTarget;
      dispath(login({
       
        email: form.elements.email.value,
        password: form.elements.password.value

      }))
      form.reset()
  }
  

  return (
    <>
     
        <Overlay >
          <Modalp>
            <NavLink to='/'><AiOutlineClose
            size={25}
       
            style={{ marginLeft: '570px' }}
          /></NavLink>
          
          <ModalH1>Log In</ModalH1>
          <ModalForm  onSubmit={handleSubmit} >
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
            <MainButton type="submit">Log In</MainButton>
          </Submit>
          </ModalForm>
          
          <LinkModalSecond>
            Don't have an account yet?{" "}
        
   <NavLink to='/register'>  <MainButton type="button">Sign Up</MainButton></NavLink>
          </LinkModalSecond>
          </Modalp>
        </Overlay>
    
    </>
  );
}