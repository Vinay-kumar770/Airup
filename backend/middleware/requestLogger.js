
export const requestLogger = (req, res) => {
  console.log(`req.method: ${req.method} req.url${req.originalUrl} req.body:${req.body}`);
  };
