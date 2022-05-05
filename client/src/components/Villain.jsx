import React, { useState, useEffect } from "react";
import Cards from './Cards.jsx';

const Villain = (props) => {

  var dealt = true;


  console.log('villain props', props)

  return (
    <div>
      <div className='cards'>
        {
          props.hand.hole.split(' ').map(c => {
            return (
              <Cards card={c}/>
            )
          })
        }

      </div>

    </div>

  )
}

export default Villain;