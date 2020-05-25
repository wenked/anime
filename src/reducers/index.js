import { combineReducers } from 'redux';


/*export default (state = [],action) =>{
    switch (action.type){
        case 'FETCH_POSTS':
            return action.payload;
        default:
            return state;    

    }
};*/

const animeListReducer = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_ANIMELIST':
            return action.payload;
        default:
            return state;
    }
}

const topFiveReducer = (state = [], action) => {
    switch (action.type){
        case 'ADD_ANIME':
            return [...state,action]
        case 'DISCARD_ANIME':
            return (state.filter((e) => e.title !== action.payload))
        default:
            return state
    }
}


export default combineReducers({
    animeList: animeListReducer,
    topFive: topFiveReducer
})


