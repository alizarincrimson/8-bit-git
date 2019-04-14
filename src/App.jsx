import React, { Component } from 'react';
// import Header from './header';
import Start from './components/start/Start';
import CardContainer from './components/cardContainer/CardContainer';
import Data from './data';

class App extends Component {
  constructor() {
    super()
    this.state = {
      randomized: [],
      commands: Data,
      gameStarted: false,
      wrongAnswers: []
    }
  }

  // componentDidMount = () => {
  //   fetch('https://fe-apps.herokuapp.com/api/DIRECTORYHERE')
  //     .then(res => res.json())
  //     .then(commands => this.setState({ commands: commands }))
  //     .catch(err => { throw new Error(err) })
  // }


  startGame = () => {
    this.setState({
      gameStarted: true
    })
    this.makeRandom()
  }
  
  makeRandom() {
    let randomized = this.state.commands.slice().sort(() => 0.5 - Math.random());
    this.setState({
      randomized: randomized
    }, () => {console.log("og", this.state.commands)})
  }

  render() {
    let gameArea
    if(this.state.gameStarted) {
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