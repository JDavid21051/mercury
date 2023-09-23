/*
 * @JDavid21051. Copyright (c) 2023. All rights reserved.
 * @JDavid21051. Copyright (c) 2023. Todos los derechos reservados.
 */

import express, { json } from 'express' // require -> commonJS
import { corsMiddleware } from './src/core/middlewares/cors.js'
import { createSupplierRouter } from './src/core/routes/supplier-routes.js'
import 'dotenv/config'
import { createPingRouter } from './src/core/routes/ping-routes.js'
import { createApiRouter } from './src/core/routes/base-routes.js'

export const createApp = ({
  supplier
}) => {
  const app = express()
  const PORT = process.env.PORT ?? 3000

  app.disable('x-powered-by')

  app.use(json())

  app.use(corsMiddleware())

  app.use('/ping', createPingRouter())

  app.use('/api', createApiRouter())

  app.use('/api/supplier', createSupplierRouter({ supplier }))

  app.use((req, res) => {
    res.setHeader('Content-Type', 'text/html')
    res.status(404).send('<h1>Error 404 please specify a valid entry</h1>')
  })

  app.listen(PORT, () => {
    console.log('server running on port ' + PORT)
  })
}
