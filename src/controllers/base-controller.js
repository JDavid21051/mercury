/*
 * @JDavid21051. Copyright (c) 2023. All rights reserved.
 * @JDavid21051. Copyright (c) 2023. Todos los derechos reservados.
 */

/*
 * Project:      mercury
 * Developed by: Juan David Pelaez Cumbe
 * Date:         23/09/23 - 10:57 AM
 * Module name:  base-controller.js
 * File name:    base-controller.js
 * IDE:          WebStorm
 */

export class BaseController {

  returnError (res, result, statusCode) {
    return res.status(statusCode).json({ error: JSON.parse(result.error.message ?? result) })
  }
}
