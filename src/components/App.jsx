import React from "react";
import { nanoid } from "nanoid";
import { useDispatch, useSelector } from "react-redux";
import { addContact, deleteContact, filterContactsByName } from "../redux/slice";
import { Button, Input, Title, Wrapper, Form } from "./PhoneBook.styled";
import { Contacts } from "../redux/selectors";
import { PhoneBook } from "./PhoneBook";
import { FormPhoneBook } from "./FormPhoneBook";
import { Filter } from "./FilterContacts";
import { selectIsLoggedIn } from "redux/auth/selectors";
import { UserMenu } from "./UserMenu";
import { AuthMenu } from "./AuthMenu";


export const App = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn)
  return(
    <>
     {isLoggedIn ? <UserMenu/> :  <AuthMenu/> }
     {/* <FormPhoneBook/>
     <Filter/>
    <PhoneBook/> */}
    </>
   
  )
};