import React from 'react'
import { Heroban } from '../Components/Heroban';
import { Slider } from '../Components/Slider';
import { StartVybing } from '../Components/StartVybing';
import { Estimateerning } from '../Components/Estimateerning';
import { Faq } from '../Components/Faq';


export const Home = () => {
  return (
   <>
   <Heroban/>
   <Slider/>
   <StartVybing/>
   <Estimateerning/>
   <Faq/>
   
   </>
  );
};
