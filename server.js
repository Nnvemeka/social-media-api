const express = require('express')

const { PORT } = process.env

const app = express()

// Parse JSON data
app.use(express.json())

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