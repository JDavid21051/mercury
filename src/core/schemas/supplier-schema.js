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

const supplierSchema = z.object({
  name: z.string(ERRORS_SCHEMA.supplier.name),
  nit: z.string(ERRORS_SCHEMA.supplier.nit).min(9).max(10)
})

export async function validateSupplier (schema) {
  return supplierSchema.safeParseAsync(schema)
}
