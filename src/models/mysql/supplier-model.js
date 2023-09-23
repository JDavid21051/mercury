/*
 * @JDavid21051. Copyright (c) 2023. All rights reserved.
 * @JDavid21051. Copyright (c) 2023. Todos los derechos reservados.
 */

/*
 * Project:      mercury
 * Developed by: Juan David Pelaez Cumbe
 * Date:         19/09/23 - 10:43 PM
 * Module name:  supplier-model
 * File name:    supplier-model.js
 * IDE:          WebStorm
 */

import mysql from 'mysql2/promise'
import { randomUUID } from 'node:crypto'
import { DEFAULT_DB_CONFIG } from '../../core/bd/connection-config.js'
import { FIELD_NAME_CONTROL } from '../../core/bd/name-field.const.ts.js'

const connection = await mysql.createConnection(process.env.DATABASE_URL ?? DEFAULT_DB_CONFIG)

export class SupplierModel {
  static async getAll () {
    try {
      const [suppliers] = await connection.query(
        'SELECT BIN_TO_UUID(id) as id, nit, name FROM supplier Order BY ? DESC;',
        [FIELD_NAME_CONTROL.supplier.order]
      )
      if (suppliers.length === 0) return []
      return suppliers
    } catch (e) {
      throw new Error('Error obtaining the list of supervisors.')
    }
  }

  static async getById (data) {
    try {
      const [suppliers] = await connection.query(
        'SELECT BIN_TO_UUID(id) as id, nit, name FROM supplier WHERE id = UUID_TO_BIN(?)  ;',
        [data.id]
      )
      if (suppliers.length === 0) return []
      return suppliers
    } catch (e) {
      throw new Error('Error getting supervisor.')
    }
  }

  static async create (data) {
    const [suppliers] = await connection.query(
      'INSERT INTO supplier (id, name, nit) VALUES (UUID_TO_BIN(?), ? ,?)', [
        randomUUID(), data.name, data.nit
      ]
    )
    return suppliers
  }

  static async update (data) {
    const [suppliers] = await connection.query(
      'UPDATE supplier SET name = ?, nit = ? WHERE uuid = UUID_TO_BIN(?) ;', [
        data.name, data.nit, data.uuid
      ]
    )
  }

}
