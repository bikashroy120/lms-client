"use client";

import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { styles } from "../styles/style";
import { Icon } from "@iconify/react";
import { useRegisterMutation } from "@/redux/features/auth/authApi";
import toast from "react-hot-toast";

type Props = {
  setRoute: (route: string) => void;
};

const schema = Yup.object().shape({
  name: Yup.string().required("please enter your name"),
  email: Yup.string().email("invalid email").required("please enter your email"),
  password: Yup.string().required("please enter your password").min(6),
});

const Signup = ({ setRoute }: Props) => {
  const [show, setShow] = useState(false);

  const [register,{isError,data,error,isSuccess,isLoading}] = useRegisterMutation()

  useEffect(()=>{
    if(isSuccess){
      const message = data?.message || "Register success"
      toast.success(message)
      setRoute("verify-otp")
    }
    if(error){
      if("data" in error){
        const errorData = error as any;
        toast.error(errorData.data.message)
      }
    }
  },[isSuccess,error])


  const formik = useFormik({
    initialValues: {name:"", email: "", password: "" },
    validationSchema: schema,
    onSubmit: async ({ name,email, password }) => {
      console.log("click")
      const data = {
        name,email,password
      }
      await register(data)
    },
  });

  const { values, touched, errors, handleChange, handleSubmit } = formik;

  return (
    <div className="w-full px-3">
      <h1 className={`${styles.title}`}>Join to Elearning</h1>
      <form onSubmit={handleSubmit}>
        <div className="mt-2">
          <label className={`${styles.label}`} htmlFor="name">
            Enter your name
          </label>
          <input
            type="text"
            value={values.name}
            onChange={handleChange}
            id="name"
            placeholder="Jon Deo"
            className={`${errors.name && touched.name && "border-red-500"} ${
              styles.input
            }`}
          />
          {errors.name && touched.name && (
            <span className=" text-red-500 pt-2 block">{errors.name}</span>
          )}
        </div>
        <div className="mt-5">
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
          <label className={`${styles.label}`} htmlFor="password">
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
          <span
            onClick={() => setShow((pre) => !pre)}
            className=" absolute right-[20px] text-black dark:text-white cursor-pointer text-[20px] top-[45px]"
          >
            {show ? <Icon icon="mdi:eye" /> : <Icon icon="el:eye-close" />}
          </span>
          {errors.password && touched.password && (
            <span className=" text-red-500 pt-2 block">{errors.password}</span>
          )}
        </div>

        <button type="submit" className=" w-full py-3 text-white rounded-full mt-5 font-Poppins font-semibold text-[17px] bg-[#39c1f3] ">
          Sign up
        </button>
      </form>

      <div>
        <div className=" flex flex-col items-center justify-center py-5">
          <span className={`${styles.label} `}>Or join with</span>
          <div className=" flex items-center gap-2">
            <button className=" text-[30px]">
              <Icon icon="flat-color-icons:google" />
            </button>
            <button className=" text-[28px] text-black dark:text-white">
              <Icon icon="cib:github" />
            </button>
          </div>
        </div>

        <div className=" flex items-center justify-center gap-2 py-3">
          <span className={`${styles.label} `}>Already have a account </span>{" "}
          <button onClick={() => setRoute("Login")} className=" text-blue-500">
            Log in
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
