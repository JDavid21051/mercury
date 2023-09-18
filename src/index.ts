/*
 * @JDavid21051. Copyright ©. 2023. All rights reserved.
 * @JDavid21051. Copyright ©. 2023. Todos los derechos reservados.
 */
/*
 * priority
 * tsx, ts, node, jsx, js, json
 */

import express, { Express, json } from 'express'
import diaryRouter from './routes/diaries'
import supplier_router from './routes/supplier'
import { corsMiddleware } from './core/middlewares/cors'

const appServer: Express = express()
const PORT = 3000

appServer.use(json()) // middleware que transforma la req.body a un json
appServer.use(corsMiddleware()) // middleware que soporta la insidencia de cros
appServer.disable('x-powered-by')

appServer.use('/api/diaries', diaryRouter)
appServer.use('/api/supplier', supplier_router)

appServer.get('/ping', (_req, res) => {
  const pongResult = {
    _req,
    res,
    PORT
  }
  res.send(pongResult)
  console.log(pongResult)
})

appServer.listen(PORT, (): void => {
  console.log(`Server running on port ${PORT}`)
})
