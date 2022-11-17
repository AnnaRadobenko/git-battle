import { useState } from "react";

const PlayerInput = (props) => {
    const [userName, setUserName] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        props.onSubmit(props.label, userName);
    }

    return(
        <form className="column" onSubmit={handleSubmit}>
            <label className="header" htmlFor={props.id}>{props.label}</label>
            <input 
                type="text" 
                id={props.id} 
                placeholder="Github Username"
                autoComplete='off'
                value={userName}
                onChange={(event) => setUserName(event.target.value)}
            />
            <button 
                className="button" 
                type="submit"
                disabled={!userName}
            >
                Submit
            </button>
        </form>
    )
}

export default PlayerInput;