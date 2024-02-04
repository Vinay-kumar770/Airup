const cluster = require('cluster');
const os = require('os');

function setupCluster(serverFunction) {
  if (cluster.isMaster) {
    // Fork workers for each CPU core
    for (let i = 0; i < os.cpus().length; i++) {
      cluster.fork();
    }

    cluster.on('exit', (worker, code, signal) => {
      // console.log(`Worker ${worker.process.pid} died`);
      // If needed, create a new worker when one dies
      cluster.fork();
    });
  } else {
    serverFunction();
  }
}

module.exports = setupCluster;