const mongoose = require('mongoose')

const options = {
    useNewURLParser: true,
    autoIndex: true
}

module.exports = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL, options)
        console.log(':::> Connected to MongoDB database')
    } catch (error) {
        console.log("<::: Couldn't to MongoDB database", error)
    }
}