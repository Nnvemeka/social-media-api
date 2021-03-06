const express = require('express')
const helmet = require('helmet')
const morgan = require('morgan')

module.exports = (app) => {
    app.use(helmet())
    app.use(morgan('dev'))
    app.use(express.json())
    app.use(express.urlencoded({ extended: false }))

    return app
}