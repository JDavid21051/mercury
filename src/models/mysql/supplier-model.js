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
import { DEFAULT_CONFIG } from '../../core/bd/connection-config.js'
import { FIELD_NAME_CONTROL } from '../../core/bd/name-field.const.ts.js'

const connection = await mysql.createConnection(process.env.DATABASE_URL ?? DEFAULT_CONFIG)

export class SupplierModel {
  static async getAll () {
    try {
      const [suppliers] = await connection.query(
        'SELECT nit, name, BIN_TO_UUID(uuid) uuid FROM supplier Order BY ? DESC',
        [FIELD_NAME_CONTROL.supplier.order]
      )
      if (suppliers.length === 0) return []
      return suppliers
    } catch (e) {
      console.log(e)
      throw new Error('Error creating a supplier')
    }
  }

  static async create (data) {
    const [suppliers] = await connection.query(
      'INSERT INTO supplier (uuid, name, nit) VALUES (uuid_to_bin(?), ? ,?)', [
        randomUUID(), data.name, data.nit
      ]
    )
    console.log(suppliers)
    return suppliers
  }

}
