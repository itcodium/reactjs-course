import axios from 'axios';

const API = {
    getFeeds: () => axios.get('/api/client'),
}

export default API;
