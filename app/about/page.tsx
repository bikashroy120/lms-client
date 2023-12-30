"use client";

import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TopHeader from "../components/ui/TopHeader";

type Props = {};

const Page = (props: Props) => {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(0);
  const [route, setRoute] = useState("Login");
  return (
    <>
      <div>
          <div className=" bg-white h-[80px] relative">
            <Header open={open} setOpen={setOpen} route={route} setRoute={setRoute} activeItem={activeItem}/>
          </div>
          <TopHeader title="About Us" subTitle="About Us"/>
          <Footer/>
      </div>
    </>
  );
};

export default Page;
