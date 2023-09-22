/*
 * @JDavid21051. Copyright (c) 2023. All rights reserved.
 * @JDavid21051. Copyright (c) 2023. Todos los derechos reservados.
 */

/*
 * Project:      mercury
 * Developed by: Juan David Pelaez Cumbe
 * Date:         19/09/23 - 10:37 PM
 * Module name:  error-schema.js
 * File name:    error-schema.js
 * IDE:          WebStorm
 */

export const ERRORS_SCHEMA = {
  supplier: {
    name: {
      invalid_type_error: 'Supplier name must be a string.',
      required_error: 'Supplier name is required.'
    },
    nit: {
      invalid_type_error: 'Supplier nit must be a string.',
      required_error: 'Supplier nit is required.'
    },
    id: {
      invalid_type_error: 'Supplier id must be a uuid.',
      required_error: 'Supplier id is required.'
    }
  }
}
