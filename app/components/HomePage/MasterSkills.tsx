"use client";

import Container from "@/app/utils/Container";
import TopHeading from "@/app/utils/TopHeading";
import Book from "@/app/utils/svg/Book";
import Master2 from "@/app/utils/svg/Master2";
import Master3 from "@/app/utils/svg/Master3";
import Master4 from "@/app/utils/svg/Master4";
import Image from "next/image";
import React from "react";

type Props = {};

const MasterSkills = (props: Props) => {
  const data = [
    {
      title: "ContentStay motivated with engaging instructors",
      icon: <Book />,
    },
    {
      title: "Keep up with in the latest in cloud",
      icon: <Master2 />,
    },
    {
      title: "Get certified with 100+ certification courses",
      icon: <Master3 />,
    },
    {
      title: "Build skills your way, from labs to courses",
      icon: <Master4 />,
    },
  ];

  return (
    <div className="lg:py-[100px] bg-white py-5">
      <Container>
        <div className="flex items-center justify-between flex-col lg:flex-row">
          <div>
            <TopHeading
              title="Master the skills to drive your career"
              topTitle="What’s New"
              sub="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean accumsan bibendum gravida maecenas augue elementum et neque. Suspendisse imperdiet."
            />

            <div className=" grid grid-cols-2 gap-7 mt-7">
                {
                    data.map((item:any,index:number)=>(
                        <div key={index} className=" flex hover:-translate-y-2 duration-300 items-center gap-3 py-5 px-5 rounded-2xl border">
                            <div>
                                {item.icon}
                            </div>
                            <div>
                                <h2 className=" text-lightText font-medium text-[18px]">{item.title}</h2>
                            </div>
                        </div>
                    ))
                }
            </div>
          </div>
          <div>
                <Image src={"/image/join.png"} width={1000} height={500} alt="master"/>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default MasterSkills;
