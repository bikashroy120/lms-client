"use client"

import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Route/Hero";
import Category from "./components/HomePage/Category";
import HomeProduct from "./components/HomePage/product/HomeProduct";
import MasterSkills from "./components/HomePage/MasterSkills";
import TrendingCourses from "./components/HomePage/TrendingCourses";
import StudentReview from "./components/HomePage/StudentReview";
import Footer from "./components/Footer";


export default function Home() {
  const [open,setOpen] = useState(false)
  const [activeItem,setActiveItem] = useState(0)
  const [route,setRoute] = useState("Login")
  return (
      <>
        <div>
          < Header open={open} setOpen={setOpen} route={route} setRoute={setRoute} activeItem={activeItem}/>
          <Hero/>
          <Category/>
          <HomeProduct/>
          <MasterSkills/>
          <TrendingCourses/>
          <StudentReview/>
          <Footer/>
        </div>
      </>
  )
}
