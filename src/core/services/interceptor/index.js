import axios from "axios";

const baseURL = import.meta.env.VITE_API_BASE_URL;

const instance = axios.create({
  baseURL: baseURL,
});

const onSucc = (res) => {
  return res.data;
};

const onErr = (err) => {
  return Promise.reject(err);
};

instance.interceptors.response.use(onSucc, onErr);
instance.interceptors.request.use((opt) => {
  return opt;
});

export default instance;
