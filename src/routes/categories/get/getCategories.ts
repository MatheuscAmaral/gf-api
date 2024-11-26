import { FastifyPluginAsync, FastifyReply, FastifyRequest } from "fastify";
import prisma from "../../../../db";

const getCategories: FastifyPluginAsync = async (fastify) => {
    fastify.get("/categories", async (request: FastifyRequest, reply: FastifyReply) => {
        const categories = await prisma.categories.findMany();          

        reply.status(200).send(categories);           
    })
}   

export default getCategories;