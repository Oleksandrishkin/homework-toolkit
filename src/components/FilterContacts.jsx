import { Input } from "./PhoneBook.styled";
import { useFilterContactsQuery } from "../redux/APIslice";

export const Filter = () => {
  const {  setFilter } = useFilterContactsQuery(""); 

  const handleChange = (e) => {
    const name = e.currentTarget.value;

    setFilter(name);
  };

  return (
    <label>
      Find contacts by name
      <Input onChange={handleChange} type="text" />
    </label>
  );
};