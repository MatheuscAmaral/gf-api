import { FastifyPluginAsync, FastifyReply, FastifyRequest } from "fastify";
import prisma from "../../../../db";
import { z } from "zod";

const createProductSchema = z.object({
    title: z.string(),
    description: z.string(),
    img: z.string(),
    price: z.number(),
    categoryDelivery: z.string(),
    stock: z.number(),
    color: z.string(),
    categoryId: z.number()
})

const createProduct: FastifyPluginAsync = async (fastify) => {
    fastify.post("/products", async (request: FastifyRequest, reply: FastifyReply) => {
        try {
            const data = createProductSchema.parse(request.body);
    
            const product = await prisma.products.create({
                data: {
                    title: data.title,
                    description: data.description,
                    img: data.img,
                    price: data.price,
                    categoryDelivery: data.categoryDelivery,
                    stock: data.stock,
                    color: data.color,
                    categoryId: data.categoryId,
                    createdAt: new Date(),
                    updatedAt: new Date()
                }
            });
    
            reply.status(200).send(product);
        } catch (error) {
            if (error instanceof z.ZodError) {
                return reply.status(400).send({
                    message: "Dados inválidos!",
                    errors: error.errors
                });
            }

            return reply.status(500).send(error);
        }
    });
}

export default createProduct;