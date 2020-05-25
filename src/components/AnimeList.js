import React from 'react';
import { connect } from 'react-redux';
import Anime from './Anime'
//import SearchBar from './SearchBar';




class AnimeList extends React.Component {
    renderAnimeList (){
        const animeList = this.props.animeList.map((anime,index) => {
            return (<div className="ui relaxed divided list">
                        <Anime anime={anime} key={index}/>    
                    </div>)
        })
        
        return animeList
        
    }
    
    
    render(){
    console.log(this.props.topFive)
      if (this.props.animeList.length !== 0){
        return (<div className="anime-box">{this.renderAnimeList()}</div>)
      }  
       return <div></div>
      
    }
}


const mapStateToProps = (state) => {
    console.log(state)
    return {animeList: state.animeList,topFive: state.topFiveReducer}
}

export default connect(mapStateToProps)(AnimeList);