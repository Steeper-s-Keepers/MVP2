import React, { useState, useEffect } from "react";

const Action = (props) => {

  let player;
  let render;

  if (props.action) {
    player = <div>"Hero"</div>
  } else {
     player = <div>"Villain"</div>
  }

  if (props.facingBet) {
    render =
      <div>
        <form>
          <label>
            Raise
            <input type="text" name="name" />
          </label>
        <input type="submit" value="Submit" />
        </form>
        <div>Call</div>
        <div>Fold</div>
      </div>
  } else {
    render =
      <div>
        <button onClick={() => {
          if (!props.action) {
            console.log('action after !action', props.action)
            props.setAction(true)
            props.setStreet(props.street+1)
          } else {
            console.log('action after else', props.action)
            props.setAction(false)
          }
        }}>Check</button>
        <form>
          <label>
            Bet
            <input type="text" name="name" />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
  }



  return (
    <div>
      <div>
        {player}
      </div>
      <div>
        {render}
      </div>
    </div>
  )
}

export default Action;