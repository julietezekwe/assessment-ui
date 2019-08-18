import axios from 'axios';
import { basePath } from '../utils/helpers';

export const fetchNumbers = async (limit = 10, page = 1) => {
    const data = await axios.get(`${basePath}/numbers?limit=${limit}&page=${page}`);
    return data.data;
}
