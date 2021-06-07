import React, {useState} from 'react'
import {Redirect} from 'react-router-dom'
import {Form, FormGroup, Label, Input, Button} from 'reactstrap'
import {connect} from 'react-redux';
import {viewMovie, editMovie ,deleteMovies, updateReview} from '../actions/movieAction';
import PropTypes from 'prop-types';

function Review (props) {

    const [review, setReview] = useState('')
    const [req, setReq] = useState(null)

    const reviewChange = (e) => {
        setReview(e.target.value)
    }

    const reviewSubmitHandler = (e) => {
        e.preventDefault();
        props.updateReview(props.id,review)
        setReq('/')
    }
    if(req !== null) return <Redirect to = '/'></Redirect>
    return (
        <div>
            <Form className="review-form" onSubmit={reviewSubmitHandler}>
                <FormGroup>
                    <Label for="review">Enter Review: </Label>
                    <Input type="text" name="review" onChange={reviewChange}></Input>
                </FormGroup>
                <FormGroup>
                    <Button>Add review</Button>
                </FormGroup>
            </Form>
        </div>
    )
}

const mapStateToProps = (state) => {
    return({
        movies: state.movies
    })
}

export default connect(mapStateToProps,{updateReview})(Review)