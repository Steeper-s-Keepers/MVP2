import React, { useState, useEffect } from "react";
import Cards from './Cards.jsx';

const Board = (props)=> {

  console.log('board props', props)

  return (
    <div>
      <div className='cards'>
        {
          props.board.split(' ').map(c => {
            return (
              <Cards card={c}/>
            )
          })
        }

      </div>
    </div>


  )
}

export default Board;