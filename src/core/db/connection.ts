/*
 * @JDavid21051. Copyright ©. 2023. All rights reserved.
 * @JDavid21051. Copyright ©. 2023. Todos los derechos reservados.
 */

/*
 * Project:      mercury
 * Developed by: Juan David Pelaez Cumbe
 * Date:         13/09/23 - 11:39 PM
 * Module name:  mysql.connection.ts
 * File name:    mysql.connection.ts
 * IDE:          WebStorm
 */

import mysql from 'mysql';
import {DEFAULT_CONFIG} from './mysql-config';

const msqlConnection: mysql.Connection = mysql.createConnection(DEFAULT_CONFIG);

export default msqlConnection;