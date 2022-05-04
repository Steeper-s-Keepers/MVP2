import React, { useState, useEffect } from "react";
import Cards from './Cards.jsx';

const Villain = (props) => {


  console.log('villain props', props)

  return (
    <div>
      <div>Villain</div>
      <div>{props.hand.hole}</div>
    </div>

  )
}

export default Villain;