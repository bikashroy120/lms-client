"use client";

import React, { useState } from "react";
import Header from "../components/Header";
import BreadCrumb from "../components/ui/BreadCrumb";
import Footer from "../components/Footer";
import Contact from "../components/contact/Contact";

type Props = {};

const Page = (props: Props) => {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(4);
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
      <BreadCrumb title="Contact Us" subTitle="Contact Us"/>
      <Contact/>
      <Footer/>
    </div>
  );
};

export default Page;
