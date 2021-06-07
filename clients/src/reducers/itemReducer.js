import {GET_MOVIES, ADD_MOVIES, DELETE_MOVIES, EDIT_MOVIES, MOVIES_LOADING, VIEW_MOVIE, SEARCH_MOVIES} from '../actions/types';


const initialState = {
    movies: [],
    loading: false
}

export default function(state = initialState, action) {
    switch(action.type){
        case GET_MOVIES: return({...state, movies: action.payload, loading: false}); 
        case ADD_MOVIES: return {...state, movies: [action.payload, ...state.movies]} ; 
        case MOVIES_LOADING: return { ...state, loading: true  };
        case EDIT_MOVIES: return {...state, movies: [action.payload]};
        case VIEW_MOVIE: return {...state, movies: [action.payload]};
        case DELETE_MOVIES: return {...state, movies: state.movies.filter(el => el._id !== action.payload)}
        case SEARCH_MOVIES: console.log(action.payload); return { ...state, movies: action.payload };
        default: return state;
    }
}