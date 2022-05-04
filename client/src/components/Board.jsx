import React, { useState, useEffect } from "react";
import Cards from './Cards.jsx';

const Board = (props)=> {

  console.log('board props', props)

  return (
    <div>
      <div>Board</div>
      <Cards cards={props.board} />
    </div>

  )
}

export default Board;