import React, { Component } from 'react';
import './App.css';
import Validation from './Components/Validation/Validation';
import CharComponent from './Components/CharComponent/CharComponent';

class App extends Component {
  state = {
    charNumber: 0,
    phrase: ''
  }

  eventHandler = event => {
    const phrase = event.target.value;
    const charNumber = phrase.length;
    this.setState({
      charNumber:charNumber,
      phrase:phrase
    })
  }

  deleteCharComponent = index => {
    const phraseCopy = this.state.phrase.split('');
    phraseCopy.splice(index,1);
    const updatedPhrase = phraseCopy.join('');
    this.setState({phrase:updatedPhrase})
  }

  render() {
    const charList = this.state.phrase.split('').map((ch, index) => {
      return <CharComponent 
        character={ch} 
        key={index} 
        click={() => this.deleteCharComponent(index)}
        />;
    });

    return (
      <div className="App">
        <input type="text" value={this.state.phrase} onChange={event => this.eventHandler(event)}/>
        <p>{this.state.charNumber}</p>
        < Validation length={this.state.charNumber} />
        {charList}
      </div>
    );
  }
}

export default App;
