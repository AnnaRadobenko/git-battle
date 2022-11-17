const PlayerPrewiew = (props) => {
    return (
    <div>
        <div className="column">
            <img className="avatar" src={props.avatar} alt="Avatar"/>
            <h2 className="username">@{props.userName}</h2>
            {props.children}
        </div>
    </div>
)}

export default PlayerPrewiew;