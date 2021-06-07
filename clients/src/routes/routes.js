import {Route} from 'react-router-dom';
import Home from '../components/Movies';
import Add from '../components/AddMovie'
import Search from '../components/SearchMovies'
import Movies from '../components/VIewMovie'
import {viewMovie} from '../actions/movieAction'
import review from '../components/Review';
import { Component } from 'react';
 import Edit from '../components/EditMovie';
import {useLocation} from 'react-router-dom';

function Routes(){
   // const search = useLocation().search;
    //const id = new URLSearchParams(search).get('id');
    return <div>
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/add' component={Add}></Route>
        <Route exact path='/search' component={Search}></Route>
        <Route path='/view' component={Movies}></Route>
        <Route path ='/edit' component={Edit}></Route>
        <Route path = '/review' component={review}></Route>
    </div>
}

export default Routes