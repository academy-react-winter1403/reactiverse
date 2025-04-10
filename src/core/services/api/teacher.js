import axios from 'axios';

export const GetTeachersInfo = async() =>{
try {
    const result = await axios.get('https://classapi.sepehracademy.ir/api/Home/GetTeachers')
    console.log(result.data)
    return result.data;
}
catch (error) {
    console.error(error)
}
}