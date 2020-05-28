import React from 'react';
import './Anime.css';
import  AnimeContext  from '../context/animeContext';



const Anime = (props) => {
    const [ShowDetails,setShowDetails] = React.useState(false);
    const [icon,setIcon] = React.useState(false);
    const animeContext = React.useContext(AnimeContext);

    const onClickButton = () => {
        const myicon = icon;
        const mydetails = ShowDetails;
        setShowDetails(!mydetails);
        setIcon(!myicon);
        console.log(animeContext.watchlist)
    }

  
    const Details = () => {
        if (ShowDetails === true) {
            return (
                <div className="description">
                    <h5>Score: {props.anime.score}</h5>
                    <p>Episodes: {props.anime.episodes}</p>
                    <p>Synopsis: {props.anime.synopsis}<br/></p>
                    <a href={props.anime.url}>MyAnimeList</a>
                </div>
            )
        }
    }

    const Icons = () => {
        if( icon === false) {
            return <i className="angle down icon" onClick={onClickButton}></i>
        } else {
            return <i className="angle up icon" onClick={onClickButton}></i>
        } 

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
                                    {Icons()}
                                </div>
                                <div className="content">{Details()}</div>
                            </div>
                            <button className="ui button" onClick={() => animeContext.addlist(props.anime)}>Add</button>
                            <button className="ui button" onClick={() => animeContext.removelist(props.anime.title)}>Remove</button>
                    </div>
            </div>
            )
}


export default Anime;