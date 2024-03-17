
import { HeroSection,Field, HeroH1, HeroText, HeroData,  HeroSubmit, HeroSpan  , TextContainer} from './Hero.styled';
import { BiSearch } from "react-icons/bi";

import './styled.css'

import { useState } from 'react';



export const Hero = ({getCityName}) => {
  const [cityName, setCityName] = useState('');
  const [currentDay, setCurrentDay] = useState('');

 
  
  const currentDate = new Date();

  
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const currentDayOfWeek = daysOfWeek[currentDate.getDay()];
  const day = currentDate.getDate();
const year = currentDate.getFullYear()



const months = [
  "January", "February", "March", "April",
  "May", "June", "July", "August",
  "September", "October", "November", "December"
];

const currentMonth = months[currentDate.getMonth()];
  return (    
    <HeroSection>
      <HeroH1>Phone Book</HeroH1>    
    <TextContainer>
    <HeroText>Create your personal list of favorite contacts <br></br> and always be aware of the Phone Book.</HeroText>
      <HeroSpan></HeroSpan>
      <HeroData>{currentMonth} {year} <br></br> {currentDayOfWeek}, {day}th</HeroData>
    </TextContainer>
         
     
    </HeroSection>
  );
}