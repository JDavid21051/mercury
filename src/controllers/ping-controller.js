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

import { SERVER_PORT } from '../core/port.js'

export class PingController {

  basic = async (req, res) => {
    res.send(`server running successfully, on port  ${SERVER_PORT}`)
  }
}
