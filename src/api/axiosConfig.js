import axios from 'axios';

export default axios.create({
    baseURL: 'https://movies-production-8c19.up.railway.app/',
    headers: {
        "ngrok-skip-browser-warning": "true",
    }
});
