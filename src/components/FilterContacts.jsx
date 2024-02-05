import { useDispatch } from "react-redux";
import { Input } from "./PhoneBook.styled"
import { changeFilter } from "redux/slice";

export const Filter = ()=>{
    const dispatch = useDispatch();
 
    return(
        <label>
        Find contacts by name
        <Input onChange={e=>dispatch(changeFilter(e.currentTarget.value))} type="text"  />
      </label>
    )
}