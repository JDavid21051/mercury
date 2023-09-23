/*
 * @JDavid21051. Copyright (c) 2023. All rights reserved.
 * @JDavid21051. Copyright (c) 2023. Todos los derechos reservados.
 */

/*
 * Project:      mercury
 * Developed by: Juan David Pelaez Cumbe
 * Date:         18/09/23 - 11:37 PM
 * Module name:  supplier-routes.js
 * File name:    supplier-routes.js
 * IDE:          WebStorm
 */

import { Router } from 'express'

export const createApiRouter = () => {
  const apiRouter = Router()

  apiRouter.get('/', (req, res) => {
    const template = `
      <pre style="background: lightgray">
      <h2 style="margin-left: 1rem;">List of available endpoints</h2>
  {
    'ping': '/ping',
    'Listar proveedores': 'GET/api/supplier',
    'Obtener proveedor': 'GET/api/supplier/:id',
    'Crear proveedor': 'POST/api/supplier/create',
    'Actualizar proveedor': 'PATH/api/supplier/create',
    'Eliminar proveedor': 'DELETE/api/supplier/create',
  }
      </pre>
    `
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    res.send(template)
  })
  return apiRouter
}

