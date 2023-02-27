import {Component} from 'react'

import HistoryItem from '../HistoryItem'

import './index.css'

class History extends Component {
  state = {searchInput: '', historyList: []}

  componentDidMount() {
    const {initialHistoryList} = this.props
    this.setState({historyList: initialHistoryList})
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  deleteHistory = id => {
    const {historyList} = this.state

    const filterData = historyList.filter(each => each.id !== id)
    this.setState({historyList: filterData})
  }

  render() {
    const {historyList, searchInput} = this.state
    const searchResults = historyList.filter(eachHistory =>
      eachHistory.title.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="bg-container">
        <div className="nav-container">
          <img
            className="history-image"
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
          />
          <div className="search-container">
            <button className="search-button" type="button">
              <img
                className="search-icon"
                src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                alt="search"
              />
            </button>
            <input
              className="search-input"
              type="search"
              placeholder="Search history"
              value={searchInput}
              onChange={this.onChangeSearchInput}
            />
          </div>
        </div>
        <div className="app-bg-container">
          {searchResults.length > 0 ? (
            <ul className="apps-list-container">
              {searchResults.map(eachList => (
                <HistoryItem
                  key={eachList.id}
                  deleteHistory={this.deleteHistory}
                  historyDetails={eachList}
                />
              ))}
            </ul>
          ) : (
            <p className="empty-message">There is no history to show</p>
          )}
        </div>
      </div>
    )
  }
}
export default History
