import axios from "axios";

const handleAxiosError = (error, setIsLoggedOut, setSessionExpired) => {
    if (error.response) {
      // Response received with a status code
      const statusCode = error.response.status;

      if (statusCode === 403 || statusCode === 401) {
        if (axios.defaults.headers.common['Authorization']) {
          setSessionExpired(true);
        } else {
          setIsLoggedOut(true);
        }
      } else {
        console.error(`Request failed with status code ${statusCode}`);
      }
    } else {
      // No response received, handle other errors
      console.error('Request failed with an error:', error.message);
    }
  };

export default handleAxiosError;