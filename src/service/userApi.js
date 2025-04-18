import { userApi } from "../apiConfig/axiosInstance";

export const userLogin = async (payload) => {
    const response = await userApi.post("/user/login", payload);
    return response;
}

export const getStudentsFromUser = async (page, key) => {
    const response = await userApi.get(`user/students?page=${page}&pageSize=9&key=${key}`);
    return response;
}

export const getStudent = async (id) => {
    const response = await userApi.get(`/user/student?id=${id}`)
    return response;    
}