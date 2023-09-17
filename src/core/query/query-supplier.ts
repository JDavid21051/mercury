/*
 * @JDavid21051. Copyright ©. 2023. All rights reserved.
 * @JDavid21051. Copyright ©. 2023. Todos los derechos reservados.
 */

/*
 * Project:      mercury
 * Developed by: Juan David Pelaez Cumbe
 * Date:         15/09/23 - 10:09 PM
 * Module name:  query-supplier.ts
 * File name:    query-supplier.ts
 * IDE:          WebStorm
 */


import {queryMasterControl} from './query-master';

export const querySelect = () => {
    // TODO Imprimir query sql funcionando en formato correcto
    return queryMasterControl.supplier.getAll();
};