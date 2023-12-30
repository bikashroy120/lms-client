"use client";

import React from "react";
import Container from "../utils/Container";
import { Icon } from "@iconify/react";
import { navsItemData } from "../utils/NavItem";
import Link from "next/link";

type Props = {};

const address = [
  {
    icon: <Icon icon="mdi:address-marker-outline" className=" text-[25px]"/>,
    text: "3556 Beech Street, San Francisco, California, CA 94108",
  },
  {
    icon: <Icon icon="gg:phone" className=" text-[20px]"/>,
    text: " +19 123-456-7890",
  },
  {
    icon: <Icon icon="fxemoji:email" className=" text-[20px]"/>,
    text: "bikashroydt@gmail.com",
  },
];


const Social=[
    {
        url:"/",
        name:"Youtube"
    },
    {
        url:"/",
        name:"Instagram"
    },
    {
        url:"/",
        name:"github"
    },
    {
        url:"/",
        name:"Facebook"
    },
]

const Footer = (props: Props) => {
  return (
    <div className="lg:pt-[80px] pt-5 bg-designColor/60">
      <Container>
        <div>
          <div className="flex items-start flex-col gap-7 lg:flex-row justify-between pb-6">
            <div className="lg:w-[400px] w-full">
              <h2 className="text-[23px] font-semibold mb-4 text-white">
                Elearing
              </h2>
              <div className=" flex flex-col gap-3 text-white">
                {address.map((item, index) => (
                  <div key={index} className=" flex items-start gap-2">
                    {item.icon}
                    <p>{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-[23px] font-semibold mb-4 text-white">
              Quick Links
              </h2>
              <div className=" flex flex-col gap-3 text-white">
                {navsItemData &&
                  navsItemData.map((i, index) => (
                    <Link href={`${i.url}`} key={index} passHref>
                      <span
                        className={` hover:text-success text-[18px] block font-Poppins font-[400]`}
                      >
                        {i.name}
                      </span>
                    </Link>
                  ))}
              </div>
            </div>

            <div>
              <h2 className="text-[23px] font-semibold mb-4 text-white">
              Social Links
              </h2>
              <div className=" flex flex-col gap-3 text-white">
                {navsItemData &&
                  Social.map((i, index) => (
                    <Link href={`${i.url}`} key={index} passHref>
                      <span
                        className={` hover:text-success text-[18px] block font-Poppins font-[400]`}
                      >
                        {i.name}
                      </span>
                    </Link>
                  ))}
              </div>
            </div>
            <div className=" lg:w-[400px] w-full">
                <h2 className="text-[23px] font-semibold mb-4 text-white">
                Get More Updates
              </h2>
              <div>
                <div>
                    <div className=" bg-white shadow-md flex items-center justify-between rounded-lg py-2 px-2">
                        <input type="text" placeholder=" Enter your email address" className="w-full border-none outline-none py-2 px-3 " />
                        <button className="py-2 px-5 rounded-lg text-white bg-primary">Submit</button>
                    </div>
                    <p className="mt-3 text-base font-medium text-white/70">Stay up-to-date with everything related to our brand and gain invaluable insights for your programming journey by subscribing to our newsletter.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full h-[2px] bg-white/70">

          </div>
          <div className=" py-5 text-white text-center">
            <h2>© 2024 Elearing LMS. All rights reserved.</h2>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
