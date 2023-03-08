import { Router } from 'express'

// import auth from 'src/auth'
import generateContent from '../../../src/controllers/openai/generateContent.js'


const router = Router()

console.log('generateContent')

router.post('/create', generateContent)


export default router
