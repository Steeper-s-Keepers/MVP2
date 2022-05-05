import React, { useState, useEffect } from "react";

const Cards = (props) => {



  return (

      <div className='card'>
        <h1>{props.card}</h1>
      </div>

  )
}

export default Cards;