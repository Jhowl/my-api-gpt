import cors from 'cors'
import { json, urlencoded } from 'express'
// import boolParser from 'express-query-boolean'
// import helmet from 'helmet'


// import authTokenFromRequest from 'src/middlewares/authTokenFromRequest'

// import query from 'src/middlewares/query'

export default app => {
  app.use(cors({ exposedHeaders: ['x-app-after', 'x-app-total', 'x-app-totalpages'] }))
  // app.use(helmet())
  app.use(urlencoded({ extended: true }))
  app.use(json({ limit: '10mb' })) // Need increase limit for the fallback of the Facebook Ads.
  // app.use(boolParser())
  // app.use(query())

  // app.use(authTokenFromRequest())

}
