const express = require('express')
const app = express()
const connectdb = require('./connection')
const dotenv = require('dotenv')
const bodyParser = require('body-parser')
const path = require('path')
dotenv.config({path: '.env'})
const moviesRouter = require('./routes/movies')

connectdb()

//app.set('view engine', 'js')
//app.set('views', path.join(__dirname, 'clients/src/index'))

app.use(bodyParser.json())
//app.use(bodyParser.urlencoded({extended: true}))
app.use('/', moviesRouter)

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('clients/build'))
    app.get('*', (req,res) => {
        res.sendFile(path.resolve(__dirname, 'clients/build/index.html'))
    })
}


app.listen(process.env.PORT || 5000, () => {
    console.log(`running on http://localhost:5000`)
})