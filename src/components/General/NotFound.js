import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className='home-container'>
            <h1>Ooops! Something went wrong.</h1>
            <Link to='/' className='button'>Go HOME</Link>
        </div>
    )
}

export default NotFound;