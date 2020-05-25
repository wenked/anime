import React from 'react';
import { connect } from 'react-redux';
import { fetchAnimeList } from  '../actions';
import './App.css';



class SearchBar extends React.Component {
    state = {term:''};


    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.fetchAnimeList(this.state.term)
        
    }   
    
    render (){
        console.log(console.log(this.props.animeList))
        return (<div className="ui search">
                    <form onSubmit={this.onFormSubmit} className="search-bar ui form">              
                         <div className="field">
                            <label>Anime</label>
                            <input 
                                className="prompt"
                                type="text" 
                                value={this.state.term} 
                                onChange={(e) => this.setState({term: e.target.value})}
                            />  
                                             
                        </div>              
                    </form>
               </div>)
    };
};

const mapStateToProps = (state) => {
    console.log(state)
    return {animeList: state.animeList}
}

export default connect(mapStateToProps,{ fetchAnimeList })(SearchBar);


