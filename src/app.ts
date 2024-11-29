import fastify from "fastify";
import fastifyMultipart from "@fastify/multipart";
import registerRoutes from "./routes";

import { registerPlugins } from "./plugins";

const buildApp = () => {
  const app = fastify({ logger: true });
  
  app.register(registerPlugins);
  app.register(fastifyMultipart);
  app.register(registerRoutes);

  return app;
};

export default buildApp;
