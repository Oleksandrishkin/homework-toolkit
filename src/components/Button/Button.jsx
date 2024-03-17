import { Button } from "./Button.styled";

export function MainButton(props, click){
    return (
        <Button onClick={props.onClick}>{props.children}</Button> 
    )
}