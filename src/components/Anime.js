import React from 'react';
import { addAnime, discardList} from '../actions';
import { connect } from 'react-redux';

const Anime = (props) => {
    console.log(props.anime)
    return (
            <div>
                <div className="container">
                            <div className="right floated content">
                                <button 
                                    className="ui primary button"
                                    onClick={() => props.addAnime(props.anime.title)}
                                >
                                    Add
                                    </button>
                                <button 
                                    className="ui button"
                                    onClick={() => {props.discardList(props.anime.title)}}
                                >
                                    Discard
                                </button>
                            </div>
                            <img 
                                className="ui tiny bordered image"
                                alt="animes"
                                key={props.anime.mal_id} 
                                src={props.anime.image_url}      
                                />
                                <div className="content">{props.anime.title}</div>
                        </div>
            </div>
            )
}

const mapStateToProps = (state) => {
    return {topFive: state.topFiveReducer}
}

export default connect(mapStateToProps,{addAnime, discardList})(Anime);
