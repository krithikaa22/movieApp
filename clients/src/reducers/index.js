import {combineReducers} from 'redux';
import movieReducer from './itemReducer'


export default combineReducers({
    movies: movieReducer
})