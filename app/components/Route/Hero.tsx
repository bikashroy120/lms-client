import Image from "next/image";
import React from "react";
import { Icon } from "@iconify/react";
import Container from "@/app/utils/Container";
import { BiSearch } from "react-icons/bi";
import { FaArrowRightLong } from "react-icons/fa6";


type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="hero_background">
      <Container>
        <div className=" lg:h-[100vh] py-[100px] lg:py-0 h-full flex items-center justify-between w-full">
            <div className="w-full flex items-center flex-col lg:flex-row justify-between gap-10">
                <div className="lg:w-[60%] w-full">
                    <h3 className=" text-[20px] font-semibold text-lightText">The Leader in Online Learning</h3>
                    <h2 className=" text-text font-bold text-[25px] lg:text-[45px] pt-4 pb-2 lg:pb-8 w-full  xl:w-[70%]">Engaging & Accessible Online Courses For All</h2>
                    <div className=" py-2 px-5 bg-white rounded-full flex items-center justify-between">
                        <span className=" text-[20px] mr-2"><BiSearch/></span>
                        <input type="text" placeholder="Search Courses ..." className=" w-full py-2 px-1 border-none outline-none "/>
                        <button className=" bg-primary w-[50px] h-[50px] flex items-center justify-center text-[25px] text-white rounded-full"><FaArrowRightLong/></button>
                    </div>
                    <h3 className=" text-[20px] py-3 lg:py-10 w-full md:w-[50%] font-semibold text-lightText">Trusted by over 15K Users
                      worldwide since 2022</h3>

                    <div>
                        <h2 className=" text-[50px] font-bold text-text">290+ 4.5</h2>
                    </div>
                </div>

                <div className="lg:w-[40%] w-full flex items-center justify-center">
                    <Image src={"/image/object.png"} width={500} height={500} alt="hero" className=""/>
                </div>
            </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
