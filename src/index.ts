import { Elysia, error, t } from 'elysia';

import { getChannel } from './routes/channel';
import { getStream } from './routes/stream';

new Elysia()
    .ws('/c/:id', { open: getChannel })
    .ws('/s/:id', { open: getStream  })
    .listen({
        port: process.env.PORT || 9905,
        hostname: '0.0.0.0'
    })