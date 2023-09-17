/*
 * @JDavid21051. Copyright ©. 2023. All rights reserved.
 * @JDavid21051. Copyright ©. 2023. Todos los derechos reservados.
 */

/*
 * Project:      mercury
 * Developed by: Juan David Pelaez Cumbe
 * Date:         15/09/23 - 10:28 PM
 * Module name:  query-master.ts
 * File name:    query-master.ts
 * IDE:          WebStorm
 */

import {supplierFields} from '../db/fields';

export const queryMasterControl = {
    supplier: {
        getAll: () => {
            return 'SELECT ' + supplierFields.toString() + ' FROM `supplier`;';
        }
    }
};