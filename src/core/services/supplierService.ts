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

import {DiaryEntry, ISupplierControl} from '../../types';
import diaryData from './diaries.json';

const diaries: DiaryEntry[] = diaryData as DiaryEntry[];

export const addDiary = (newSupplier: ISupplierControl): ISupplierControl => {
    console.log(diaries);
    return newSupplier;
};
