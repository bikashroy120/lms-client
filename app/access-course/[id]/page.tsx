"use client";


import CourseAccess from '../../components/CourseAccess/CourseAccess';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import React, { useState } from 'react'


const Page = ({ params }: any) => {
    const [open, setOpen] = useState(false);
    const [activeItem, setActiveItem] = useState(10);
    const [route, setRoute] = useState("Login");
    const id = params?.id;

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
      <CourseAccess id={id}/>
      <Footer/>
    </div>
  )
}

export default Page