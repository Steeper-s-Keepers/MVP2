import React, { useState, useEffect } from "react";

const Display = (props) => {

  return (



      <span className='display'>

        {

          props.street === 4 &&
          <div className='read'>
                    <h1 className='info'>{props.hand.winner === 'hero' ? 'YOU WIN' : 'YOU LOSE'}</h1>
                    <h2 className='card-read'>Your hand: {'   ' + props.hand.hero.name}</h2>
                    <h3 className='card-read'>Their hand: {'   ' +  props.hand.villain.name}</h3>

                    <h4 className='percent'>Your win %: {'  ' + props.percent}</h4>

                    </div>
        }

      <div className='action'>

        <button onClick={() => {
          console.log('BUTT');
          props.setStreet(props.street+1);
        }} className='deal-button'>
          <h1>Deal</h1>
        </button>

      </div>

    </span>




  )
}

export default Display;



// <span className='display'>
// <div className='readout'>
//   <div>
//     <h1 className='info'>wins with</h1>
//   </div>
// </div>
// <h2 className='info'>percentsdfasdfasdfasdfasdfdsafasdf</h2>
//   <div>


// </div>