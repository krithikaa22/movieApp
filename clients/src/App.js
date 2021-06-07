import React, {useState} from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/AppNavBar';
import Movies from './components/Movies';
import Add from './components/AddMovie';
import View from './components/VIewMovie';
import Search from './components/SearchMovies';
import {Provider} from 'react-redux';
import store from './Store'
import Edit from './components/EditMovie';
import Routes from './routes/routes'


function App() {
  
  return (
    <Provider store = {store}>
      <div className="App">
        <Navbar></Navbar>
        <Routes></Routes>
      </div>
      </Provider>
  )
}

export default App;
