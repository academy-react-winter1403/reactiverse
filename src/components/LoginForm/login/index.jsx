<<<<<<< HEAD
import React  from 'react'
import Picture from '../../../assets/img/picture'
import Logo from '../../../assets/img/logo'
import {Formik , Form , Field} from 'formik'
import './logResponsive.css'
import { LoginApi } from '../../../core/services/api/auth.api'
import { setItem } from '../../../core/services/common/storage.services'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()



  const loginUser = async (value)=> { 
      const userObj = {phoneOrGmail: value.Number,password: value.Password,rememberMe: true}
  
      const user = await LoginApi(userObj);

      if(user.success === true){
        alert(user.message)
        navigate("/login/verify")
        setItem('token' , user.token)
      }
      if(user.success !== true){
        alert(user.message)
      }

  }



  return (
        <div className='loginPage bg-white rounded-2xl flex p-5 w-3xl'>
          <div className='left'>
            <Picture/>
          </div>
          <div className='right'>
            <Formik
            initialValues={{Number:"",Password:""}} 
            onSubmit={loginUser} 
            >
              <Form className='logForm text-black p-5 rounded-2xl w-80 text-end'>
                <h2 className='inline text-3xl font-medium p-2.5'>آکادمی سپهر</h2>
                <Logo/>
                <h3 className='font-medium text-2xl m-5'>ورود</h3>
                <div className='p-1.5'>
                  <Link className='inline' to={'/register'}>ثبت نام کنید</Link>
                  <p className='inline'>حساب کاربری ندارید؟</p>
                </div>
                <Field  className="w-3xs h-9 p-2.5 text-black mb-5 bg-gray-400 rounded-xl text-end outline-0" name="Number" placeholder="شماره موبایل"/>   
                <Field  className="w-3xs h-9 p-2.5 text-black mb-5 bg-gray-400 rounded-xl text-end outline-0" name="Password" placeholder="رمز ورود"/>                 
                <button className="text-black w-36 h-10 block my-1.5 mx-auto rounded-2xl bg-blue-500 font-medium text-2xl" type='submit'>ادامه</button>
                <Link to={''}>حریم خصوصی</Link>
              </Form>
            </Formik>

          </div>
        </div>
  )
}

=======
import React from 'react'
import './login.css'
import Picture from '../../img/picture'
import Logo from '../../img/logo'
import {Formik , Form , Field} from 'formik'
import * as yup from 'yup'
import './logResponsive.css'

const Login = () => {

  const validation = yup.object().shape({
    Number: yup.number().required("وارد کردن شماره اجباریست")
  })

  const onSubmit = ()=> { 
    window.location.href = "/login/verify"
  }


  return (
        <div className='loginPage'>
          <div className='left'>
            <Picture/>
          </div>
          <div className='right'>
            <Formik
            initialValues={{Number:""}} 
            onSubmit={onSubmit} 
            validationSchema={validation}
            >
              <Form className='logForm'>
                <h2>آکادمی سپهر</h2>
                <Logo/>
                <h3>ورود</h3>
                <div className='question'>
                  <a href='/register'>ثبت نام کنید</a>
                  <p>حساب کاربری ندارید؟</p>
                </div>
                <Field type="text" name="Number" placeholder="شماره موبایل"/>   
                <button className='log' type='submit'>ادامه</button>
                <a href=''>حریم خصوصی</a>
              </Form>
            </Formik>
          </div>
        </div>
  )
}

>>>>>>> blogDetail
export default Login