import React, { useState, useEffect } from "react";
import axios from 'axios';
import P from '/Users/coryfinkbeiner/keepers/MVP2/poker.js';
import Villain from './Villain.jsx';
import Board from './Board.jsx';
import Hero from './Hero.jsx';
import Display from './Display.jsx';
// var P = POKER

// const  = () => {
//   return <div>handTest</div>
// }


const App = () => {

  const [hand, setHand] = useState(P.dealer());
  const [street, setStreet] = useState('');


  useEffect(() => {
    setHand(P.dealer());
  }, []);

  return (
    <div className='grid-container'>

      <div>
        <div className='third'>
          <Villain hand={hand.villain}/>
        </div>
        <div className='third'>
          <Board board={hand.board}/>
        </div>
        <div className='third'>
          <Hero hand={hand.hero}/>
        </div>
       </div>

        <Display setStreet={setStreet} hand={hand}/>


    </div>
  )

}


export default App;




// var deck = new P.Deck();
// deck.shuffle();

// var hand1 = deck.deal(5)
// var hand2 = deck.deal(5)

// hand1 = new P.Hand(hand1)
// hand2 = new P.Hand(hand2)

// // var hand1 = deck.deal(5).toString().split(',').join(' ')
// // var hand2 = deck.deal(5).toString().split(',').join(' ')

// // hand1 = P.handFromString(hand1)
// // hand2 = P.handFromString(hand2)


// console.log('hand1', hand1)
// console.log('hand2', hand2)

// // console.log('deck', deck.dealt)

// // var nines = P.handFromString('9c 9d 9s 4d 2h'),
// //   sevens = P.handFromString('7s 7d 7h Kc 5h'),
// //   winner = P.getWinners([nines, sevens]);

// var a = P.getWinners([hand1, hand2])[0].getHandDetails()



// console.log('AAAA', a)



// // var h1 = P.handFromString(hand1);

// // console.log(h1)

// // var y = P.getWinners([hand1, hand2])

// // console.log(y)

// // var deck = new POKER.POKER.Deck(),
// //   hands = [];

// // for (var idx = 0; idx < 6; idx += 1) {
// //   hands[idx] = new POKER.POKER.Hand(deck.deal(5));
// // };

// // find the winner/s
// // var winner = POKER.getWinners(hands);