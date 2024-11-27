import fastify from "fastify";
import registerRoutes from "./routes";

import { registerPlugins } from "./plugins";

const buildApp = () => {
    const app = fastify();

    app.register(registerPlugins);
    app.register(registerRoutes);

    return app;
}

export default buildApp;