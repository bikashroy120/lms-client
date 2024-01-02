"use client";

import CourseDetails from "../../components/courseDetials/CourseDetails";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import React, { useState } from "react";

type Props = {};

const page = ({ params }: any) => {
  const id = params?.id;
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
      <CourseDetails id={id}/>
      <Footer/>
    </div>
  );
};

export default page;
