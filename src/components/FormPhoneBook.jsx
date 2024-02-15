import { useDispatch } from "react-redux";
import { Button, Input } from "./PhoneBook.styled";
import { Form } from "../components/PhoneBook.styled";
import { useAddContactMutation } from "../redux/APIslice"; 

export const FormPhoneBook = () => {
  const dispatch = useDispatch();
  const [addContact] = useAddContactMutation(); 

  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = e.currentTarget.elements.name.value;
    const number = e.currentTarget.elements.number.value;

    try {
      await addContact({ name, number }); 
      e.currentTarget.reset();
    } catch (error) {
      console.error('Failed to add contact:', error);
    }
  };

  return (
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
  );
};