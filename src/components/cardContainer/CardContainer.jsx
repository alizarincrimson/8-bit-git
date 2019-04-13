import React, { Component } from 'react';
import Question from '../question/Question';
import Answers from '../answers/Answers';

export class CardContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }


  render() {
    return (
        <section className="game-area">
          <Question />
          <Answers />
        </section>
    )
  }
}

export default CardContainer