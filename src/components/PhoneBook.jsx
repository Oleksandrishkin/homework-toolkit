import { useDispatch, useSelector } from "react-redux";
import { Contacts } from "../redux/selectors";
import { deleteContact, filterContactsByName } from "redux/slice";
import { Button, Title, Wrapper } from "./PhoneBook.styled";
import { FormPhoneBook } from "./FormPhoneBook";

export const PhoneBook = ()=>{
    const dispatch = useDispatch();
  const contacts = useSelector(Contacts);
  const handleFilter = (e) => {
    dispatch(filterContactsByName(e.currentTarget.value));
  };

  
  const vidibleContacts =  contacts.filter((contact, e)=>{
    const filterText = e.currentTarget.value
    return  contact.name.toLowerCase().includes(filterText)
  })
   
 
  const deletePhone = (contactId) => {
    dispatch(deleteContact(contactId));
  };

  return (
    <Wrapper>
      <Title>Phone Book</Title>
    
     <FormPhoneBook></FormPhoneBook>
      <Title>Contacts</Title>
      <ul>
        {vidibleContacts.map(({ id, name, number }) => {
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