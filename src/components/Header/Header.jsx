import React, { useEffect, useState } from 'react';
import logo from '../logo.svg';
import { BsPersonCircle } from 'react-icons/bs';
import { HeaderNav, HeaderNavigation, HeaderElement, SingUl, Headerlogo } from './Header.styled';
import { MainButton } from '../Button/Button';


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FirstModal } from './FirstModal';
import { SecondModal } from './SecondModal';
import { ThirdModal } from './ThirdModal';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn, selectUserName } from 'redux/auth/selectors';
export const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn)
  const UserName = useSelector(selectUserName)
  return (
    <HeaderElement>
   


   
      <HeaderNav>
        <a href="/"><Headerlogo src={logo} alt="Logo" /></a>
        <HeaderNavigation>
          <li><p>Who we are</p></li>
          <li><p>Contacts</p></li>
          <li><p>Menu</p></li>
        </HeaderNavigation>
        <SingUl>
        {isLoggedIn ? (
  UserName 
) :(
  <>
    <NavLink to='/login'><MainButton type="button">Log In</MainButton></NavLink>
    <NavLink to='/register'><MainButton type="button">Sign Up</MainButton></NavLink>
  </>
)  }
  


        </SingUl>
        




<NavLink to='/userMenu'> <BsPersonCircle  size={50} style={{ marginLeft: '1350px', marginTop: '-90px' }} />
        <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
{/* Same as */}
<ToastContainer /></NavLink>



       
      </HeaderNav>
    
    </HeaderElement>
  );
};
