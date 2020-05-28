import React from 'react';
import SearchBar from './SearchBar';
import axios from 'axios';
import RenderAnimeList from './RenderAnimeList';
import NavBar from './NavBar';
import './App.css'
import  AnimeContext  from '../context/AnimeContext';
import WatchList from './WatchList';

const App = () => {
    const [AnimeList,setAnimeList] = React.useState([]);
    const [watch,setWatch] = React.useState([])
    const [showWatchList,setShowWatchList] = React.useState(false);


    const showMyList = () => {
        const showList = showWatchList
        setShowWatchList(!showList);
    }


    const addList = (anime) => {
        console.log(watch)
        return setWatch((watch) =>[...watch,anime] )}

    const removeList = (animetitle) => {
        const newList = watch.filter(a => a.title !== animetitle)
        setWatch(newList)
        console.log('removendo',watch)
        return newList
    }
    

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
        
            <AnimeContext.Provider value={{watchlist: watch, addlist: addList, removelist: removeList, showmylist: showMyList}}>
                <div className="App">
                        <NavBar />
                        <SearchBar onSubmit={onFormSubmit} className="ui search searchbar"/>
                   { !showWatchList ? 
                    <div className="animebox">
                        <RenderAnimeList className="ui divided items" animes={AnimeList}/>
                    </div> : <WatchList/> }
                </div>
            </AnimeContext.Provider>
            
    );
}

export default App;