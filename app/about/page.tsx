"use client";

import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BreadCrumb from "../components/ui/BreadCrumb";
import About from "../components/about/About";
import AboutUs from "../components/about/AboutUs";
import Knowledge from "../components/about/Knowledge";

type Props = {};

const Page = (props: Props) => {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(2);
  const [route, setRoute] = useState("Login");
  return (
    <>
      <div>
          <div className=" bg-white h-[80px] relative">
            <Header open={open} setOpen={setOpen} route={route} setRoute={setRoute} activeItem={activeItem}/>
          </div>
          <BreadCrumb title="About Us" subTitle="About Us"/>
          <About/>
          <AboutUs/>
          <Knowledge/>
          <Footer/>
      </div>
    </>
  );
};

export default Page;
