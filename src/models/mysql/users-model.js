/*
 * @JDavid21051. Copyright (c) 2023. All rights reserved.
 * @JDavid21051. Copyright (c) 2023. Todos los derechos reservados.
 */

/*
 * Project:      mercury
 * Developed by: Juan David Pelaez Cumbe
 * Date:         29/12/23 - 19:15
 * Module name:  users-model
 * File name:    users-model.js
 * IDE:          WebStorm
 */

import mysql from 'mysql2/promise'
import { DEFAULT_DB_CONFIG } from '../../core/bd/connection-config.js'
import { FIELD_NAME_CONTROL } from '../../core/bd/name-field.const.ts.js'

const connection = await mysql.createConnection(process.env.DATABASE_URL ?? DEFAULT_DB_CONFIG)

export class UsersModel {
  static async getAll () {
    try {
      const [suppliers] = await connection.query(
        'SELECT * FROM user Order BY ? DESC;',
        [FIELD_NAME_CONTROL.supplier.order]
      )
      if (suppliers.length === 0) return []
      return suppliers
    } catch (e) {
      throw new Error('Error getting the list of supervisors.')
    }
  }
}
