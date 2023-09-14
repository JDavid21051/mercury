/*
 * @JDavid21051. Copyright ©. 2023. All rights reserved.
 * @JDavid21051. Copyright ©. 2023. Todos los derechos reservados.
 */

import express, {Express} from 'express';
import diaryRouter from './routes/diaries';
import msqlConnection from './core/db/connection';
/**
 * priority
 * tsx, ts, node, js, json
 */

const appServer: Express = express();
appServer.use(express.json()); // middleware que transforma la req.body a un json

const PORT = 3000;

msqlConnection.connect();

appServer.get('/ping', (_req, res) => {
    const pongResult = {
        _req,
        res,
        PORT
    };
    res.send(pongResult);
    console.log(pongResult);
});

appServer.use('/api/diaries', diaryRouter);

appServer.listen(PORT, (): void => {
    console.log(`Server running on port ${PORT}`);
});
