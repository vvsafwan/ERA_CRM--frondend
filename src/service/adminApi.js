import adminApi from "../apiConfig/adminApiConfig";

export const adminLogin = async (payload) => {
    const response = await adminApi.post("/admin/login", payload);
    return response;
}

export const createUser = async (payload) => {
    const response = await adminApi.post("/admin/user", payload);
    return response
} 

export const createStudent = async (payload) => {
    const response = await adminApi.post("/admin/student", payload);
    return response;
}

export const getUsers = async (page) => {
    const response = await adminApi.get(`/admin/users?page=${page}&pageSize=9`)
    return response;
} 

export const getStudents = async (page) => {
    const response = await adminApi.get(`/admin/students?page=${page}&pageSize=9`)
    return response;
} 

export const getStudent = async (id) => {
    const response = await adminApi.get(`/admin/student?id=${id}`)
    return response;    
}

