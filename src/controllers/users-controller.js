/*
 * @JDavid21051. Copyright (c) 2023. All rights reserved.
 * @JDavid21051. Copyright (c) 2023. Todos los derechos reservados.
 */

/*
 * Project:      mercury
 * Developed by: Juan David Pelaez Cumbe
 * Date:         29/12/23 - 19:04
 * Module name:  users-controller
 * File name:    users-controller.js
 * IDE:          WebStorm
 */

import { BaseController } from './base-controller.js'

export class UsersController extends BaseController {
  constructor ({ users }) {
    super()
    this.usersModel = users
  }

  getAll = async (req, res) => {
    const supplierList = await this.usersModel.getAll()
    res.status(202).json(supplierList)
  }
}
