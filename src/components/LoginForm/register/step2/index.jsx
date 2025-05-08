import React from 'react'
import { Formik , Form , Field } from 'formik'
import Picture from '../../../../assets/img/picture'
import Logo from '../../../../assets/img/logo'
import { regStepTwo } from '../../../../core/services/api/register'
import '../regResponsive.css'
import {Link, useNavigate } from 'react-router-dom'

const StepTwo = () => {
    const navigate = useNavigate();


const OnSubmit = async(value) => {
    const phoneNumber = localStorage.getItem('phoneNumber')
    const send ={
        phoneNumber:phoneNumber,
        verifyCode:value.verifyCode
    }

    const response = await regStepTwo(send);
    if (response.data.success === true) {
        navigate("/registerStepThree")
    }
    else{
        alert('لطفا کد را درست وارد کنید')
    }
}




return (
<div className='verifyPage bg-white rounded-2xl flex flex-row-reverse p-5 w-3xl h-[550px] '>
    <div className='left'>
        <Picture/>
    </div>
    <div className='right'>
        <Formik
        initialValues={{verifyCode:""}}
        onSubmit={OnSubmit}>
            <Form className='verifyForm text-black p-5 rounded-2xl w-80 text-start'>
                <h2 className='inline text-3xl font-medium p-2.5'>آکادمی سپهر</h2>
                <Logo/>
                <h3 className='font-medium text-2xl m-5'>ثبت نام</h3>
                <p>کد ارسال شده را وارد کنید</p>
                <div className='flex justify-center'>
                    <Field className="w-[230px] h-10 p-2.5 text-black my-5 bg-gray-500 rounded-xl outline-0" name="verifyCode" placeholder="کد را وارد کنید" type="text" />
                </div> 
                <button className="text-black w-36 h-10 block my-1.5 mx-auto rounded-2xl bg-blue-500 font-medium text-2xl" type='submit'>ادامه</button>
                <Link to={'#'}>قوانین و شرایط</Link>
            </Form>
        </Formik>
    </div>
</div>
)
}

export default StepTwo