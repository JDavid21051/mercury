/*
 * @JDavid21051. Copyright (c) 2023. All rights reserved.
 * @JDavid21051. Copyright (c) 2023. Todos los derechos reservados.
 */

/*
 * Project:      mercury
 * Developed by: Juan David Pelaez Cumbe
 * Date:         19/09/23 - 10:39 PM
 * Module name:  supplier-controller
 * File name:    supplier-controller.js
 * IDE:          WebStorm
 */

import { validateSupplier } from '../core/schemas/supplier-schema.js'

export class SupplierController {
  constructor ({ supplier }) {
    this.supplierModel = supplier
  }

  getAll = async (req, res) => {
    const movies = await this.supplierModel.getAll()
    res.json(movies)
  }

  create = async (req, res) => {
    const result = await validateSupplier(req.body)
    if (!result.success) {
      return res.status(400).json({ error: JSON.parse(result.error.message) })
    }
    const newMovie = await this.supplierModel.create(result.data)
    res.status(201).json(newMovie)
  }
}
