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
import { SupplierController } from '../../controllers/supplier-controller.js'

export const createSupplierRouter = ({ supplier }) => {
  const moviesRouter = Router()

  const controller = new SupplierController({ supplier })

  moviesRouter.get('/', controller.getAll)
  moviesRouter.post('/create', controller.create)

  return moviesRouter
}

