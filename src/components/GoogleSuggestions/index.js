import {Component} from 'react'
import './index.css'
import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  OnChange = event => {
    this.setState({searchInput: event.target.value})
  }

  onUpdate = value => {
    this.setState({searchInput: value})
  }

  render() {
    const {suggestionsList} = this.props
    const {searchInput} = this.state

    const filteredList = suggestionsList.filter(eachItem =>
      eachItem.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )

    console.log(filteredList)

    return (
      <div className="bg-container">
        <img
          alt="google logo"
          className="google-img"
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
        />
        <div className="search-container">
          <input
            placeholder="Search Google"
            className="input-form"
            type="search"
            onChange={this.OnChange}
            value={searchInput}
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
            alt="search icon"
          />
          <ul className="list-container">
            {filteredList.map(eachItem => (
              <SuggestionItem
                details={eachItem}
                onUpdate={this.onUpdate}
                key={eachItem.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
