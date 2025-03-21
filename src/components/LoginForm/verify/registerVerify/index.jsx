import React from 'react'
import { Formik , Form , Field } from 'formik'
import Picture from '../../../../assets/img/picture'
import Logo from '../../../../assets/img/logo'
import { useEffect } from 'react'
import * as yup from 'yup'
import './regVerifyResponsive.css'

const RegisterVerify = () => {

  const validation = yup.object().shape({
    code1: yup.number().required(),
    code2: yup.number().required(),
    code3: yup.number().required(),
    code4: yup.number().required(),   
    code5: yup.number().required(),     
  })

  const OnSubmit = () => {
        window.location.href = "/login"
  }
  
  useEffect(() => {
      alert("Code: 12345")
  },[])


  return (
        <div className='verifyPage bg-white rounded-2xl flex p-5 w-3xl'>
        <div className='left'>
          <Picture/>
        </div>
        <div className='right'>
        <Formik
        initialValues={{code1:"",code2:"",code3:"",code4:"",code:""}}
        onSubmit={OnSubmit}
        validationSchema={validation}
        >
          <Form className='verifyForm text-black p-5 rounded-2xl w-80 text-end'>
            <h2 className='inline text-3xl font-medium p-2.5'>آکادمی سپهر</h2>
            <Logo/>
            <h3 className='font-medium text-2xl m-5'>ثبت نام</h3>
              <p>کد ارسال شده را وارد کنید</p>
              <div  className='text-center'>
                <Field className="w-10 h-10 p-2.5 text-black m-1.5 bg-gray-400 rounded-xl text-center outline-0" name="code1" maxLength="1" type="text" />
                <Field className="w-10 h-10 p-2.5 text-black m-1.5 bg-gray-400 rounded-xl text-center outline-0" name="code2"  maxLength="1" type="text" />                
                <Field className="w-10 h-10 p-2.5 text-black m-1.5 bg-gray-400 rounded-xl text-center outline-0" name="code3"  maxLength="1" type="text" /> 
                <Field className="w-10 h-10 p-2.5 text-black m-1.5 bg-gray-400 rounded-xl text-center outline-0" name="code4"  maxLength="1" type="text" />
                <Field className="w-10 h-10 p-2.5 text-black m-1.5 bg-gray-400 rounded-xl text-center outline-0" name="code5"  maxLength="1" type="text" />               
              </div>       
              <button className="text-black w-36 h-10 block my-1.5 mx-auto rounded-2xl bg-blue-500 font-medium text-2xl" type='submit'>ثبت نام</button>
            <a href='#'>قوانین و شرایط</a>
          </Form>
      </Formik>
    </div>
</div>
  )
}

export default RegisterVerify