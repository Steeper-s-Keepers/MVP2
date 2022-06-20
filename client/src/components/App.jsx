import React, { useState, useEffect } from "react";
import axios from 'axios';
import P from '/Users/coryfinkbeiner/keepers/MVP2/poker.js';
import Villain from './Villain.jsx';
import Board from './Board.jsx';
import Hero from './Hero.jsx';
import Display from './Display.jsx';

const App = () => {

  const [hand, setHand] = useState(P.dealer());
  const [street, setStreet] = useState(0);
  const [percent, setPercent] = useState(0);

  const [action, setAction] = useState(true)
  const [pot, setPot] = useState(0)
  const [vStack, setVStack] = useState(100)
  const [hStack, setHStack] = useState(100)

  const [facingBet, setFacingBet] = useState(false)
  

  useEffect(() => {
    var w = hand.winner;
    var l = w === 'villain' ? 'hero' : 'villain';
    var w_h = hand.winner === 'hero' ? hand.hero.show : hand.villain.show
    var l_h = hand.winner === 'hero' ? hand.villain.show : hand.hero.show
  }, []);

  if (street > 4) {
    setStreet(0);
    setHand(P.dealer());
  }

  if (street === 1) {
    axios.post('/stats', {
      winner: hand.winner,
      loser: hand.loser,
      winning_hand: hand.winning_hand,
      losing_hand: hand.losing_hand
    })

    .then(res => {

    })
    .catch(err => {
      console.log('POST ERROR', err)
    })
  }
  if (street === 3) {
    axios.get('/stats')
    .then(res => {
      var hWins = 0;
      var vWins = 0;
      res.data.rows.forEach(hand => {
        if (hand.winner === 'villain') {
          vWins++;
        }
        if (hand.winner === 'hero') {
          hWins++;
        }
      })
      var per = (hWins/(vWins + hWins)) * 100;
      setPercent(per)
    })
    .catch(err => console.log(err))
  }

  return (
    <div className='grid-container'>

      <div>
        <div className='third'>
          <Villain street={street} hand={hand.villain}/>
        </div>
        <div className='third'>
          <Board street={street} board={hand.board}/>
        </div>
        <div className='third'>
          <Hero street={street} hand={hand.hero}/>
        </div>
       </div>

        <Display facingBet={facingBet} vStack={vStack} hStack={hStack} pot={pot} setPot={setPot} action={action} percent={percent} street={street} setStreet={setStreet} hand={hand} setAction={setAction} setHStack={setHStack} setFacingBet={setFacingBet} setVStack={setVStack}/>


    </div>
  )
}

export default App;
