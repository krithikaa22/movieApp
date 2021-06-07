import React, { Component, useEffect, useState } from 'react';
import {connect} from 'react-redux';
import {viewMovie, editMovie ,deleteMovies, getMovies} from '../actions/movieAction';
import PropTypes from 'prop-types';
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';
import  {Redirect} from 'react-router-dom'

class Movies extends Component {

    constructor(props)
    {
        super(props)
        const {movies} = this.props.movies
        this.state = {
                id: movies[0]._id,
                name: movies[0].name,
                length: movies[0].length,
                rate: movies[0].rate,
                desc: movies[0].desc,
                genre: movies[0].genre,
                redirect: null
        }

    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    //call = async  () => {await this.props.editMovie(this.state)}
    submit = async (e) => {
        e.preventDefault();
        var res = await this.props.editMovie(this.state)
        if(res)
        this.setState({redirect: '/view'})
    }

    render() {
        if(this.state.redirect !== null) return(<Redirect to='/view'></Redirect>)
        return(
            <Form onSubmit={this.submit}>
            <FormGroup>
                <Label for="name"> Name:  </Label>
                <Input type="text" name="name" onChange={this.onChange} value={this.state.name}></Input>
            </FormGroup>
            <FormGroup>
                <Label for="length"> Duration: </Label>
                <Input type="text" name="length" onChange={this.onChange} value={this.state.length}></Input>
            </FormGroup>
            <FormGroup>
                <Label for="rate"> Rating: </Label>
                <Input type="select" name="rate" id="" onChange={this.onChange} value={this.state.rate}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </Input>
            </FormGroup>
            <FormGroup>
                <Label for="genre">Genre: </Label>
                <Input type="text" name="genre" onChange={this.onChange} value={this.state.genre}></Input>
            </FormGroup>
            <FormGroup>
                <Label for="desc">Description: </Label>
                <Input type="textarea" type="text" name="desc" onChange={this.onChange} value={this.state.desc}></Input>
            </FormGroup>
            <FormGroup>
                <Button id="add-form-btn">Submit</Button>
            </FormGroup>
            
        </Form>
        )
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

export default connect(mapStateToProps, { editMovie, deleteMovies, viewMovie, getMovies})(Movies);