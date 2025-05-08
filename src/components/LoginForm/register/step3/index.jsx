import React from 'react'
import { Formik , Form , Field } from 'formik'
import Logo from '../../../../assets/img/logo'
import Picture from '../../../../assets/img/picture'
import '../regResponsive.css'
import { Link, useNavigate } from 'react-router-dom'
import { regStepThree } from '../../../../core/services/api/register'

const StepThree = () => {
    const navigate = useNavigate()


  const OnSubmit = async(value)=> { 
    const send = {
      password:value.password,
      gmail:value.gmail,
      phoneNumber:value.phoneNumber
    }

    const phoneNumber = localStorage.getItem('phoneNumber')
    const response = await regStepThree(send)
    if(phoneNumber === send.phoneNumber && response.success === true){
    navigate("/login");
    }
  }



  return (
    <div className='registerPage bg-white rounded-2xl flex flex-row-reverse p-5 w-3xl h-[550px]'>
        <div className='left'>
          <Picture/>
        </div>
        <div className='right'>
          <Formik 
          initialValues={{gmail:"" , phoneNumber:"" , password:""}} 
          onSubmit={OnSubmit} >
              <Form className='regForm text-black p-5 rounded-2xl w-80 text-center'>
                <h2 className='inline text-3xl font-medium p-2.5'>آکادمی سپهر</h2>
                <Logo/>
                <h3 className='font-medium text-2xl m-5'>ثبت نام</h3>
                <div className='p-1.5'>
                  <p className='inline'>حساب کاربری دارید؟</p>
                  <Link className='text-blue-700 inline' to={'/login'}>وارد شوید</Link>
                </div>
                  <Field className="w-[230px] h-9 p-2.5 text-black mb-5 bg-gray-500 rounded-xl outline-0" type="text" name="gmail" placeholder="ایمیل"/>
                  <Field className="w-[230px] h-9 p-2.5 text-black mb-5 bg-gray-500 rounded-xl outline-0" type="text" name="phoneNumber" placeholder="شماره تماس"/>                
                  <Field className="w-[230px] h-9 p-2.5 text-black mb-5 bg-gray-500 rounded-xl outline-0" type="password" name="password" placeholder="رمز عبور"/>
                <button className="text-black w-36 h-10 block my-1.5 mx-auto rounded-2xl bg-blue-500 font-medium text-2xl" type='submit'>ثبت نام</button>
                <Link to={'#'}>قوانین و شرایط</Link>
              </Form>
          </Formik>
        </div>
    </div>
  )
}

export default StepThree