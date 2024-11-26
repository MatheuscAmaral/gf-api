import { FastifyInstance } from "fastify";
import getCategories from "./get/getCategories";

const categoryRoutes = (fastify: FastifyInstance) => {
    fastify.register(getCategories);
}

export default categoryRoutes;