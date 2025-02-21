import config from './../config/config'
import app from './express'
app.listen(config.port, (err) => {
 if (err) {
 console.log(err)
 }
 console.info('Server started on port %s.', config.port)
})

import mongoose from 'mongoose'
mongoose.Promise = global.Promise
mongoose.connect(config.mongoUri,{useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true })
mongoose.set('useFindAndModify', false);
mongoose.connection.on('error', () => {
 throw new Error(`unable to connect to database: ${mongoUri}`)
})

