
import axios from "axios";
import { getItem } from "../common/storage.services";
import { deleteApi } from "../api";

const baseURL = import.meta.env.VITE_API_BASE_URL;

const instance = axios.create({
  baseURL: baseURL,
});




const onSucc = (res) => {
  return res.data;
};

const onErr = (err) => {
  if(err.response.status === 401){
    deleteApi();
  }
  return Promise.reject(err);
};

instance.interceptors.response.use(onSucc, onErr);
instance.interceptors.request.use((opt) => {
  const token = getItem('token');

  opt.headers.Authorization = 'Bearer ' + token;
  return opt;
});

export default instance;


