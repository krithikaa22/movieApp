const mongoose = require('mongoose')
const config = require('config')

const connectdb = async () => {
    const db = config.get('mongoURI');
    try {
        const con = await mongoose.connect(db, {
            useNewUrlParser: true,
            useCreateIndex: true
        })
        console.log("database connected")
    }
    catch(err){
        console.log(err)
        process.exit(1)
    }
}

module.exports = connectdb