import React, { useState, useEffect } from "react";

const Display = (props) => {

  // const [winner, setWinner] = useState('');

  // useEffect(() => {
  //   if (props.hand.hero.win) {
  //     setWinner({hero: props.hand.hero})
  //   }
  // })

  var winner = props.hand.winner;
  console.log('display winner', winner)
  


  return (

    <span className='display'>
      <div className='action'>

        <div></div>

      </div>
      <div className='action'>

        Action

      </div>

    </span>




  )
}

export default Display;