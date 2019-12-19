import axios from 'axios';

const endpoint = '';

export const requestFactory = () =>
    axios.create({
        baseURL: endpoint,
        headers: {
            // Bearer Schema, see https://jwt.io/introduction/
            Authorization: `Bearer ${localStorage.getItem('jwt')}`,
        },
    });

export default requestFactory;
