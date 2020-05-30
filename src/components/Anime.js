import React from 'react';
import { Item,Button} from 'semantic-ui-react'
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
            <div> 
                    <div className="box">
                                <Item.Image 
                                    size="tiny"
                                    alt="anime" 
                                    src={props.anime.image_url} 
                                    key={props.anime.mal_id} 
                                />
                            <Item.Content verticalAlign="middle">
                                <Item.Header><h4>{props.anime.title}</h4></Item.Header>
                                <div>
                                    <i className={`angle ${UpOrDown} icon`} onClick={onClickButton}></i>
                                </div>
                                    {ShowDetails ? <Item.Description className="description">
                                                        <h5>Score: {props.anime.score}</h5>
                                                        <p>Episodes: {props.anime.episodes}</p>
                                                        <p>Synopsis: {props.anime.synopsis}<br/></p>
                                                        <a href={props.anime.url}>MyAnimeList</a>
                                                    </Item.Description>: null}
                                <Item.Extra>
                                    <Button floated="left" onClick={() => animeContext.addlist(props.anime)}>Add</Button>
                                </Item.Extra>
                            </Item.Content>
                    </div>
            </div>
            )
}


export default Anime;