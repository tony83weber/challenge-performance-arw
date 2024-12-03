import http from 'k6/http';
import { check } from 'k6';
import { getToken } from './login.js';

// Configuración
export let options = {
    scenarios: {
        load_test_50TPS: {
            executor: 'constant-arrival-rate',
            rate: 50, // 50 transacciones por segundo
            timeUnit: '1s',
            duration: '1m',
            preAllocatedVUs: 100, // Usuarios preasignados
            maxVUs: 150,
        },
        load_test_100TPS: {
            executor: 'constant-arrival-rate',
            rate: 100, // 100 transacciones por segundo
            timeUnit: '1s',
            startTime: '1m', // Inicia después de que termina el test anterior
            duration: '1m',
            preAllocatedVUs: 200,
            maxVUs: 300,
        },
        ramp_up_test: {
            executor: 'ramping-arrival-rate',
            startRate: 10,
            timeUnit: '1s',
            stages: [
                { duration: '1m', target: 50 },
                { duration: '1m', target: 100 },
            ],
            preAllocatedVUs: 100,
            maxVUs: 300,
        },
        stress_test: {
            executor: 'constant-arrival-rate',
            rate: 200,
            timeUnit: '1s',
            duration: '1m',
            preAllocatedVUs: 300,
            maxVUs: 400,
        },
    },

    
};

export default function () {
    const url = 'https://dummyjson.com/products/add';
    const token = getToken();

    const payload = JSON.stringify({
        title: `product-${__ITER}`, // Genera títulos únicos
        price: Math.random() * 100, // Precio aleatorio
    });

    const params = {
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
    };

    const res = http.post(url, payload, params);

    // Validación
    check(res, {
        'is status 200': (r) => r.status === 200,
        'response has title': (r) => r.json('title') !== undefined,
    });


}
