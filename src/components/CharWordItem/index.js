import './index.css'

const WordItem = props => {
  const {wordDetails} = props
  const {word} = wordDetails

  return (
    <li className="list-container">
      <p className="output">
        {word}:{word.length}
      </p>
    </li>
  )
}

export default WordItem
