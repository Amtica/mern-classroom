import config from './../config/config'
import app from './express'
import mongoose from 'mongoose'

// Connection URL
mongoose.connect(config.mongoUri)
  .then(() => {
    console.info('Connected to MongoDB')
  })
  .catch((err) => {
    console.error('Unable to connect to database:', err)
    throw new Error(`unable to connect to database: ${config.mongoUri}`)
  })

mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error:', err)
})

app.listen(config.port, (err) => {
  if (err) {
    console.log(err)
  }
  console.info('Server started on port %s.', config.port)
})