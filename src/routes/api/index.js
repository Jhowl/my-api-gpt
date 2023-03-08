import { Router } from 'express'

import generateContent from './generateContent.js'

const router = Router()
router.use('/openai', generateContent)


export default router
