import axios from 'axios';

export default axios.create({
    baseURL: 'https://movies-dev.up.railway.app/',
    headers: {
        "ngrok-skip-browser-warning": "true",
    }
});
