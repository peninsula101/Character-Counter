import {Component} from 'react'
import {v4} from 'uuid'

import WordItem from '../CharWordItem'

import './index.css'

class Characters extends Component {
  state = {wordList: [], userInput: ''}

  onChangeUserInput = event => {
    this.setState({userInput: event.target.value})
  }

  onAddWord = event => {
    event.preventDefault()
    const {userInput} = this.state

    const newWord = {
      id: v4(),
      word: userInput,
    }

    this.setState(prevState => ({
      wordList: [...prevState.wordList, newWord],
      userInput: '',
    }))
  }

  render() {
    const {userInput, wordList} = this.state

    return (
      <div className="bg-container">
        <div className="left-card">
          <h1 className="left-head">Count the characters like a Boss...</h1>
          {wordList.length === 0 ? (
            <img
              src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
              alt=" no user inputs"
              className="no-input-img"
            />
          ) : (
            <ul>
              {wordList.map(word => (
                <WordItem key={word.id} wordDetails={word} />
              ))}
            </ul>
          )}
        </div>
        <div className="right-card">
          <h1 className="right-head">Character Counter</h1>
          <form className="input-container" onSubmit={this.onAddWord}>
            <input
              type="text"
              className="input"
              value={userInput}
              onChange={this.onChangeUserInput}
              placeholder="Enter the Characters here"
            />
            <button type="submit" className="btn">
              Add
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default Characters
