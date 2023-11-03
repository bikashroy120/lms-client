"use client";

import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { styles } from "../styles/style";
import { Icon } from "@iconify/react";

type Props = {
  setRoute: (route: string) => void;
};

const schema = Yup.object().shape({
  email: Yup.string().email("invalid email").required("please enter a email"),
  password: Yup.string().required("please enter your password").min(6),
});

const Login = ({ setRoute }: Props) => {
  const [show, setShow] = useState(false);

  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: schema,
    onSubmit: async ({ email, password }) => {
      console.log("hello world");
    },
  });

  const { values, touched, errors, handleChange, handleSubmit } = formik;

  return (
    <div className="w-full">
      <h1 className={`${styles.title}`}>Login with Elearning</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label className={`${styles.label}`} htmlFor="email">
            Enter your email
          </label>
          <input
            type="email"
            value={values.email}
            onChange={handleChange}
            id="email"
            placeholder="loginemail@gmail.com"
            className={`${errors.email && touched.email && "border-red-500"} ${
              styles.input
            }`}
          />
          {errors.email && touched.email && (
            <span className=" text-red-500 pt-2 block">{errors.email}</span>
          )}
        </div>
        <div className=" relative mt-5">
          <label className={`${styles.label}`} htmlFor="email">
            Enter your Password
          </label>
          <input
            type={show ? "text" : "password"}
            value={values.password}
            onChange={handleChange}
            id="password"
            placeholder="********"
            className={`${
              errors.password && touched.password && "border-red-500"
            } ${styles.input}`}
          />
          <span onClick={()=>setShow((pre)=>!pre)} className=" absolute right-[5px] text-black dark:text-white cursor-pointer text-[20px] top-[45px]">
            {show ? <Icon icon="mdi:eye" /> : <Icon icon="el:eye-close" />}
          </span>
          {errors.password && touched.password && (
            <span className=" text-red-500 pt-2 block">{errors.password}</span>
          )}
        </div>

        <button className=" w-full py-3 text-white rounded-full mt-5 font-Poppins font-semibold text-[17px] bg-[#39c1f3] ">Login</button>      </form>

      <div>
        <div className=" flex flex-col items-center justify-center py-5">
            <span className={`${styles.label} `}>Or join with</span>
            <div className=" flex items-center gap-2">
                <button className=" text-[30px]"><Icon icon="flat-color-icons:google" /></button>
                <button className=" text-[28px] text-black dark:text-white"><Icon icon="cib:github" /></button>
            </div>
        </div>

        <div className=" flex items-center justify-center gap-2 py-3">
            <span className={`${styles.label} `}>Already have on account </span> <button onClick={()=>setRoute("sign-up")} className=" text-blue-500">Sign in </button> 
        </div>
      </div>
    </div>
  );
};

export default Login;
