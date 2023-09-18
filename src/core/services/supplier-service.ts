/*
 * @JDavid21051. Copyright ©. 2023. All rights reserved.
 * @JDavid21051. Copyright ©. 2023. Todos los derechos reservados.
 */

/*
 * Project:      mercury
 * Developed by: Juan David Pelaez Cumbe
 * Date:         13/09/23 - 11:30 PM
 * Module name:  supplierService.ts
 * File name:    supplierService.ts
 * IDE:          WebStorm
 */

export const findAll = (): any => {
  try {
    /* msqlConnection.query(querySupplier.querySelect(), (error: MysqlError | null, results, _fieldList: FieldInfo[] | undefined) => {
      if (error) throw new Error('Error getting supplier list')
      console.log(results)
      return results
    }) */
  } catch (e) {
    throw new Error('Error getting supplier list')
  }
}
