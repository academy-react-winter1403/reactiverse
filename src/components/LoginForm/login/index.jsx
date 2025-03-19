import React from "react";
import "./login.css";
import Picture from "../../../assets/img/picture";
import Logo from "../../../assets/img/logo";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";
import "./logResponsive.css";

const Login = () => {
  const validation = yup.object().shape({
    Number: yup.number().required("وارد کردن شماره اجباریست"),
  });

  const onSubmit = () => {
    window.location.href = "/login/verify";
  };

  return (
    <div className="loginPage">
      <div className="left">
        <Picture />
      </div>
      <div className="right">
        <Formik
          initialValues={{ Number: "" }}
          onSubmit={onSubmit}
          validationSchema={validation}
        >
          <Form className="logForm">
            <h2>آکادمی سپهر</h2>
            <Logo />
            <h3>ورود</h3>
            <div className="question">
              <a href="/register">ثبت نام کنید</a>
              <p>حساب کاربری ندارید؟</p>
            </div>
            <Field type="text" name="Number" placeholder="شماره موبایل" />
            <button className="log" type="submit">
              ادامه
            </button>
            <a href="">حریم خصوصی</a>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default Login;
