import { FastifyPluginAsync, FastifyReply, FastifyRequest } from "fastify";
import prisma from "../../../../db";

const getProducts: FastifyPluginAsync = async (fastify) => {
    fastify.get("/products", async (request: FastifyRequest, reply: FastifyReply) => {
        const products = await prisma.products.findMany();

        reply.status(200).send(products);
    })
}

export default getProducts;