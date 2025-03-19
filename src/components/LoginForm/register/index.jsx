import React from "react";
import "./register.css";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";
import Logo from "../../../assets/img/logo";
import Picture from "../../../assets/img/picture";
import "./regResponsive.css";

const Register = () => {
  const validation = yup.object().shape({
    name: yup.string().required(),
    phoneNumber: yup.number().required(),
    password: yup.string().required(),
  });

  const OnSubmit = () => {
    window.location.href = "/register/verify";
  };

  return (
    <div className="registerPage bg-white rounded-2xl flex p-5 w-3xl">
      <div className="left">
        <Picture />
      </div>
      <div className="right">
        <Formik
          initialValues={{ name: "", phoneNumber: "", password: "" }}
          onSubmit={OnSubmit}
          validationSchema={validation}
        >
          <Form className="regForm text-black p-5 rounded-2xl w-80 text-end">
            <h2 className="inline text-3xl font-medium p-2.5">آکادمی سپهر</h2>
            <Logo />
            <h3 className="font-medium text-2xl m-5">ثبت نام</h3>
            <div className="p-1.5">
              <a className="inline" href="/login">
                وارد شوید
              </a>
              <p className="inline">حساب کاربری دارید؟</p>
            </div>
            <Field
              className="w-3xs h-9 p-2.5 text-black mb-5 bg-gray-400 rounded-xl text-end outline-0"
              type="text"
              name="name"
              placeholder="نام"
            />
            <Field
              className="w-3xs h-9 p-2.5 text-black mb-5 bg-gray-400 rounded-xl text-end outline-0"
              type="text"
              name="phoneNumber"
              placeholder="شماره تماس"
            />
            <Field
              className="w-3xs h-9 p-2.5 text-black mb-5 bg-gray-400 rounded-xl text-end outline-0"
              type="text"
              name="password"
              placeholder="رمز عبور"
            />
            <button
              className="text-black w-36 h-10 block my-1.5 mx-auto rounded-2xl bg-blue-500"
              type="submit"
            >
              ادامه
            </button>
            <a href="#">قوانین و شرایط</a>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default Register;
