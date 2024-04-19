import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import './index.css'

const CharacterCounter = () => {
  const [text, setText] = useState('')
  const [charactersList, setCharactersList] = useState([])

  const onAddButtonClick = () => {
    const data = {
      id: uuidv4(),
      characters: text,
      charactersCount: text.length,
    }
    setText('')
    setCharactersList(prevState => [...prevState, data])
  }

  const renderImage = () => (
    <div className="image-container">
      <img
        className="image"
        src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
        alt="no user inputs"
      />
    </div>
  )

  const renderCharactersList = () => (
    <ul className="list-container">
      {charactersList.map(eachCharacter => (
        <li key={eachCharacter.id}>
          <p className="list">
            {eachCharacter.characters} :
            <span> {eachCharacter.charactersCount}</span>
          </p>
        </li>
      ))}
    </ul>
  )

  const renderResult = () =>
    charactersList.length === 0 ? renderImage() : renderCharactersList()

  const renderLeftContainer = () => (
    <div className="left-container">
      <div className="card-container">
        <h1 className="left-heading">Count the characters like a Boss...</h1>
      </div>
      {renderResult()}
    </div>
  )

  const renderRightContainer = () => (
    <div className="right-container">
      <h1 className="right-heading">Character Counter</h1>
      <form onSubmit={onAddButtonClick} className="input-container">
        <input
          onChange={e => setText(e.target.value)}
          placeholder="Enter the Characters here"
          type="text"
          value={text}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  )

  return (
    <div className="main-container">
      {renderLeftContainer()}
      {renderRightContainer()}
    </div>
  )
}

export default CharacterCounter
