import AxiosInstance from "../utils/axiosInstance";
export const login = async (values) => {
  try {
    const response = await AxiosInstance.post("/auth/login", values);
    localStorage.setItem("token", response.data.token);
    return response.data;
  } catch (error) {
    return;
  }
};
export const register = async (values) => {
  try {
    const response = await AxiosInstance.post("/auth/register", values);
    return response.data;
  } catch (error) {
    return;
  }
};
