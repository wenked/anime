import React from 'react';
import { Dropdown } from 'semantic-ui-react';
import AnimeContext from '../context/AnimeContext';
import './App.css'
import './Anime.css'

const WatchList = (props) => {
    const animeContext = React.useContext(AnimeContext);
    const [AnimeFilter,setAnimeFilter] = React.useState(animeContext.watchlist) 
    const scoreFilter = [...animeContext.watchlist].sort((a,b) => b.score - a.score)
    const episodeFilter = [...animeContext.watchlist].sort((a,b) => b.episodes - a.episodes)
    const [FilterName,setFilterName] = React.useState('Filter')

    const changeToScoreFilter = () => {
        setAnimeFilter(scoreFilter);
        setFilterName('Score');
    }

    const changeToEpisodeFilter = () => {
        setAnimeFilter(episodeFilter);
        setFilterName('Episodes')
    }
   
    

    console.log('score sort',scoreFilter)
    console.log('episode sort',episodeFilter)

    const MyWatchList = AnimeFilter.map( a =>  
                                    <div className="ui item anime box" key={a.mal_id}>
                                        <div className="ui image">
                                            <img src={a.image_url} alt="animes" key={a.mal_id} className="ui tiny image" onClick={() => console.log(AnimeFilter)}/>
                                        </div>
                                        <div className="description">  
                                            <h4>{a.title}</h4>                          
                                            <h5>Score: {a.score}</h5>
                                            <p>Episodes: {a.episodes}</p>
                                            <p>Synopsis: {a.synopsis}<br/></p>
                                            <a href={a.url}>MyAnimeList</a>
                                        </div>
                                        <button className="ui floated left button" onClick={() => animeContext.removelist(a.title)}>Remove</button>
                                    </div>)
        
    


    
    return (
            <div>
                <Dropdown
                    text={FilterName}
                    floating
                    labeled
                    button
                    className="icon"
                >
                    <Dropdown.Menu>
                        <Dropdown.Header icon='tags' content='Filter by tag' />
                        <Dropdown.Divider />
                        <Dropdown.Item onClick={changeToScoreFilter}>Score</Dropdown.Item>
                        <Dropdown.Item onClick={changeToEpisodeFilter}>Episodes</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
               
                    <div>
                        {MyWatchList}
                    </div>
                
              </div>
            )
}

// teste

export default WatchList;