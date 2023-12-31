"use client";

import React from "react";
import { Icon } from "@iconify/react";
import Container from "../../utils/Container";
import Image from "next/image";
import { useFormik } from "formik";
import * as Yup from "yup";
import { styles } from "../styles/style";

type Props = {};

const schema = Yup.object().shape({
  name: Yup.string().required("please enter your name"),
  phone: Yup.string().required("please enter your phone number"),
  email: Yup.string().email("invalid email").required("please enter a email"),
  message: Yup.string().required("please enter your message"),
});

const Contact = (props: Props) => {
  const contactData = [
    {
      title: "Phone",
      icon: <Icon icon="basil:phone-solid" className=" text-[40px]" />,
      value: "01773372120",
    },
    {
      title: "Email Address",
      icon: <Icon icon="ic:baseline-email" className="text-[30px]" />,
      value: "bikashroydt@gmail.com",
    },
    {
      title: "Address",
      icon: <Icon icon="mdi:address-marker" className="text-[30px]" />,
      value: "Dhaka,bangladesh",
    },
  ];

  const formik = useFormik({
    initialValues: { name: "", phone: "", email: "", message: "" },
    validationSchema: schema,
    onSubmit: async ({ name, phone, email, message }) => {
      // await login({email,password})
      console.log(name, email, phone, message);
    },
  });

  const { values, touched, errors, handleChange, handleSubmit } = formik;

  return (
    <div className="lg:py-[100px] py-5">
      <Container>
        <div>
          <div className=" grid md:grid-cols-3 grid-cols-1 gap-7">
            {contactData.map((contact, index) => (
              <div
                key={index}
                className=" border hover:-translate-y-2 duration-500 rounded-xl p-5 py-8 flex items-center justify-center flex-col gap-3"
              >
                <div className="w-[60px] text-[25px] h-[60px] flex items-center justify-center bg-primary text-white rounded-full">
                  {contact?.icon}
                </div>
                <h2 className=" text-text font-bold text-[20px]">
                  {contact?.title}
                </h2>
                <p className=" text-base text-lightText">{contact.value}</p>
              </div>
            ))}
          </div>

          <div className=" mt-[80px] flex items-center flex-col lg:flex-row justify-between gap-10">
            <div className="w-full">
              <Image
                src={"/image/contactleftimg.jpg"}
                width={600}
                height={600}
                alt="contact image"
                className=" w-full h-full object-fill rounded-xl"
              />
            </div>
            <div className=" w-full">
              <h2 className=" text-[35px] font-bold text-text">Get In Touch</h2>
              <p className=" text-[18px] font-normal text-lightText mt-3">
                Aliquam lorem ante, dapibus in, viverra quis
              </p>
              <form onSubmit={handleSubmit}>
                <div className=" mt-7 flex items-center justify-between gap-5">
                  <div className="w-full">
                    <label className={`${styles.label}`} htmlFor="">
                      Name
                    </label>
                    <input
                      type="text"
                      value={values.email}
                      onChange={handleChange}
                      className={`${
                        errors.name && touched.name && "border-red-500"
                      } w-full text-black dark:text-white bg-transparent border rounded-md py-6 h-[40px] px-5 outline-none mt-[5px] font-Poppins`}
                    />
                    {errors.name && touched.name && (
                      <span className=" text-red-500 pt-2 block">
                        {errors.name}
                      </span>
                    )}
                  </div>
                  <div className=" w-full">
                    <label className={`${styles.label}`} htmlFor="">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      value={values.phone}
                      onChange={handleChange}
                      className={`${
                        errors.name && touched.name && "border-red-500"
                      } w-full text-black dark:text-white bg-transparent border rounded-md py-6 h-[40px] px-5 outline-none mt-[5px] font-Poppins`}
                    />
                    {errors.phone && touched.phone && (
                      <span className=" text-red-500 pt-2 block">
                        {errors.phone}
                      </span>
                    )}
                  </div>
                </div>
                <div className=" w-full mt-5">
                    <label className={`${styles.label}`} htmlFor="">
                      Email
                    </label>
                    <input
                      type="email"
                      value={values.email}
                      onChange={handleChange}
                      className={`${
                        errors.name && touched.name && "border-red-500"
                      } w-full text-black dark:text-white bg-transparent border rounded-md py-6 h-[40px] px-5 outline-none mt-[5px] font-Poppins`}
                    />
                    {errors.email && touched.email && (
                      <span className=" text-red-500 pt-2 block">
                        {errors.email}
                      </span>
                    )}
                  </div>
                  <div className=" w-full mt-5">
                    <label className={`${styles.label}`} htmlFor="">
                      Message
                    </label>
                    <textarea
                      value={values.message}
                      onChange={handleChange}
                      className={`${
                        errors.name && touched.name && "border-red-500"
                      } w-full text-black h-[200px] dark:text-white bg-transparent border rounded-md py-6 px-5 outline-none mt-[5px] font-Poppins`}
                    />
                    {errors.message && touched.message && (
                      <span className=" text-red-500 pt-2 block">
                        {errors.message}
                      </span>
                    )}
                  </div>
                  <div className=" mt-8">
                      <button className=" py-3 px-5 bg-primary text-white text-[20px] rounded-md font-semibold font-serif " type="submit">Send Message</button>
                  </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
