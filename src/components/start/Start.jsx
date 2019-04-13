import React from 'react';

import sword from '../../assets/sword.png'

function Start(props) {
  return (
    <section className="intro" onClick={props.startGame} >
      <h2>IT'S DANGEROUS TO GIT ALONE! TAKE THIS...</h2>
      <img src={ sword } className="sword" alt="Link's Sword" />
      <h2>QUIZ!</h2>
    </section>
  )
}

export default Start