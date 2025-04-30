import http from "../interceptor";

const getApi = async (apiLink) => {
  try {
    const response = await http.get(apiLink);
    return response;
  } catch (error) {
    return console.log(error);
  }
};

const deleteApi = () => {
  localStorage.clear();
};

export { getApi, deleteApi };
