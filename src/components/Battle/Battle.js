import {useState} from "react";
import {Link, useLocation} from "react-router-dom";
import PlayerInput from "./PlayerInput";
import PlayerPrewiew from "./PlayerPreview";


const Battle = () => {
    const [playerOneName, setPlayerOneName] = useState('');
    const [playerTwoName, setPlayerTwoName] = useState('');
    const [playerOneImage, setPlayerOneImage] = useState('');
    const [playerTwoImage, setPlayerTwoImage] = useState('');

    const location = useLocation();

    const handleSubmit =(label, userName) => {
        if(label === 'Player 1') {
            setPlayerOneName(userName);
            setPlayerOneImage(`https://github.com/${userName}.png?size=200`)
        } else {
            setPlayerTwoName(userName);
            setPlayerTwoImage(`https://github.com/${userName}.png?size=200`)
        }
    }

    const handleReset = (id) => {
        if(id === 'playerOne') {
            setPlayerOneName('');
            setPlayerOneImage('');
        } else {
            setPlayerTwoName('');
            setPlayerTwoImage('');
        }
    }

    return (
        <div>
            <div className="row">
                {!playerOneImage ?
                    <PlayerInput 
                        id='playerOne'
                        label='Player 1'
                        onSubmit={handleSubmit}
                    /> : 
                    <PlayerPrewiew 
                        userName={playerOneName}
                        avatar={playerOneImage}
                    >  
                        <button className="reset" onClick={() => handleReset('playerOne')}>Reset</button>
                    </PlayerPrewiew>
                }
                {!playerTwoImage ?
                    <PlayerInput 
                        id='playerTwo'
                        label='Player 2'
                        onSubmit={handleSubmit}
                    /> :
                    <PlayerPrewiew 
                        userName={playerTwoName}
                        avatar={playerTwoImage}
                    >  
                        <button className="reset" onClick={() => handleReset('playerTwo')}>Reset</button>
                    </PlayerPrewiew>
                }    
            </div>
            {(playerOneImage && playerTwoImage) ?
                <Link 
                    className="button"
                    to={{
                        pathname: `${location.pathname}/results`,
                        search: `?playerOneName=${playerOneName}&playerTwoName=${playerTwoName}`
                    }}
                >
                    Battle
                </Link> :
                null
            }
        </div>
    )
}

export default Battle;