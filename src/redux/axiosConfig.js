import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://65b92f2bb71048505a8a615f.mockapi.io/',
});

export default instance;