"use client";

import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Route/Hero";
import Category from "./components/HomePage/Category";
import HomeProduct from "./components/HomePage/product/HomeProduct";
import MasterSkills from "./components/HomePage/MasterSkills";
import TrendingCourses from "./components/HomePage/TrendingCourses";
import StudentReview from "./components/HomePage/StudentReview";
import Footer from "./components/Footer";
import { useGetLayoutQuery } from "@/redux/features/layout/layoutApi";
import Loader from "./components/Loader/Loader";

export default function Home() {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(0);
  const [route, setRoute] = useState("Login");

  const { isLoading, data } = useGetLayoutQuery("type=Home");


  return (
    <>
      {isLoading ? (
        <>
          <Loader /> 
       </>
      ) : (
        <>
          <div>
            <Header
              open={open}
              setOpen={setOpen}
              route={route}
              setRoute={setRoute}
              activeItem={activeItem}
            />
            <Hero home={data?.data?.home}/>
            <Category home={data?.data?.home}/>
            <HomeProduct />
            <MasterSkills />
            <TrendingCourses />
            <StudentReview />
            <Footer />
          </div>
        </>
      )}
    </>
  );
}
