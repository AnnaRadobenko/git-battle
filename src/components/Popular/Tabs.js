import {memo, useEffect, useState} from "react";
import {Link, useLocation} from "react-router-dom";

const Tabs = memo((props) => {
    const languages = ['All', 'Javascript', 'Ruby', 'Java', 'CSS', 'Python'];
    const location = useLocation();

    return (
        <ul className='languages'>
            {languages.map((language, index) => {
                return(
                <li key={index}
                    style={language === props.selectedLanguages ? {color: '#d0021b', pointerEvents: 'none'} : null}
                    onClick={() => props.updateLanguage(language)}
                >
                    <Link 
                    to={{
                        pathname: `${location.pathname}`,
                        search: `?language=${language}`
                    }}
                    >
                        {language}
                    </Link>
                </li>
            )})}
        </ul>
        
    )
})

export default Tabs;