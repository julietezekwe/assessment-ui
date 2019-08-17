import axios from 'axios';
import { basePath } from '../utils/helpers';

export const fetchNumbers = async (myLimit, myPage) => {
    const limit = myLimit || 10;
    const page = myPage || 1;
    const data = await axios.get(`${basePath}/numbers?limit=${limit}&page=${page}`);
    return data.data;
}
