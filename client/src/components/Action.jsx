import React, { useState, useEffect } from "react";

const Action = (props) => {

  const [betSize, setBetSize] = useState(0)
  const [raiseSize, setRaiseSize] = useState(0)

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
        <form
        onSubmit={e => {
          props.setPot(props.pot + +raiseSize + props.facingBet)
          if (props.action) {
            props.setHStack(props.hStack - raiseSize - props.facingBet)
          } else {
            props.setVStack(props.vStack - raiseSize - props.facingBet)
          }
          props.setFacingBet(+raiseSize)
          props.setAction(!props.action)
          e.preventDefault()
          }
        }>

        <label>
          <input type="submit" value="Raise" />
            <input type="text" value={raiseSize}
              onChange={e => {
                setRaiseSize(e.target.value)
              }} />
          </label>
        </form>
        <button onClick={() => {
          if (props.action) {
            props.setHStack(props.hStack - props.facingBet)
          } else {
            props.setVStack(props.vStack - props.facingBet)
          }
          props.setPot(props.pot + +props.facingBet)
          props.setStreet(props.street+1)
          props.setAction(!props.action)
          props.setFacingBet(false)
          setBetSize(0)
          setRaiseSize(0)
        }}>Call</button>
        <button onClick={() => {
          if (props.action) {
            props.setVStack(props.vStack + +props.pot)
          } else {
            props.setHStack(props.hStack + +props.pot)
          }
          props.setPot(0)
          props.setStreet(0)
          props.setFacingBet(false)
        }}>Fold</button>
      </div>
  } else {
    render =
      <div>
        <button onClick={() => {
          if (!props.action) {
            props.setAction(true)
            props.setStreet(props.street+1)
          } else {
            props.setAction(false)
          }
        }}>Check</button>
        <form
          onSubmit={e => {
            props.setPot(props.pot + +betSize)
            if (props.action) {
              props.setHStack(props.hStack - betSize)
            } else {
              props.setVStack(props.vStack - betSize)
            }
            props.setFacingBet(+betSize)
            props.setAction(!props.action)
            e.preventDefault()
          }
        }>
          <label>
          <input type="submit" value="Bet" />
            <input type="text" value={betSize}
              onChange={e => {
                setBetSize(e.target.value)
              }} />
          </label>

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


{/* <form>
<label>
  Bet
  <input type="text" name="name" />
</label>
<input
type="submit" value="Submit" />
</form> */}