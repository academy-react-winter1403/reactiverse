import React from 'react'
import Picture from '../../../assets/img/picture'
import Logo from '../../../assets/img/logo'
import {Formik , Form , Field} from 'formik'
import * as yup from 'yup'
import './logResponsive.css'

const Login = () => {

  const validation = yup.object().shape({
    Number: yup.number().required()
  })

  const onSubmit = ()=> { 
    window.location.href = "/login/verify"
  }


  return (
        <div className='loginPage bg-white rounded-2xl flex p-5 w-3xl'>
          <div className='left'>
            <Picture/>
          </div>
          <div className='right'>
            <Formik
            initialValues={{Number:""}} 
            onSubmit={onSubmit} 
            validationSchema={validation}
            >
              <Form className='logForm text-black p-5 rounded-2xl w-80 text-end'>
                <h2 className='inline text-3xl font-medium p-2.5'>آکادمی سپهر</h2>
                <Logo/>
                <h3 className='font-medium text-2xl m-5'>ورود</h3>
                <div className='p-1.5'>
                  <a className='inline' href='/register'>ثبت نام کنید</a>
                  <p className='inline'>حساب کاربری ندارید؟</p>
                </div>
                <Field className="w-3xs h-9 p-2.5 text-black mb-5 bg-gray-400 rounded-xl text-end outline-0" type="text" name="Number" placeholder="شماره موبایل"/>   
                <button className="text-black w-36 h-10 block my-1.5 mx-auto rounded-2xl bg-blue-500 font-medium text-2xl" type='submit'>ادامه</button>
                <a href=''>حریم خصوصی</a>
              </Form>
            </Formik>
          </div>
        </div>
  )
}

export default Login