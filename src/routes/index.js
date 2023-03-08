import { Router } from 'express'

// import auth from 'src/auth'
import api from './api/index.js'

const router = Router()

router.get('/', (req, res) => {
  res.send('HOME')
})

router.use('/api', api)

export default router
