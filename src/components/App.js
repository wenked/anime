import React from 'react';
import AnimeList from './AnimeList';
import SearchBar from './SearchBar';


const App = () => { 
    return (
    <div>
        <SearchBar className="search-bar"/>
        <AnimeList/>
    </div>
    
    )
}

export default App;