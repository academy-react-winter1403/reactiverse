<<<<<<< HEAD
import http from "../interceptor";

const getApi = async () => {
  try {
    const response = await http.get('/SharePanel/GetProfileInfo');
    return response;
  } catch (error) {
    return console.log(error);
  }
};

const deleteApi = () => {
  localStorage.clear();
};

export { 
  getApi,
  deleteApi
};
=======
import http from "../interceptor";

const getApi = async () => {
  try {
    const response = await http.get('/SharePanel/GetProfileInfo');
    return response;
  } catch (error) {
    return console.log(error);
  }
};

const deleteApi = () => {
  localStorage.clear();
};

export { 
  getApi,
  deleteApi
};
>>>>>>> blogDetail
