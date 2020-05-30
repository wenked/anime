import React from 'react';
import './NavBar.css'
import AnimeContext from '../context/AnimeContext';


const NavBar = (props) => {
    const animeContext = React.useContext(AnimeContext);
    return (
        <ul className="topnav sticky">
            <li><a href="#watchlist" onClick={animeContext.showmylist}>Watchlist( {animeContext.watchlist.length} )</a></li>
        </ul>
    )

}



export default NavBar;