/*
 * @JDavid21051. Copyright (c) 2023. All rights reserved.
 * @JDavid21051. Copyright (c) 2023. Todos los derechos reservados.
 */

/*
 * Project:      mercury
 * Developed by: Juan David Pelaez Cumbe
 * Date:         17/09/23 - 10:49 PM
 * Module name:  cors.ts
 * File name:    cors.ts
 * IDE:          WebStorm
 */

import cors from 'cors'

const ACCEPTED_ORIGINS = [
  'http://localhost:3000',
  'http://localhost:8008'
]

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const corsMiddleware = ({ acceptedOrigins = ACCEPTED_ORIGINS } = {}) => cors({
  origin: (origin: string | undefined, callback): void => {
    if (origin !== undefined && acceptedOrigins.includes(origin)) {
      return callback(null, true)
    }

    if (origin !== undefined || origin !== '') {
      return callback(null, true)
    }

    return callback(new Error('Not allowed by CORS'))
  }
})
