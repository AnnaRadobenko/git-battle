import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { makeBattle } from "../Api";
import PlayerPreview from './PlayerPreview';

const Results = () => {
    const location = useLocation();

    const [winner, setWinner] = useState('');
    const [winnerImage, setWinnerImage] = useState('');
    const [winnerScore, setWinnerScore] = useState('');
    const [winnerName, setWinnerName] = useState('');
    const [winnerLocation, setWinnerLocation] = useState('');

    const [loser, setLoser] = useState('');
    const [loserImage, setLoserImage] = useState('');
    const [loserScore, setLoserScore] = useState('');
    const [loserName, setLoserName] = useState('');
    const [loserLocation, setLoserLocation] = useState('');
    
    useEffect(() => {
        const searchParams = new  URLSearchParams(location.search);
        const PlayerOne = searchParams.get('playerOneName');
        const PlayerTwo = searchParams.get('playerTwoName');
        
        
        makeBattle([PlayerOne, PlayerTwo])
        .then(data => {
            const win = data[0].profile;
            const lose = data[1].profile;

            setWinner(win.login);
            setWinnerImage(win.avatar_url);
            setWinnerScore(data[0].score);
            setWinnerName(win.name);
            setWinnerLocation(win.location);
            
            setLoser(lose.login);
            setLoserImage(lose.avatar_url);
            setLoserScore(data[1].score);
            setLoserName(lose.name);
            setLoserLocation(lose.location);
        })
    }, []);

    return(
        <>
        <h1 style={{textAlign: 'center'}}>Results</h1>
        <div className='row'>
            <h2>Winner</h2>
            <PlayerPreview
                userName={winner}
                avatar={winnerImage}
            > 
                <li>Score: {winnerScore}</li>
                <li>Name: {winnerName}</li>
                <li>Location: {winnerLocation}</li>
            </PlayerPreview>
            <h2>Loser</h2>
            <PlayerPreview
                userName={loser}
                avatar={loserImage}
            >
                <li>Score: {loserScore}</li>
                <li>Name: {loserName}</li>
                <li>Location: {loserLocation}</li>
            </PlayerPreview> 
        </div>
        </>
    )
}

export default Results;