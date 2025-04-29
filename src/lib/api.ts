import axios from 'axios';

const API_URL = 'https://anda-builds-website.onrender.com/api';

// Create axios instance with base URL
const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Project API calls
export const getProjects = async () => {
    const response = await api.get('/projects');
    return response.data;
};

export const getProjectById = async (id: string) => {
    const response = await api.get(`/projects/${id}`);
    return response.data;
};

export default api;

export { API_URL }; 