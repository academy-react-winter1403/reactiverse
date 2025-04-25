import React from 'react'
import { Formik , Form , Field } from 'formik'
import Picture from '../../../img/picture'
import Logo from '../../../img/logo'
import './logVerify.css'
import { useEffect } from 'react'
import * as yup from 'yup'


const LoginVerify = () => {

  const validation = yup.object().shape({
    code1: yup.number().required(),
    code2: yup.number().required(),
    code3: yup.number().required(),
    code4: yup.number().required(),   
  })

  const OnSubmit = () => {
        window.location.href = "/"
  }
  
  useEffect(() => {
      alert("Code: 1234")
  },[])

  return (
        <div className='verifyPage'>
        <div className='left'>
          <Picture/>
        </div>
        <div className='right'>
        <Formik
        initialValues={{code1:"",code2:"",code3:"",code4:"",}}
        onSubmit={OnSubmit}
        validationSchema={validation}
        >
          <Form className='verifyForm'>
            <h2>آکادمی سپهر</h2>
            <Logo/>
            <h3>ورود</h3>
              <p>کد ارسال شده را وارد کنید</p>
              <div className='code'>
                <Field name="code1" maxLength="1" type="text" />
                <Field name="code2"  maxLength="1" type="text" />                
                <Field name="code3"  maxLength="1" type="text" /> 
                <Field name="code4"  maxLength="1" type="text" />               
              </div>       
              <button className='verify' type='submit'>ورود</button>
            <a href='#'>حریم خصوصی</a>
          </Form>
      </Formik>
    </div>
</div>
  )
}

export default LoginVerify