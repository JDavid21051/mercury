/*
 * @JDavid21051. Copyright ©. 2023. All rights reserved.
 * @JDavid21051. Copyright ©. 2023. Todos los derechos reservados.
 */

/*
 * Project:      mercury
 * Developed by: Juan David Pelaez Cumbe
 * Date:         13/09/23 - 11:29 PM
 * Module name:  supplier.ts
 * File name:    supplier.ts
 * IDE:          WebStorm
 */

import express, {Router} from 'express';
import * as diaryServices from '../core/services/diaryServices';
import toNewDiaryEntry from '../utils/utils';

const supplierRouter: Router = express.Router();

supplierRouter.get('/', (_req, res) => {
    res.send(diaryServices.getEntriesWithoutSensitiveInfo());
});

supplierRouter.get('/:id', (req, res) => {
    const diary = diaryServices.findById(+req.params.id);

    return (diary != null)
        ? res.send(diary)
        : res.sendStatus(404);
});

supplierRouter.post('/', (req, res) => {
    try {
        const newDiaryEntry = toNewDiaryEntry(req.body);

        const addedDiaryEntry = diaryServices.addDiary(newDiaryEntry);

        res.json(addedDiaryEntry);
    } catch (e) {
        res.status(400).send(e.message);
    }
});

export default supplierRouter;
