import React from 'react';
import './NavBar.css'
import AnimeContext from '../context/AnimeContext';


const NavBar = (props) => {
    const animeContext = React.useContext(AnimeContext);
    return (
        <div className="topnav sticky">
            <a href="#search">Search</a>
            <a href="#watchlist" onClick={animeContext.showmylist}>Watchlist( {animeContext.watchlist.length} )</a>
        </div>
    )

}



export default NavBar;