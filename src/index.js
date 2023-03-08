import './config/dotenv.js'
import express from 'express';

import middlewares from './middlewares/index.js'
import debug from './helpers/debug.js'
import router from './routes/index.js';

const { HOST, PORT } = process.env

const app = express();

middlewares(app)

app.use('/', router)

const server = app.listen(PORT, () => {
  debug('server', `Server running on http://${HOST}:${PORT}`)
})

