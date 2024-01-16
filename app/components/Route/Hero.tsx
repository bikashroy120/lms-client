"use client"

import Image from "next/image";
import React, { useState } from "react";
import Container from "@/app/utils/Container";
import { BiSearch } from "react-icons/bi";
import { FaArrowRightLong } from "react-icons/fa6";
import AnimatedNumber from "../ui/AnimatedNumber";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { addSearch } from "@/redux/features/auth/authSlice";


type Props = {
  home:any
};

const Hero = ({home}: Props) => {
  const [search,setSearch] = useState("")
  const dispatch = useDispatch()
  const router = useRouter()
  const handelSearch = ()=>{
    dispatch(addSearch(search))
    router.push("/course?hfhfhf")
  }


  return (
    <div className="hero_background">
      <Container>
        <div className=" lg:h-[100vh] py-[100px] lg:py-0 h-full flex items-center justify-between w-full">
            <div className="w-full flex items-center flex-col lg:flex-row justify-between gap-10">
                <div className="lg:w-[60%] w-full">
                    <h3 className=" text-[20px] font-semibold text-lightText">{home?.subTitle}</h3>
                    <h2 className=" text-text font-bold text-[25px] lg:text-[45px] pt-4 pb-2 lg:pb-8 w-full  xl:w-[70%]">{home?.title}</h2>
                    <div className=" py-2 px-5 bg-white rounded-full flex items-center justify-between">
                        <span className=" text-[20px] mr-2"><BiSearch/></span>
                        <input type="text" value={search} onChange={(e:any)=>setSearch(e.target.value)} placeholder="Search Courses ..." className=" w-[90%] py-2 px-1 border-none outline-none "/>
                        <button onClick={handelSearch} className=" bg-primary w-[50px] h-[50px] flex items-center justify-center text-[25px] text-white rounded-full"><FaArrowRightLong/></button>
                    </div>
                    <h3 className=" text-[20px] py-3 lg:py-10 w-full md:w-[50%] font-semibold text-lightText">{home?.Trusted}</h3>

                    <div>
                        <h2 className=" text-[50px] font-bold text-text"><AnimatedNumber value={home?.review} />+  4.5</h2>
                    </div>
                </div>

                <div className="lg:w-[40%] w-full flex items-center justify-center">
                    <Image src={home?.image} width={500} height={500} alt="hero" className=""/>
                </div>
            </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
