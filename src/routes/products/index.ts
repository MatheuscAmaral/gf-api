import { FastifyPluginAsync } from "fastify";
import getProducts from "./get/getProducts";
import createProduct from "./post/createProduct";

const productsRoutes: FastifyPluginAsync = async (fastify) => {
    fastify.register(getProducts);
    fastify.register(createProduct);
}

export default productsRoutes;