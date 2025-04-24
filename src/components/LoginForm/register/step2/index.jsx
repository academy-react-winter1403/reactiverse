import React from 'react'
import { Formik , Form , Field } from 'formik'
import Picture from '../../../../assets/img/picture'
import Logo from '../../../../assets/img/logo'
import { useEffect } from 'react'
import '../regResponsive.css'
import { useNavigate } from 'react-router-dom'

const StepTwo = () => {
    const navigate = useNavigate();


const OnSubmit = () => {
        navigate("/registerStepThree")
}

useEffect(() => {
    setTimeout(() => {
        alert('12345')
    }, 3000);
},[])


return (
<div className='verifyPage bg-white rounded-2xl flex p-5 w-3xl'>
    <div className='left'>
        <Picture/>
    </div>
    <div className='right'>
        <Formik
        initialValues={{code:""}}
        onSubmit={OnSubmit}>
            <Form className='verifyForm text-black p-5 rounded-2xl w-80 text-end'>
                <h2 className='inline text-3xl font-medium p-2.5'>آکادمی سپهر</h2>
                <Logo/>
                <h3 className='font-medium text-2xl m-5'>ثبت نام</h3>
                <p>کد ارسال شده را وارد کنید</p>
                <div  className='text-center'>
                    <Field className="w-50 h-10 p-2.5 text-black m-1.5 bg-gray-400 rounded-xl text-center outline-0" name="code" maxLength="5" type="text" />
                </div>       
                <button className="text-black w-36 h-10 block my-1.5 mx-auto rounded-2xl bg-blue-500 font-medium text-2xl" type='submit'>ثبت نام</button>
                <Link to={'#'}>قوانین و شرایط</Link>
            </Form>
        </Formik>
    </div>
</div>
  )
}

export default StepTwo