import axios from 'axios';

export const fetcher = axios.create({
    baseURL: 'https://movienew.cybersoft.edu.vn/api',
    headers: { TokenCybersoft: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA1MSIsIkhldEhhblN0cmluZyI6IjIzLzAyLzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcwODY0NjQwMDAwMCIsIm5iZiI6MTY4MDM2ODQwMCwiZXhwIjoxNzA4Nzk0MDAwfQ.m054V9MFrBY26j2t-FxqIXGcOVQim2UUk_G-OoewJUY' }
});

export const fetcherNews = axios.create({
    baseURL: 'https://636b78537f47ef51e1312cc5.mockapi.io',
})

fetcher.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        return Promise.reject(error);
    }
);

fetcher.interceptors.request.use(
    (config) => {
        // thêm authorization vào header config (nếu có)
        const { accessToken } = JSON.parse(localStorage.getItem('user')) || {};
        if (accessToken) {
            config.headers.Authorization = `Bearer ${accessToken}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

