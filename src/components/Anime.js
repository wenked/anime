import React from 'react';



const Anime = (props) => {
    const [ShowDetails,setShowDetails] = React.useState(false);
    

    const onClickButton = () => {
        setShowDetails(true);
    }

    const onClickDownButton = () => {
        setShowDetails(false);
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

    return (
            <div className="container"> 
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
                        <div className="ui right floated icon buttons">
                            <button className="ui icon button " onClick={onClickButton}>
                                <i className="caret square down outline icon"></i>
                            </button>
                            <button className="ui icon button" onClick={onClickDownButton}>
                                <i className="caret square up outline icon"></i>
                            </button>

                        </div>
                        <div className="content">{Details()}</div>
                    </div>
            </div>
            )
}


export default Anime;