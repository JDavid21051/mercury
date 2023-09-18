/*
 * @JDavid21051. Copyright ©. 2023. All rights reserved.
 * @JDavid21051. Copyright ©. 2023. Todos los derechos reservados.
 */

/*
 * Project:      mercury
 * Developed by: Juan David Pelaez Cumbe
 * Date:         13/09/23 - 11:29 PM
 * Module name:  supplier.ts
 * File name:    supplier.ts
 * IDE:          WebStorm
 */

import { Router } from 'express'
import { SupplierController } from '../controllers/supplier-controller'

const controller = SupplierController

export const supplierRouter: Router = Router()

supplierRouter.get('/', (req, res) => {
  void controller.getAll(req, res)
})
/*
supplierRouter.get('/', (_req: Request<any>, response) => {
  try {
    response.send(supplierService.findAll())
    console.log(supplierService.findAll())
  } catch (e) {
    response.status(404).json({ error: JSON.parse(e) })
  }
}) */
export default supplierRouter
