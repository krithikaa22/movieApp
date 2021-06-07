import {GET_MOVIES, ADD_MOVIES, DELETE_MOVIES, EDIT_MOVIES, MOVIES_LOADING, VIEW_MOVIE, SEARCH_MOVIES} from './types';
import axios from 'axios';

export const deleteMovies = (id) => dispatch => {
    console.log("action")
    axios 
     .delete(`/api/movies/${id}`)
     .then(res => {
         console.log('done')
         dispatch({
            type: DELETE_MOVIES,
            payload: id
         })
     })
}

export const getMovies = () => dispatch => {
    dispatch(setMoviesLoading());
    axios 
     .get('/api/movies')
     .then(res =>  dispatch({
         type: GET_MOVIES,
         payload: res.data
     }))
}


export const editMovie = (movie) => dispatch => {
    axios
     .post(`/api/movies/edit?id=${movie.id}`, movie)
     .then(res => {
         dispatch({
             type: EDIT_MOVIES,
             payload: res.data
         })
         console.log(res.data)
     })
     return 'done'
}

export const addMovies = (movie) => dispatch => {
    axios 
     .post('/api/movies', movie)
     .then(res => {
         dispatch({
         type: ADD_MOVIES,
         payload: res.data
     })
     console.log(res) 
    })
}

export const viewMovie = (id) =>dispatch => {
    axios
     .get(`/api/movies?id=${id}`)
     .then(res => {
         dispatch({
             type: VIEW_MOVIE,
             payload: res.data
         })
     })
}

export const updateReview = (id, data) => dispatch => {
    console.log(data)
    axios 
     .post(`/api/movies/review/${id}/${data}`)
     .then(res => {
         dispatch({
            type: VIEW_MOVIE,
            payload: res.data
         })
         console.log(res.data)
     })
}

export const searchMovie = (val) => dispatch => {
    axios
     .get(`/api/movies/search?name=${val}`)
     .then(res => {
         dispatch({
             type: SEARCH_MOVIES,
             payload: res.data.data
         })
         console.log(res.data.data)
     })
}

export const setMoviesLoading = () => {
    return {
        type: MOVIES_LOADING
    }
}