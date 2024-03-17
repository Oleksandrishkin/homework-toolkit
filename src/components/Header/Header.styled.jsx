import styled from "styled-components";

export const HeaderNav = styled.div`
position: relative;





`

export const HeaderElement = styled.header`

background: white;
height: 80px;

`
export const HeaderNavigation = styled.ul`
  display: flex;
  margin-left: 400px;
  margin-top: -40px;

  & > li:not(:last-child) {
    margin-right: 30px;
  }
`;

export const SingUl = styled.ul`
margin-left: 1000px;
margin-top: -60px;

& > button:not(:last-child) {
    margin-right: 30px;
  }
`




export const Headerlogo = styled.img`

margin-left: 70px;

`

export const Overlay = styled.div`
position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 1200;

`


export const Modalp = styled.div`
position: absolute;
top: 50%;
left: 50%;    

padding: 40px;
border-radius: 25px;

background-color: white;

transform: translate(-50%, -50%) scale(1);
transition: transform 500ms cubic-bezier(0.4, 0, 0.2, 1);

@media (min-width: 320px) {
  width: 450px;
  max-height: 609px;
  height: 100%;
  overflow: scroll;
  
}

@media (min-width: 1200px) {
   width: 600px;
   height: 534px;
}

`



export const ModalH1 = styled.h1`
margin-left: 250px;

`
export const ModalForm = styled.form`
  margin-left: 80px;
  margin-top: 40px;


  `
 
export const ModalUserName = styled.input`
  width: 440px;
  height: 50px;
  border-radius: 10px;
  background: #E4E4E4;
  margin-top: 10px; 
  display: block; 
  margin-bottom: 30px;
  padding-left: 15px;
`;

export const ModalEmail = styled.input`
  width: 440px;
  height: 50px;
  border-radius: 10px;
  background: #E4E4E4;
  margin-top: 10px; 
  display: block; 
  margin-bottom: 30px;
  padding-left: 15px;
`;

export const ModalPassword = styled.input`
  width: 440px;
  height: 50px;
  border-radius: 10px;
  background: #E4E4E4;
  margin-top: 10px; 
  display: block; 
  padding-left: 15px;
`;

export const Submit = styled.div`
margin-left: 170px;
margin-top: 50px;



`
export const LinkModal = styled.p`

margin-left: 160px;
margin-top: 20px;
`

export const LinkModalSecond = styled.p`

margin-left: 160px;
margin-top: 80px;
`

