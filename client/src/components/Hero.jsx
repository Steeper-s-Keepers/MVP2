import React, { useState, useEffect } from "react";
import Cards from './Cards.jsx';

const Hero = (props) => {


  console.log('Hero props', props)

  return (
    <div>
      <div>Hero</div>
      <div>{props.hand.hole}</div>
    </div>
  )
}

export default Hero;