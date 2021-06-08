import React, { Component, useEffect, useState } from 'react';
import Review from '../components/Review'
import {connect} from 'react-redux';
import {viewMovie, editMovie ,deleteMovies, updateReview} from '../actions/movieAction';
import PropTypes from 'prop-types';
import {Button, Input, Label, Form, FormGroup} from 'reactstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faStar} from '@fortawesome/free-solid-svg-icons'
import { Redirect } from 'react-router';

class Movies extends Component {

    state = {redirect: null, searchBar: false, id: null};
    
    editHandler = (id) => {
        this.props.viewMovie(id);
        this.setState({redirect: '/edit'})
    }

    deleteHandler = async (id) => {
        let res = await this.props.deleteMovies(id);
        this.setState({redirect: '/'})
    }
    render() {
        if(this.state.redirect ) return(<Redirect to={this.state.redirect}></Redirect>)
        const {movies} = this.props.movies;
        console.log(movies)
        const stars = [];
        for(var i=0; i<movies[0].rate; i++) stars.push( <FontAwesomeIcon icon={faStar} style={{color: '#aa805a'}}></FontAwesomeIcon>)
        for(var i = movies[0].rate; i<5; i++) stars.push(<FontAwesomeIcon icon={faStar} style={{opacity:0.5}}></FontAwesomeIcon>)
        if(this.props.movies.loading == false)
        return(
            <div className="col view">
               <div class="movie-name">
                    {movies[0].name}
                </div>
                <div class="movie-rate-length">
                    <div>
                    {stars}
                    </div>
                    <div>{movies[0].length} hrs</div>
                </div>
                <div class="movie-genre">
                <span>GENRE: </span> {movies[0].genre}
                </div>
                <div class="movie-desc">
                <span>DESCRIPTION: </span> {movies[0].desc}
                </div>
                <div class="movie-link">
                    <Button onClick={this.editHandler.bind(this, movies[0]._id)} id="add-form-btn">Edit</Button>
                    <Button onClick={this.deleteHandler.bind( this, movies[0]._id)} id='add-form-btn'>Delete</Button>
                </div>
                <hr></hr>
                <Review id={movies[0]._id}></Review>
                <hr></hr>
                <div id="review-heading">REVIEWS</div>
                <div className="movie-review">
                    {movies[0].review.map(el => {
                        if(el !== '') return <div>{el}<hr></hr></div>
                    })}
                </div>
            </div>
        )
        else return null
    }
}


Movies.propTypes = {
    viewMovie: PropTypes.func.isRequired,
    editMovie: PropTypes.func.isRequired,
    deleteMovies: PropTypes.func.isRequired,
    movies: PropTypes.object.isRequired
}

const mapStateToProps = (state) => {
    return({
        movies: state.movies
    })
}

export default connect(mapStateToProps, { viewMovie, editMovie, deleteMovies, updateReview })(Movies);
