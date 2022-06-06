import React, { useState, useEffect } from "react";
import Cards from './Cards.jsx';

const Board = (props)=> {

  // console.log('board props', props)

  var limit = 0;

  if (props.street === 2) {
    limit = 3;
  } else if (props.street === 3) {
    limit = 4;
  } else if (props.street === 4) {
    limit = 5;
  }

  return (
    <div>

      <div className='cards'>

        {
          props.board.split(' ').map((c, i) => {
            if (i < limit) {
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

export default Board;