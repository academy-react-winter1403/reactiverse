import axios from "axios";

export const LoginApi = async (user) => {
    try {
        const response = await axios.post('https://classapi.sepehracademy.ir/api/Sign/Login' , user);
        return response.data;
    } catch {
        return false
    }
}