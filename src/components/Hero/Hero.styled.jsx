import styled from "styled-components";
import heroBackground from './HeroBackround.jpg';
const mobile =  480;
const tablet = 768;
const desktop = 1200;
export const HeroSection = styled.section`
  background-color: #2f303a;

  padding-bottom: 100px;
  padding-top: 100px;

 

  background-image: linear-gradient(
    to right,
    rgba(47, 48, 58, 0.4),
    rgba(47, 48, 58, 0.4)
  ),
  url(${heroBackground});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const HeroH1 = styled.h1`
  color: white;
  font-family: 'Montserrat Alternates';

text-align: center;
 margin-bottom: 100px;

 font-size: 60px;
 



`;

export const HeroUl = styled.ul`
display: flex;
justify-content:  center;


`

export const HeroText = styled.p`
  color: white;
  font-family: 'Montserrat Alternates';
 



font-weight: 500;


`;


export const HeroData = styled.p`
color: white;
font-family:'Montserrat Alternates';




`




export const HeroSubmit = styled.button`

  margin-left: 5px;
  width: 45px;
  height: 42px;
  background: #FFB36C;
  border-radius: 0px 10px 10px 0px; 
  border: 0 0 0 2px; 


`;
export const HeroSpan = styled.span`
  width: 144px;
  height: 3px;
  background-color: white;
  display: inline-block;
  transform: rotate(-90deg);
  

  
`;


export const ContainerText = styled.div`

display:flex;
margin-bottom: 100px;
justify-content: center;
text-aling: center;
`

export const Field = styled.input`
  background: #D9D9D9;
  border-radius: 10px;
  border: none;
  

  
`;








export const TextContainer = styled.div`
margin-bottom: 100px;
display: flex;
align-items: center; 
justify-content: center;

`