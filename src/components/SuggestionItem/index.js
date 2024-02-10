import './index.css'

const SuggestionItem = props => {
  const {details, onUpdate} = props
  const {suggestion} = details

  const Update = () => {
    onUpdate(suggestion)
  }

  return (
    <li className="list-item">
      <p className="suggestion">{suggestion}</p>
      <button type="button" onClick={Update}>
        <img
          className="arrow"
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png "
          alt="arrow"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
