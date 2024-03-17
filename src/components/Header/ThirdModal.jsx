import { useState, useEffect} from 'react';

import { AiOutlineClose } from "react-icons/ai";
import { MainButton } from '../Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedIn, selectUserEmail, selectUserName } from 'redux/auth/selectors';
import { logout } from 'redux/auth/operation';
import { NavLink } from 'react-router-dom';
import { Modalp, Overlay } from './Header.styled';

export const ThirdModal = ()=>{
  const dispatch = useDispatch()
  const isLoggedIn = useSelector(selectIsLoggedIn)
  const UserName = useSelector(selectUserName)
  const Email = useSelector( selectUserEmail)
  const handleLogOut = ()=>{
    dispatch(logout())
}
    return(
      <Overlay >
      <Modalp>
      <>
      <NavLink to='/'>
      <AiOutlineClose
        size={25}
      
        style={{ marginLeft: '570px' }}
      />
      </NavLink>
         
      {isLoggedIn ? (
        <>
          <p>Your account:</p>
          <p>Name:{UserName} </p>
          
            <>
              <p>E-mail: {Email}</p>
            
             <NavLink to='/'><MainButton onClick={handleLogOut}>Log Out</MainButton> </NavLink> 
          
            </>
        
        </>
      ) : (
        <>
          <p>You are not there or not logged in to the account</p>
          <NavLink  to='/login'> <MainButton type="button">Log In</MainButton></NavLink>
   <NavLink to='/register'>  <MainButton type="button">Sign Up</MainButton></NavLink>
        </>
      )}
        </>
      </Modalp>
    </Overlay>
    )
}