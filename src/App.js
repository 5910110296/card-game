import React, { Component } from 'react';
import './App.css';
import WordCard from './WordCard';

class App extends Component {
  render() {
    return (
      <div >
          <WordCard value="0123456789"/>
      </div>
    );
  }
}

export default App;