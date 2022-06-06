import React, { useState, useEffect } from "react";
import Cards from './Cards.jsx';

const Hero = (props) => {


  // console.log('Hero props', props)

  return (
    <div>
      <div className='cards'>
        {
          props.hand.hole.split(' ').map(c => {
            if (props.street > 0) {
              return (
                <Cards card={c}/>
              )
            }
          })
        }

      </div>
    </div>
  )
}

export default Hero;