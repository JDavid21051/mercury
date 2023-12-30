/*
 * @JDavid21051. Copyright (c) 2023. All rights reserved.
 * @JDavid21051. Copyright (c) 2023. Todos los derechos reservados.
 */

/*
 * Project:      mercury
 * Developed by: Juan David Pelaez Cumbe
 * Date:         29/12/23 - 19:02
 * Module name:  user-router
 * File name:    user-router.js
 * IDE:          WebStorm
 */

import { Router } from 'express'
import { UsersController } from '../../controllers/users-controller.js'

export const createUsersRouter = ({ users }) => {
  const routerRef = Router()
  const controller = new UsersController({ users })
  routerRef.get('/', controller.getAll)
  return routerRef
}

