const app = require('express')()

const { PORT } = process.env

// Pre-route middlewares
require('./src/middlewares/pre-route.middleware')(app)

// Ping route for testing connetion
app.get('/ping', (req, res) => res.status(200).send('Hello world!'))

// Listen to server port
app.listen(PORT, async () => {
    // Initialize MongoDB
    await require('./src/db/mongodb.config')()
    console.log(`:::> Server listening on ${PORT} @ http://localhost:${PORT}`)
})

// On  server error
app.on("error", (error) => {
    console.error(`<::: An error occurred on the server: \n ${error}`);
});

module.exports = app