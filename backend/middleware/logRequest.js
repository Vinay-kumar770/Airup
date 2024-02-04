import fs from 'fs';
import path from 'path';

const logRequest = (req, res, next) => {
  const logData = {
    body: req.body,
    query: req.query,
    cookies: req.cookies,
    origin: req.get('origin') // Getting the origin of the request
  };

  const logString = JSON.stringify(logData, null, 2); // Beautify the JSON string
  // console.log(logString);

  // Path to the log file
  const logFilePath = path.join('./', 'logs.txt');

  // Append the log string to the file
  fs.appendFile(logFilePath, logString + '\n', (err) => {
    if (err) {
      console.error('Error writing to log file:', err);
    }
  });

  next();
};
export default logRequest;
