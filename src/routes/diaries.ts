/*
 * @JDavid21051. Copyright ©. 2023. All rights reserved.
 * @JDavid21051. Copyright ©. 2023. Todos los derechos reservados.
 */

import express, {Router} from 'express';
import * as diaryServices from '../services/diaryServices';
import toNewDiaryEntry from '../utils';
import connection from '../core/connection';
import {Connection} from 'mysql';

const router: Router = express.Router();
const iMsql: Connection = connection;

router.get('/', (_req, res) => {
    res.send(diaryServices.getEntriesWithoutSensitiveInfo());
    iMsql.query('SELECT name, nit from supplier', (err, rows, _fields) => {
        if (err) throw err
        console.log('The solution is: ', rows)
    })
});

router.get('/:id', (req, res) => {
    const diary = diaryServices.findById(+req.params.id);

    return (diary != null)
        ? res.send(diary)
        : res.sendStatus(404);
});

router.post('/', (req, res) => {
    try {
        const newDiaryEntry = toNewDiaryEntry(req.body);

        const addedDiaryEntry = diaryServices.addDiary(newDiaryEntry);

        res.json(addedDiaryEntry);
    } catch (e) {
        res.status(400).send(e.message);
    }
});

export default router;
