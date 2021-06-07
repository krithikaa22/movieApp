import React, {Component} from 'react';
import {
    Form, Button, Label, Input, FormGroup
} from 'reactstrap';
import {connect} from 'react-redux';
import {addMovies} from '../actions/movieAction';
import PropTypes from 'prop-types';
import {Redirect} from 'react-router-dom'


class AddMovies extends Component {

    state = {
        name: '',
        length: '',
        rate: '',
        desc: '',
        genre: '',
        review: '',
        redirect: null
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    submit = (e) => {
        e.preventDefault();
        const newMovie = {
            name: this.state.name,
            length: this.state.length,
            rate: this.state.rate,
            desc: this.state.desc,
            genre: this.state.genre,
            review: this.state.review
        }
        this.props.addMovies(newMovie)
        this.setState({redirect: '/'})
    }

    render(){
        if(this.state.redirect !== null) return(<Redirect to='/'></Redirect>)
      return( 
        <Form onSubmit={this.submit}>
            <h1>Add Movie</h1>
            <FormGroup>
                <Label for="name"> Name:  </Label>
                <Input type="text" name="name" onChange={this.onChange}></Input>
            </FormGroup>
            <FormGroup>
                <Label for="length"> Duration: </Label>
                <Input type="text" name="length" onChange={this.onChange}></Input>
            </FormGroup>
            <FormGroup>
                <Label for="rate"> Rating: </Label>
                <Input type="select" name="rate" id="" onChange={this.onChange}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </Input>
            </FormGroup>
            <FormGroup>
                <Label for="genre">Genre: </Label>
                <Input type="text" name="genre" onChange={this.onChange}></Input>
            </FormGroup>
            <FormGroup>
                <Label for="desc">Description: </Label>
                <Input type="textarea" type="text" name="desc" onChange={this.onChange}></Input>
            </FormGroup>
            <FormGroup>
                <Label for="desc">Review: </Label>
                <Input type="textarea" type="text" name="review" onChange={this.onChange}></Input>
            </FormGroup>
            <FormGroup>
                <Button id="add-form-btn">Submit</Button>
            </FormGroup>
        </Form>
      )
    }
}


const mapStateToProps = (state) => {
    return({
        movies: state.movies
    })
}

export default connect(mapStateToProps, {addMovies})(AddMovies)
