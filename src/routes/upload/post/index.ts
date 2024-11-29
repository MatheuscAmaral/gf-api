import { FastifyPluginAsync } from "fastify";
import { UploadApiErrorResponse, UploadApiResponse } from "cloudinary";

import cloudinary from "../../../plugins/cloudnary";

const uploadPostRoute: FastifyPluginAsync = async (fastify) => {
  fastify.post('/upload', async (req, reply) => {
    // const data = await req.file();

    // if (!data) {
    //   reply.status(400).send({ error: 'Nenhum arquivo enviado.' });
    //   return;
    // }

    // try {
    //   const result = await new Promise<UploadApiResponse>((resolve, reject) => {
    //     const uploadStream = cloudinary.uploader.upload_stream(
    //       { folder: 'uploads' },
    //       (error: UploadApiErrorResponse | null, result: UploadApiResponse | undefined) => {
    //         if (error) {
    //           reject(error);
    //         } else {
    //           resolve(result as UploadApiResponse);
    //         }
    //       }
    //     );

    //     data.file.pipe(uploadStream); 
    //   });

    //   return reply.status(200).send({ url: result.secure_url })

    // } catch (error) {
    //   console.error(error);
    //   reply.status(500).send({ error: 'Falha ao fazer upload da imagem.' });
    // }
  });
};

export default uploadPostRoute;
