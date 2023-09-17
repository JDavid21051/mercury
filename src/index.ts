/*
 * @JDavid21051. Copyright ©. 2023. All rights reserved.
 * @JDavid21051. Copyright ©. 2023. Todos los derechos reservados.
 */
/*
 * priority
 * tsx, ts, node, jsx, js, json
 */

import express, {Express} from 'express';
import diaryRouter from './routes/diaries';
import msqlConnection from './core/db/connection';
import supplier_router from './routes/supplier';

const appServer: Express = express();
const PORT = 3000;

msqlConnection.connect();

appServer.use(express.json()); // middleware que transforma la req.body a un json

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
appServer.use('/api/supplier', supplier_router);

appServer.listen(PORT, (): void => {
    console.log(`Server running on port ${PORT}`);
});
