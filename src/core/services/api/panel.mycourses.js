import http from '../interceptor';

const getMyCourses=async()=>{
    const data=await http.get("/SharePanel/GetMyCourses");
    return data;
}

export default getMyCourses;