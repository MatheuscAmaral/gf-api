import fastify from 'fastify';
import registerRoutes from './routes';

const buildApp = () => {
    const app = fastify();
    app.register(registerRoutes);

    return app;
}

export default buildApp;