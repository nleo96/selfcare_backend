const express = require( 'express')
const config = require( 'config')
const  bodyParser = require( 'body-parser')

const taskWebService = require ('./controllers/taskController')

const apiPort = config.get('port')
const api = express()

let server

exports.start = () => {
  api.use(bodyParser.json())
  api.use(bodyParser.urlencoded({ extended: true }))
  api.use('/', taskWebService)

  server = api.listen(
    apiPort,
    console.info(`Integration online, port: ${apiPort}`)
  )
}

exports.stop = () => {
  server.close(error => {
    if (error) {
      throw error
    }
  })
}
