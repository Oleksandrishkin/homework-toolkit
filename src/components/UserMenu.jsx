import { useDispatch, useSelector } from "react-redux"
import { logout } from "redux/auth/operation"
import { selectUserName } from "../redux/auth/selectors"

export const UserMenu = ()=>{
    const UserName = useSelector(selectUserName)
    const dispatch = useDispatch()

const handleLogOut = ()=>{
    dispatch(logout())
}
    return(
        <>
        <h1>Hello, {UserName}</h1>
        <button onClick={handleLogOut} type="button">logout</button>
        
        </>
    )
}