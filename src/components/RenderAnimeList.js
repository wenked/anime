import React from 'react';
import Anime from './Anime';



const RenderAnimeList = (props) => {
    
   const renderList = props.animes.map ( anime => {
       return (<div className="ui items">
                    <Anime className="item" anime={anime} />
                </div>)
   } )

    
    return (<div className="ui divided items">{renderList}</div>)
}


export default RenderAnimeList;