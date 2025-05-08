import axios from 'axios';

const regStepOne = async (data) => {
    try {
    const response = await axios.post("https://classapi.sepehracademy.ir/api/Sign/SendVerifyMessage" , data);
    return response;
    } catch (error) {
    return console.log(error);
    }
};

const regStepTwo = async (data) => {
    try {
    const response = await axios.post("https://classapi.sepehracademy.ir/api/Sign/VerifyMessage" , data);
    return response;
    } catch (error) {
    console.log(error);
    return error.response;
    }
};

const regStepThree = async (data) => {
    try {
    const response = await axios.post("https://classapi.sepehracademy.ir/api/Sign/Register" , data);
    return response;
    } catch (error) {
    console.log(error);
    return error.response;
    }
};

export {regStepOne , regStepTwo , regStepThree}