import React, {Component} from 'react'
import {Input, Button, Label, Form, FormGroup} from 'reactstrap'
import {connect} from 'react-redux'
import {searchMovie, viewMovie, getMovies} from '../actions/movieAction'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faStar} from '@fortawesome/free-solid-svg-icons'
import { Redirect } from 'react-router'


class SearchMovies extends Component {

    state = {
        name: '',
        redirect: null
    }

    changeHandler =(e) => {
        this.setState({name: e.target.value})
    }

    searchHandler = (e) => {
        e.preventDefault();
        console.log("exec-search")
        this.props.searchMovie(this.state.name);
    }

    viewHandler = (id) => {
        this.props.viewMovie(id);
        this.setState({redirect: '/view'})
    }

    render() {
        var {movies} = this.props.movies;
        console.log(movies)
        if(this.state.redirect !== null) return(<Redirect to='/view'></Redirect>)
        return(
            <div>
                <div>
                    <Form onSubmit={this.searchHandler} className="search">
                        <FormGroup>
                            <Label for="search">Enter Movie Name: </Label>
                            <Input type="text" name="search" onChange={this.changeHandler} ></Input>
                        </FormGroup>
                        <FormGroup>
                            <Button size='sm' id="add-form-btn">Search</Button>
                        </FormGroup>
                    </Form>
                </div>
                <div className="container">
                    {movies.map(el => {
                        const stars = [];
                        for(var i=0; i<el.rate; i++) stars.push( <FontAwesomeIcon icon={faStar} style={{color: '#aa805a'}}></FontAwesomeIcon>)
                        for(var i = el.rate; i<5; i++) stars.push(<FontAwesomeIcon icon={faStar} style={ {opacity:0.5}}></FontAwesomeIcon>)
                        return (
                        <div className="col">
                            <div className="movie-name">{el.name}</div>
                                <div className="movie-rate-length">
                                    <div>{stars}</div> 
                                    <div>{el.length} hrs</div>
                                </div>
                                <div className="movie-genre"><span>Genre: </span>{el.genre}</div>
                                <div className="movie-desc"><span>Description: </span>{el.desc}</div>
                            <Button onClick={() => this.viewHandler(el._id)} size='sm' id="add-form-btn">View</Button>
                        </div>)
                    })}
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return({
        movies: state.movies
    })
}

export default connect(mapStateToProps, {searchMovie, viewMovie, getMovies})(SearchMovies)