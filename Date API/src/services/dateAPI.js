//then-catch Used with Promises to handle asynchronous operations
import axios from 'axios';
const DATE_JSON_URL = 'https://jsonmock.hackerrank.com/datetime';

export default {
    getAPIResponse() {
        return axios.get(DATE_JSON_URL)
          .then(response => {
            const { date } = response.data;
            // Assuming date is in the format "MM-DD-YYYY"
            const [month, day, year] = date.split('-').map(Number);
            return { day, month, year };
          })
          .catch(error => {
            console.error('Error fetching date:', error);
            throw error; // Re-throw the error to handle it in the component
          });
      }
};

/*
try-catch: synchronous code or within asynchronous functions (async/await)

import axios from 'axios';

const DATE_JSON_URL = 'https://jsonmock.hackerrank.com/datetime'; // Replace with actual URL

const getAPIResponse = async () => {
  try {
    const response = await axios.get(DATE_JSON_URL);
    return response.data; // Adjust based on the actual response structure
  } catch (error) {
    console.error('Error fetching date:', error);
    throw error;
  }
};

export default {
  getAPIResponse
};
*/



