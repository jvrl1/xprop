import axios from 'axios'

export const api = axios.create({
    baseURL: 'http://10.1.10.51:3333',
})