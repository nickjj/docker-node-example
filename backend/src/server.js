const app = require('./index');
const config = require('../config/index');

const bindHost = '0.0.0.0';
const { port } = config.express;

app.listen(port, bindHost, (error) => {
  if (error) {
    console.log('Unable to start Express server', error);
    process.exit(1);
  }

  console.log(`Express is listening on http://${bindHost}:${port}`);
});
