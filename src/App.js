import React, { Component } from 'react';
import './reset.css';
import './App.css';

let arr = [
  {
    letter: 72
  },
  {
    letter: 101
  },
  {
    letter: 108
  },
  {
    letter: 108
  },
  {
    letter: 111
  },
  {
    letter: 32
  },
  {
    letter: 87
  },
  {
    letter: 111
  },
  {
    letter: 114
  },
  {
    letter: 108
  },
  {
    letter: 100
  },
  {
    letter: 33
  },
  {
    letter: 0
  }
]

let colors = [
  '',
  '#800',
  '#880',
  '#080',
  '#088',
  '#008',
  '#808'
]

class App extends Component {
  constructor() {
    super()
    this.state = {
      letters: [],
      color: ''
    }
  }
  componentDidMount() {
    let background = ''
    colors.map((color, i) => {
      if (this.state.color === color) {
        background = colors[i + 1] || colors[2]
      }
    })
    arr.map((letterObject, index) => {
      return function (timeout) {
        setTimeout(() => {
          let letters = this.state.letters.slice()
          if (letters.length >= 13) {
            letters = []
          }
          // console.log(timeout)
          letters.push(<div className="letter">{String.fromCharCode(letterObject.letter)}</div>)
          this.setState({
            letters,
            color: background
          })
        }, timeout * 330)
      }.call(this, index)
    })
  }
  render() {
    return (
      <div className="App" style={{ background: this.state.color }}>
        {this.state.letters}
        {
          this.state.letters.length >= 13 ?
            this.componentDidMount()
            :
            null
        }
      </div>
    );
  }
}

export default App;
