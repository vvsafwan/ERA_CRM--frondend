import adminApi from "../apiConfig/adminApiConfig";

export const adminLogin = async (payload) => {
    const response = await adminApi.post("/admin/login", payload);
    return response;
}