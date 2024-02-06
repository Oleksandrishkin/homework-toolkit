import { nanoid } from "nanoid";
import { useDispatch, useSelector } from "react-redux";
import { addName, addNumber  } from "redux/operation";
import { Button, Input } from "./PhoneBook.styled";
import { Form } from "../components/PhoneBook.styled";
import { Contacts } from "../redux/selectors";
import { useState } from "react";

export const FormPhoneBook = ()=>{
  const dispatch = useDispatch();
 

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.currentTarget.elements.name.value;
    const number = e.currentTarget.elements.number.value;

    // const newContact = { id: nanoid(), name, number };
    dispatch(addName(name));
    dispatch(addNumber(number));

    e.currentTarget.reset()
  };

 

   
    return(
        <Form onSubmit={(e) => handleSubmit(e)}>
        <label>
          Name
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label>
          Number
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain о spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <Button type="submit">Add contact</Button>
       
      </Form>
    )
}