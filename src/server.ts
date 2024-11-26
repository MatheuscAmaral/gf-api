import buildApp from './app';

const app = buildApp();

app.listen({ port: 3010 }, (err, address) => {
    if (err) {
      console.error(err);
      process.exit(1);
    } else {
      console.log(`Server is running at ${address}`);
    }
});