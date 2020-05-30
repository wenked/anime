import React from 'react';
import Anime from './Anime';
import { Item } from 'semantic-ui-react';




const RenderAnimeList = (props) => {
   const renderList = props.animes.map ( anime => {
       return (<Item>
                    <Anime value={anime}  anime={anime}  />
                </Item>)
   } )

    
    return (<Item.Group divided>{renderList}</Item.Group>)
}


export default RenderAnimeList;