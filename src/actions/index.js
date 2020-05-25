import axios from 'axios';
/*    onSearchSubmit = async (term) => {
        const cors = "https://cors-anywhere.herokuapp.com/";
        const searchURL = `${cors}https://api.jikan.moe/v3/search/anime`;
        const response = await axios.get(searchURL,{
            baseURL:"https://api.jikan.moe/v3/",
            //timeout: 1000,
            params: {
                q: term
            }
        });
        console.log(response.data.results);
        this.setState({animes: response.data.results});
    } */



export const fetchAnimeList = (searchTerm) => async (dispatch) => {
        const cors = "https://cors-anywhere.herokuapp.com/";
        const searchURL = `${cors}https://api.jikan.moe/v3/search/anime`
        const response = await axios.get(searchURL,{
            baseURL:"https://api.jikan.moe/v3/",
            //timeout: 1000,
            params: {
                q: searchTerm
            }
        });
        
        dispatch({type:'FETCH_ANIMELIST',payload: response.data.results})

}

export const addAnime = (anime) => {
    return {
        type:'ADD_ANIME',
        payload: {
            title: anime.title
        }
    }
}

export const discardList = (anime) => {
    return {
        type:'DISCARD_ANIME',
        payload: anime.title
    }
}