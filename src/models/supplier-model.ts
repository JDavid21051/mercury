/*
 * @JDavid21051. Copyright (c) 2023. All rights reserved.
 * @JDavid21051. Copyright (c) 2023. Todos los derechos reservados.
 */

/*
 * Project:      mercury
 * Developed by: Juan David Pelaez Cumbe
 * Date:         17/09/23 - 11:52 PM
 * Module name:  supplier-model.ts
 * File name:    supplier-model.ts
 * IDE:          WebStorm
 */

import mysql, { Connection } from 'mysql2/promise'
import { DEFAULT_CONFIG } from '../core/db/mysql-config'
import { querySelect } from '../core/query'

let connection: Connection

export class SupplierModel {

  constructor () {
    void this.setConnection().then()
  }

  async setConnection (): Promise<void> {
    connection = await mysql.createConnection(DEFAULT_CONFIG)
  }

  static async getAll (): Promise<any> {
    const [supplier] = await connection.query(
      querySelect()
    )
    console.log(supplier)
    return supplier
  }

  /* static async getById ({ id }) {
    const [movies] = await connection.query(
      `SELECT title, year, director, duration, poster, rate, BIN_TO_UUID(id) id
        FROM movie WHERE id = UUID_TO_BIN(?);`,
      [id]
    )

    if (movies.length === 0) return null

    return movies[0]
  }

  static async create ({ input }) {
    const {
      genre: genreInput, // genre is an array
      title,
      year,
      duration,
      director,
      rate,
      poster
    } = input

    // todo: crear la conexión de genre

    // crypto.randomUUID()
    const [uuidResult] = await connection.query('SELECT UUID() uuid;')
    const [{ uuid }] = uuidResult

    try {
      await connection.query(
        `INSERT INTO movie (id, title, year, director, duration, poster, rate)
          VALUES (UUID_TO_BIN("${uuid}"), ?, ?, ?, ?, ?, ?);`,
        [title, year, director, duration, poster, rate]
      )
    } catch (e) {
      // puede enviarle información sensible
      throw new Error('Error creating movie')
      // enviar la traza a un servicio interno
      // sendLog(e)
    }

    const [movies] = await connection.query(
      `SELECT title, year, director, duration, poster, rate, BIN_TO_UUID(id) id
        FROM movie WHERE id = UUID_TO_BIN(?);`,
      [uuid]
    )

    return movies[0]
  }

  static async delete ({ id }) {
    // ejercio fácil: crear el delete
  }

  static async update ({
    id,
    input
  }) {
    // ejercicio fácil: crear el update
  } */
}
