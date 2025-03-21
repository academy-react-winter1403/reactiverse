import http from '../interceptor'

export const LoginApi = async (user) => {
    try {
        const response = await http.post('/Sign/Login' , user);
        return response;
    } catch {
        return false
    }
}