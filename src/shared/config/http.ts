import axios from 'axios'
import { BASE_URL } from 'shared/utils/const'

export const http = axios.create({
    baseURL: BASE_URL,
})