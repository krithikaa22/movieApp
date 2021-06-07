const express = require('express')
const router = express.Router()
const movie = require("../models/movies")

//all movies route
router.get('/api/movies', (req,res) => {
    if(req.query.id)
    {
        movie.findById(req.query.id)
         .then(items => {
             res.json(items)
          })
    }
    else
    {
        movie.find()
        .then(items => {
            res.status(200).json(items)
        })
    }
})

//edit route
router.post('/api/movies/edit', (req,res) => {
    let movieId = req.query.id
    movie.findByIdAndUpdate(movieId, req.body, {useFindAndModify: false})
    .then(data => {
        movie.findById(movieId)
        .then(data => {
            res.json(data)
         })
    })
})

//search route
router.get('/api/movies/search', (req,res) => {
    let searchOption = {}
    if(req.query.name !== null && req.query.name !== '')
    {
        searchOption.name = req.query.name
    }
    movie.find({name: searchOption.name})
    .then(data => {
        res.status(200).json({data: data})
     })
})

//add review
router.post('/api/movies/review/:id/:data', (req,res) => {
    let movieId = req.params.id;
    movie.findByIdAndUpdate(movieId,{$push: {review: req.params.data}})
     .then(data => {
        movie.findById(movieId) 
         .then(movie => {
             res.json(movie)
         })
     })
    
})


//delete movie
router.delete('/api/movies/:id' , (req,res) => {
    let movieId = req.params.id
    movie.findByIdAndDelete(movieId)
     .then(() => {
         movie.find()
          .then(data => res.json({data: data}))
     })
})



//add new movies route
router.post("/api/movies", (req,res) => {
    const Movie = new movie({
        name: req.body.name,
        length: req.body.length,
        rate: req.body.rate,
        genre: req.body.genre,
        desc: req.body.desc,
        review: req.body.review
    })
    Movie
        .save(Movie)
        .then(data => res.json({data: data}) /*{
            movie.find()
             .then(movies => res.json({data: movies}))}*/
        )
        .catch(err => console.log(err.message))
})



module.exports = router