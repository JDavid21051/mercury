/*
 * @JDavid21051. Copyright (c) 2023. All rights reserved.
 * @JDavid21051. Copyright (c) 2023. Todos los derechos reservados.
 */

import { createApp } from './app.js'

import { MovieModel } from './src/models/mysql/movie.js'
import { SupplierModel } from './src/models/mysql/supplier-model.js'

createApp({
  model: MovieModel,
  supplier: SupplierModel
})