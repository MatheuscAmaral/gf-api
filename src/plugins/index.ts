import { FastifyInstance } from "fastify";

import cors from '@fastify/cors';
import fastifyMultipart from "@fastify/multipart";

const registerPlugins = (app: FastifyInstance) => {
    app.register(fastifyMultipart);
    app.register(cors, {
        origin: '*', 
        methods: ['GET', 'POST', 'PUT', 'DELETE'], 
        allowedHeaders: ['Content-Type', 'Authorization'],
    });
}

export default registerPlugins;