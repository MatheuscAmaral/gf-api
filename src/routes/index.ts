import { FastifyInstance } from "fastify";
import productsRoutes from "./products";
import categoryRoutes from "./categories";
import UploadRoutes from "./upload/post";

const registerRoutes = (fastify: FastifyInstance) => {
    fastify.register(productsRoutes);
    fastify.register(categoryRoutes);
    fastify.register(UploadRoutes);
}

export default registerRoutes;