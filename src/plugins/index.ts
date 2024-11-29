import cors from "@fastify/cors";
import { FastifyInstance } from "fastify";

export const registerPlugins = (app: FastifyInstance) => {
    app.register(cors, {
        origin: '*',
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], 
        allowedHeaders: ['Content-Type', 'Authorization']
    });    
}