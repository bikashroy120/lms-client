"use client"

import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Courses from "../components/courses/Courses";
import BreadCrumb from "../components/ui/BreadCrumb";

type Props = {};

const Page = async({searchParams}: any) => {
    const [open, setOpen] = useState(false);
    const [activeItem, setActiveItem] = useState(1);
    const [route, setRoute] = useState("Login");

  return (
    <div>
      <div className=" bg-white h-[80px] relative">
        <Header
          open={open}
          setOpen={setOpen}
          route={route}
          setRoute={setRoute}
          activeItem={activeItem}
        />
      </div>
      <BreadCrumb title="Courses" subTitle="Courses"/>
      <Courses searchParams={searchParams}/>
      <Footer/>
    </div>
  );
};

export default Page;
