import { userApi } from "../apiConfig/axiosInstance";

export const userLogin = async (payload) => {
    const response = await userApi.post("/user/login", payload);
    return response;
}