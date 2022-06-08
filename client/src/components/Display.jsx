import React, { useState, useEffect } from "react";
import Action from './Action.jsx'

const Display = (props) => {

  return (

  <span>
    <div>
      <br></br>
      <div>Pot: {' ' + props.pot}</div>
      <br></br>
      <div>Villain: {' ' + props.vStack}</div>
      <br></br>
      <div>Hero: {' ' + props.hStack}</div>
      <br></br>
    </div>
    <div>
      {props.street === 0
      ? <button onClick={() => props.setStreet(1)}>Deal</button>
      :<Action action={props.action} facingBet={props.facingBet} setFacingBet={props.setFacingBet} setAction={props.setAction} street={props.street} setStreet={props.setStreet} setHStack={props.setHStack} setVStack={props.setVStack} setPot={props.setPot} pot={props.pot} vStack={props.vStack} hStack={props.hStack}/>
      }

    </div>
 </span>

  )
}

export default Display;


//


// return (



//   <span className='display'>
//     {
//       props.street === 4 &&
//       <div className='read'>
//                 <h1 className='info'>{props.hand.winner === 'hero' ? 'YOU WIN' : 'YOU LOSE'}</h1>
//                 <h2 className='card-read'>Your hand: {'   ' + props.hand.hero.name}</h2>
//                 <h3 className='card-read'>Their hand: {'   ' +  props.hand.villain.name}</h3>
//                 <h4 className='percent'>Your win % {'  ' + props.percent}</h4>
//                 </div>
//     }

//   <div className='action'>

//     <button onClick={() => {
//       // console.log('BUTT');
//       props.setStreet(props.street+1);
//     }} className='deal-button'>
//       <h1>Deal</h1>
//     </button>

//   </div>

// </span>

// )