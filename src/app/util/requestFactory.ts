import axios from 'axios';

export const requestFactory = () =>
    axios.create({
        baseURL: process.env.REACT_APP_ENDPOINT || 'http://localhost:4000',
        headers: {
            // Bearer Schema, see https://jwt.io/introduction/
            Authorization: `Bearer ${localStorage.getItem('jwt')}`,
        },
    });

export default requestFactory;
