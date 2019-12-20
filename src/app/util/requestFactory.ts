import axios from 'axios';

export const requestFactory = () =>
    axios.create({
        baseURL: process.env.REACT_APP_ENDPOINT,
        headers: {
            // Bearer Schema, see https://jwt.io/introduction/
            Authorization: `Bearer ${localStorage.getItem('jwt')}`,
        },
    });

export default requestFactory;
