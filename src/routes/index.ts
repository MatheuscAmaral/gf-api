import { FastifyInstance } from "fastify";
import productsRoutes from "./products";

const registerRoutes = (fastify: FastifyInstance) => {
    fastify.register(productsRoutes);
}

export default registerRoutes;