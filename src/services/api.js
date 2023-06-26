import axios from 'axios';

const API_BASE_URL = 'http://localhost:4200/api/v1/'; // Adjust the base URL based on your Node.js server configuration

const api = axios.create({
  baseURL: API_BASE_URL,
});

export const fetchVideos = async () => {
  try {
    const response = await api.get('video/feeds'); // Adjust the API endpoint URL accordingly
    return response.data;
  } catch (error) {
    console.error('Error fetching videos:', error);
    throw error;
  }
};

export const uploadVideo = (formData) => {
  return api
    .post('video/upload', formData) // Adjust the API endpoint URL accordingly
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error('Upload error:', error);
      throw error;
    });
};
