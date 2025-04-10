import axios from "axios";
const BASE_URL = 'http://localhost:8000'

export const adminLogin = async (payload) => {
    const response = await axios.post(`${BASE_URL}/admin/login`, payload);
    return response;
}