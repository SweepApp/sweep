import propTypes from 'prop-types'

export default function Friend(props) {
  return (
    <div className="friend">
      <div className="friend__content">
        <div className="friend__image">
          <img src={props.image} alt={props.name} />
        </div>
        <div className="friend__info">
          <h3>{props.name}</h3>
        </div>
      </div>
      <div className="friend__buttons">
        <button className="circle" onClick={props.delete}>
          <i className="fa-solid fa-fw fa-trash"></i>
        </button>
        <button className="circle" onClick={props.invite}>
          <i className="fa-solid fa-fw fa-envelope"></i>
        </button>
    </div>
    </div>
  )
}

Friend.propTypes = {
  image: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  delete: propTypes.func.isRequired,
  invite: propTypes.func.isRequired
}