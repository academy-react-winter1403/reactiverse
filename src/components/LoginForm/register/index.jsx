import React from 'react'
import './register.css'
import { Formik , Form , Field } from 'formik'
import * as yup from 'yup'
import Logo from '../../img/logo'
import Picture from '../../img/picture'
import './regResponsive.css'

const Register = () => {


  const validation = yup.object().shape({
    name: yup.string().required(),
    phoneNumber: yup.number().required(),
    password: yup.string().required(),
  })

  const OnSubmit = ()=> { 
    window.location.href = "/register/verify"
  }



  return (
    <div className='registerPage'>
        <div className='left'>
          <Picture/>
        </div>
        <div className='right'>
          <Formik 
          initialValues={{name:"" , phoneNumber:"" , password:""}} 
          onSubmit={OnSubmit} 
          validationSchema={validation}
          >
              <Form className='regForm'>
                <h2>آکادمی سپهر</h2>
                <Logo/>
                <h3>ثبت نام</h3>
                <div className='question'>
                  <a href='/login'>وارد شوید</a>
                  <p>حساب کاربری دارید؟</p>
                </div>
                  <Field type="text" name="name" placeholder="نام"/>
                  <Field type="text" name="phoneNumber" placeholder="شماره تماس"/>                
                  <Field type="text" name="password" placeholder="رمز عبور"/>                     
                <button className="reg" type='submit'>ادامه</button>
                <a href='#'>قوانین و شرایط</a>
              </Form>
          </Formik>
        </div>
    </div>
  )
}

export default Register