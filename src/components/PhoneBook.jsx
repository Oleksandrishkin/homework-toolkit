import { useDispatch, useSelector } from "react-redux";
import { Contacts, getFilterValue } from "../redux/selectors";
import { deleteContact, fetchContacts, filterContactsByName } from "redux/operation";
import { Button, Title, Wrapper } from "./PhoneBook.styled";
import { FormPhoneBook } from "./FormPhoneBook";
import { useEffect, useState } from "react";

export const PhoneBook = ()=>{
    const dispatch = useDispatch();
  const contacts = useSelector(Contacts)
  
  const filterValue = useSelector(getFilterValue)
useEffect(()=>{
  dispatch(fetchContacts())
}, [dispatch])
  
  const visibleContacts =  contacts.filter((contact )=>{
console.log(contact);
    return  contact.name.toLowerCase().includes(filterValue)
  })
   console.log(visibleContacts);
 
  const deletePhone = (contactId) => {
    dispatch(deleteContact(contactId));
  };

  return (
    <Wrapper>
      <Title>Phone Book</Title>
    
    
      <Title>Contacts</Title>
      <ul>
        {visibleContacts.map(({ id, name, number }) => {
          return (
            <Title key={id}>
              <p>
                {name}: {number}
              </p>
              <Button type="button" onClick={() => deletePhone(id)}>
                Delete
              </Button>
            </Title>
          );
        })}
      </ul>
    </Wrapper>
  );
}