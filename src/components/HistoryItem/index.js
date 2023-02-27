import './index.css'

const HistoryItem = props => {
  const {historyDetails, deleteHistory} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = historyDetails

  const onDeleteButton = () => {
    deleteHistory(id)
  }

  return (
    <li className="app-list">
      <div className="app">
        <p className="app-time">{timeAccessed}</p>
        <img className="app-logo" src={logoUrl} alt="domain logo" />
        <p className="app-title">{title}</p>
        <p className="app-domain">{domainUrl}</p>
      </div>
      <div className="delete-button">
        <button
          type="button"
          className="button"
          data-testid="delete"
          onClick={onDeleteButton}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}
export default HistoryItem
