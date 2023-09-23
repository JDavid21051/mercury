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

import { validateGetIdSupplier, validateUpdateSupplier } from '../core/schemas/supplier-schema.js'
import { BaseController } from './base-controller.js'

export class SupplierController extends BaseController {
  constructor ({ supplier }) {
    super()
    this.supplierModel = supplier
  }

  getAll = async (req, res) => {
    const supplierList = await this.supplierModel.getAll()
    res.json(supplierList)
  }

  getById = async (req, res) => {
    const result = await validateGetIdSupplier(req.params)
    if (!result.success) {
      return res.status(400).json({ error: JSON.parse(result.error.message ?? result) })
    }

    const supplier = await this.supplierModel.getById(result.data)
    if (supplier.length === 0) {
      return res.status(400).json({ error: { message: 'Error getting supervisor' } })
    }

    res.json(supplier[0])
  }

  create = async (req, res) => {
    const result = await validateGetIdSupplier(req.body)
    if (!result.success) {
      return res.status(400).json({ error: JSON.parse(result.error.message) })
    }
    const newSupplier = await this.supplierModel.create(result.data)
    res.status(201).json(newSupplier)
  }

  update = async (req, res) => {
    const result = await validateUpdateSupplier(req.body)
    if (!result.success) {
      return res.status(400).json({ error: JSON.parse(result.error.message) })
    }
    const supplierUpdated = await this.supplierModel.update(result.data)
    res.status(201).json(supplierUpdated)
  }
}
