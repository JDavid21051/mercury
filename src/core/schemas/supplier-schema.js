/*
 * @JDavid21051. Copyright (c) 2023. All rights reserved.
 * @JDavid21051. Copyright (c) 2023. Todos los derechos reservados.
 */

/*
 * Project:      mercury
 * Developed by: Juan David Pelaez Cumbe
 * Date:         18/09/23 - 11:38 PM
 * Module name:  supplier-schemas
 * File name:    supplier-schemas.js
 * IDE:          WebStorm
 */
import z from 'zod'
import { ERRORS_SCHEMA } from './error-schema.js'

const supplierField = {
  name: z.string(ERRORS_SCHEMA.supplier.name).max(250),
  nit: z.string(ERRORS_SCHEMA.supplier.nit).min(9).max(10)
}

const supplierId = {
  id: z.string(ERRORS_SCHEMA.supplier.id.string).uuid(ERRORS_SCHEMA.supplier.id.uuid)
}

const supplierGetIdSchema = z.object(supplierId)
const supplierCreateSchema = z.object(supplierField)
const supplierUpdateSchema = z.object(
  {
    ...supplierId,
    ...supplierField
  })

/*
const supplierUpdateSchema = z.object({
  id: z.string(ERRORS_SCHEMA.supplier),
  name: z.string(ERRORS_SCHEMA.supplier.name),
  nit: z.string(ERRORS_SCHEMA.supplier.nit).min(9).max(10)
}) */

export async function validateCreateSupplier (schema) {
  return supplierCreateSchema.safeParseAsync(schema)
}

export async function validateUpdateSupplier (schema) {
  return supplierUpdateSchema.safeParseAsync(schema)
}

export async function validateGetIdSupplier (schema) {
  return supplierGetIdSchema.safeParseAsync(schema)
}

