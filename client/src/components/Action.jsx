import React, { useState, useEffect } from "react";

const Action = (props) => {

  const [betSize, setBetSize] = useState(0)

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
            props.setAction(true)
            props.setStreet(props.street+1)
          } else {
            props.setAction(false)
          }
        }}>Check</button>
        <form
          onSubmit={e => {
            console.log('asodhf;oaisdjf')
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
            Name:
            <input type="text" value={betSize}
              onChange={e => {
                setBetSize(e.target.value)
              }} />
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


{/* <form>
<label>
  Bet
  <input type="text" name="name" />
</label>
<input
type="submit" value="Submit" />
</form> */}