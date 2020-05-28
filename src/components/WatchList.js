import React, { useContext } from 'react';
import AnimeContext from '../context/animeContext';


const WatchList = (props) => {
    const animecontext = useContext(AnimeContext);
    
    const mylist = () => {
        return (
            animecontext.watchlist.map( a =>  
                                    <div className="ui item">
                                        <div className="ui image">
                                            <img src={a.image_url} key={a.mal_id} className="ui tiny image"/>
                                        </div>
                                        <div className="description">  
                                            <h4>{a.title}</h4>                          
                                            <h5>Score: {a.score}</h5>
                                            <p>Episodes: {a.episodes}</p>
                                            <p>Synopsis: {a.synopsis}<br/></p>
                                            <a href={a.url}>MyAnimeList</a>
                                        </div>
                                    </div>)
        )
    }
    
    return (<div>{mylist()}</div>)
}


export default WatchList;