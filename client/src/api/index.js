import axios from 'axios';

const AXIOS = axios.create({
    baseURL: 'https://socialapp-multiverse.herokuapp.com',
    // baseURL: 'http://35.206.242.141:9080',
    timeout: 100000,
    headers: { 'Content-Type': 'application/json' }
})

export default AXIOS