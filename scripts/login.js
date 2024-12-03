import http from 'k6/http';

export function getToken() {
    const url = 'https://dummyjson.com/auth/login';
    const payload = JSON.stringify({
        username: 'emilys',
        password: 'emilyspass',
    });

    const params = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    const response = http.post(url, payload, params);
    const token = response.json('token'); // Extrae el JWT del response.
    return token;
}
