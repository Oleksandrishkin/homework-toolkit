import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;


export const Wrapper = styled.div`
  padding: 4em;
  background: papayawhip;
  margin-top: 50px;
`;

export const Input = styled.input`
   

  width: 250px;
  height: calc(2.25rem + 2px);
  padding: 0.375rem 0.75rem;
  font-family: inherit;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #bdbdbd;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;



`

export const Button = styled.button`



background-color:#0a0a23;
color: #fff;
border:none; 
border-radius:10px; 
padding:15px;
min-height:30px; 
min-width: 120px;


`

export const Form = styled.form`
/* display: flex; */

  font-size: 1.5em;
flex-direction: column;
width: 500px;
  color: palevioletred;
  margin-left: auto;
  margin-right: auto;
  label{
    display: block;

  } 
`;

