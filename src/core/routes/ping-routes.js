/*
 * @JDavid21051. Copyright (c) 2023. All rights reserved.
 * @JDavid21051. Copyright (c) 2023. Todos los derechos reservados.
 */

/*
 * Project:      mercury
 * Developed by: Juan David Pelaez Cumbe
 * Date:         18/09/23 - 11:37 PM
 * Module name:  supplier-routes.js
 * File name:    supplier-routes.js
 * IDE:          WebStorm
 */

import { Router } from 'express'
import { PingController } from '../../controllers/ping-controller.js'

export const createPingRouter = () => {
  const pingRouter = Router()
  const controller = new PingController()

  pingRouter.get('/', controller.basic)
  return pingRouter
}

