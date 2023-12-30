/*
 * @JDavid21051. Copyright (c) 2023. All rights reserved.
 * @JDavid21051. Copyright (c) 2023. Todos los derechos reservados.
 */

import { createApp } from './app.js'
import { SupplierModel } from './src/models/mysql/supplier-model.js'
import { UsersModel } from './src/models/mysql/users-model.js'

createApp({
  supplier: SupplierModel,
  users: UsersModel
})
