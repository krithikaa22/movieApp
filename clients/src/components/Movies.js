import React, { Component, useEffect, useState } from 'react';
import {connect} from 'react-redux';
import {getMovies, viewMovie} from '../actions/movieAction';
import PropTypes from 'prop-types';
import {Button, Container, Row, Col} from 'reactstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faStar} from '@fortawesome/free-solid-svg-icons'
import View from './VIewMovie';
import {Redirect} from 'react-router-dom';

class Movies extends Component {

    state = {redirect: null};

    componentDidMount() {
        this.props.getMovies()
    }
   viewHandler = async (id) => {
       var res = await this.props.viewMovie(id)
       console.log(res)
       if(res) this.setState({redirect: '/view'})
    }
    render() {
        const {movies} = this.props.movies;
        if(this.state.redirect !== null) return(<Redirect to='/view'></Redirect>)
        if(this.props.movies.loading === false)
        return(
           <div>
               <Button href="/add" size="sm" color="dark" id="add-btn">Add</Button>
                <Container>
                    {movies.map(el => {
                        const stars = [];
                        for(var i=0; i<el.rate; i++) stars.push( <FontAwesomeIcon icon={faStar} style={{color: '#aa805a'}}></FontAwesomeIcon>)
                        for(var i = el.rate; i<5; i++) stars.push(<FontAwesomeIcon icon={faStar} style={ {opacity:0.5}}></FontAwesomeIcon>)
                        return(
                            <Col>
                                <div className="movie-name">{el.name}</div>
                                <div className="movie-rate-length">
                                    <div>{stars}</div> 
                                    <div>{el.length} hrs</div>
                                </div>
                                <div className="movie-genre"><span>Genre: </span>{el.genre}</div>
                                <div className="movie-desc"><span>Description: </span>{el.desc}</div>
                                <Button key={el._id} onClick={this.viewHandler.bind(this,el._id)} size="sm" color="dark">View</Button>
                            </Col>
                        )
                    })}
                </Container>
           </div>
        )
        else return null
    }
}

Movies.propTypes = {
    getMovies: PropTypes.func.isRequired,
    movies: PropTypes.object.isRequired
}

const mapStateToProps = (state) => {
    return({
        movies: state.movies
    })
}

export default connect(mapStateToProps, { getMovies, viewMovie })(Movies);
