import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 
        "Client-ID NuxUBHh3J6GiTel6kk3fgLrf7SXFZMliaofwJ57wJdI"
    }
});