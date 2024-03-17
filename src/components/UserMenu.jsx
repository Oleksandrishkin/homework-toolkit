import { useDispatch, useSelector } from "react-redux"
import { logout } from "redux/auth/operation"
import { selectUserName } from "../redux/auth/selectors"
import { FormPhoneBook } from "./FormPhoneBook"
import { Filter } from "./FilterContacts"
import { PhoneBook } from "./PhoneBook"
import { MainButton } from "./Button/Button"
import { NavLink } from "react-router-dom"

export const UserMenu = ()=>{

    return(
        <>
  <NavLink to='/addContact'>  <MainButton type="button">Add Contact</MainButton></NavLink>
     <Filter/>
    <PhoneBook/>
        
        </>
    )
}