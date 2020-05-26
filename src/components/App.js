import React from 'react';
import SearchBar from './SearchBar';
import axios from 'axios';
import RenderAnimeList from './RenderAnimeList';
import './App.css'

const App = () => {
    const [AnimeList,setAnimeList] = React.useState([]);

    const onFormSubmit = async (term) => {
        const cors = "https://cors-anywhere.herokuapp.com/";
        const searchURL = `${cors}https://api.jikan.moe/v3/search/anime`;
        const response = await axios.get(searchURL,{
            baseURL:"https://api.jikan.moe/v3/",
            //timeout: 1000,
            params: {
                q: term
            }
        });

        setAnimeList(response.data.results)
    }

    return (
        <div className="App">
                <SearchBar onSubmit={onFormSubmit} className="ui search search-bar"/>
            <div className="anime-box">
                <RenderAnimeList className="ui divided items" animes={AnimeList}/>
            </div>
        </div>
    );
}

export default App;