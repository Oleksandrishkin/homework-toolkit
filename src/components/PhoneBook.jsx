import { useDispatch, useSelector } from "react-redux";
import { selectContacts, selectFilterValue ,selectVisibleContacts,} from "../redux/selectors";
import { deleteContact,  fetchContacts, filterContactsByName } from "redux/operation";
import { Button, Title, Wrapper } from "./PhoneBook.styled";
import { FormPhoneBook } from "./FormPhoneBook";
import { useEffect, useState } from "react";

export const PhoneBook = ()=>{
    const dispatch = useDispatch();
  const contacts = useSelector(selectVisibleContacts)
  
  // const filterValue = useSelector(selectFilterValue)
useEffect(()=>{
  dispatch(fetchContacts())
}, [dispatch])
  
  

 
  const deletePhone = (contactId) => {
    dispatch(deleteContact(contactId));
  };

  return (
    <Wrapper>
      <Title>Phone Book</Title>
    
    
      <Title>Contacts</Title>
      <ul>
        {contacts.map(({ id, name, number }) => {
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