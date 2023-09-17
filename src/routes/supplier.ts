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

import {Router} from 'express';
import * as supplierService from '../core/services/supplier-service';

const supplierRouter: Router = Router();

supplierRouter.get('/', (_req, response) => {
    try {
        response.send(supplierService.findAll());
        console.log(supplierService.findAll());
    } catch (e) {
        response.status(404).json({error: JSON.parse(e)});
    }
});

/*
supplier_router.get('/:id', (req, res) => {
    const diary = diaryServices.findById(+req.params.id);

    return (diary != null)
        ? res.send(diary)
        : res.sendStatus(404);
});

supplier_router.post('/', (req, res) => {
    try {
        const newDiaryEntry = toNewDiaryEntry(req.body);

        const addedDiaryEntry = diaryServices.addDiary(newDiaryEntry);

        res.json(addedDiaryEntry);
    } catch (e) {
        res.status(400).send(e.message);
    }
});*/

export default supplierRouter;
