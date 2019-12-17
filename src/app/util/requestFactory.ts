import axios from 'axios';

const endpoint = '';

export const requestFactory = () =>
    axios.create({
        baseURL: endpoint,
        headers: {
            Authorization: `Bearer ${localStorage.getItem('jwt')}`,
        },
    });

export default requestFactory;
