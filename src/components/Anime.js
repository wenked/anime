import React from 'react';
import './Anime.css';
import  AnimeContext  from '../context/AnimeContext';



const Anime = (props) => {
    const [ShowDetails,setShowDetails] = React.useState(false);
    const [icon,setIcon] = React.useState(false);
    const animeContext = React.useContext(AnimeContext);
    const UpOrDown = icon ? "up" : "down";

    const onClickButton = () => {
        const myicon = icon;
        const mydetails = ShowDetails;
        setShowDetails(!mydetails);
        setIcon(!myicon);
        console.log(animeContext.watchlist)
    }

  

    return (
            <div className="container anime"> 
                    <div className="box">
                        <div className="image">
                                <img 
                                    className="ui tiny image" 
                                    alt="anime" 
                                    src={props.anime.image_url} 
                                    key={props.anime.mal_id} 
                                />
                        </div>
                            <div>
                                <div className="ui divided header"><h4>{props.anime.title}</h4></div>
                                <div>
                                    <i className={`angle ${UpOrDown} icon`} onClick={onClickButton}></i>
                                </div>
                                <div className="content">
                                    {ShowDetails ? <div className="description">
                                                        <h5>Score: {props.anime.score}</h5>
                                                        <p>Episodes: {props.anime.episodes}</p>
                                                        <p>Synopsis: {props.anime.synopsis}<br/></p>
                                                        <a href={props.anime.url}>MyAnimeList</a>
                                                    </div>: null}</div>
                                </div>
                            <button className="ui button" onClick={() => animeContext.addlist(props.anime)}>Add</button>
                            
                    </div>
            </div>
            )
}


export default Anime;