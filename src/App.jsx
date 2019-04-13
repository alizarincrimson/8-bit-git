import React, { Component } from 'react';
// import Header from './header';
import Start from './components/start/Start';
import CardContainer from './components/cardContainer/CardContainer';
import Data from './data';

class App extends Component {
  constructor() {
    super()
    this.state = {
      commands: [],
      gameStarted: false,
      wrongAnswers: []
    }
  }

  // componentDidMount = () => {
  //   fetch('https://fe-apps.herokuapp.com/api/DIRECTORYHERE')
  //     .then(res => res.json())
  //     .then(commands => this.setState())
  //     .catch(err => { throw new Error(err) })
  // }

  startGame = () => {
    this.setState( {gameStarted: true} )
  }

  render() {
    console.log(Data)
    let gameArea  
    if(this.state.gameStarted === true) {
      gameArea = 
        <div className="App">
          <CardContainer id="gameArea" />
        </div>
    } else {
      gameArea = 
        <div className="App"> 
          <Start id="intro" startGame = {this.startGame} />
        </div>
    }
    return gameArea;
  }
}

export default App