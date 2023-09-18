/*
 * @JDavid21051. Copyright (c) 2023. All rights reserved.
 * @JDavid21051. Copyright (c) 2023. Todos los derechos reservados.
 *
 */

/*
 * Project:      mercury
 * Developed by: Juan David Pelaez Cumbe
 * Date:         17/09/23 - 9:18 PM
 * Module name:  supplier-controller.ts
 * File name:    supplier-controller.ts
 * IDE:          WebStorm
 */

import { SupplierModel } from '../models/supplier-model'

export class SupplierController {
  static getAll = async (req: any, res: any): Promise<void> => {
    // const { genre } = req.query
    console.log(req.query)
    const supplierList = await SupplierModel.getAll()
    res.json(supplierList)
  }

  /*

    static async getById (req, res) {

      res.status(404).json({ message: 'Movie not found' })
    }

    static async create (req, res) {
      const result = validateMovie(req.body)

      if (!result.success) {
        // 422 Unprocessable Entity
        return res.status(400).json({ error: JSON.parse(result.error.message) })
      }

      const newMovie = await MovieModel.create({ input: result.data })

      res.status(201).json(newMovie)
    }

    static async delete (req, res) {
      const { id } = req.params

      const result = await MovieModel.delete({ id })

      if (result === false) {
        return res.status(404).json({ message: 'Movie not found' })
      }

      return res.json({ message: 'Movie deleted' })
    }

    static async update (req, res) {
      const result = validatePartialMovie(req.body)

      if (!result.success) {
        return res.status(400).json({ error: JSON.parse(result.error.message) })
      }

      const { id } = req.params

      const updatedMovie = await MovieModel.update({
        id,
        input: result.data
      })

      return res.json(updatedMovie)
    }
  */
}
