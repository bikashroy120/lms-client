"use client";

import { Rate } from "antd";
import Container from "../../utils/Container";
import React from "react";
import Image from "next/image";

type Props = {};

const StudentReview = (props: Props) => {
  const students = [
    {
      name: "Jessica James",
      image: "/image/rate1.jpg",
      job: "Student | Northeastern University,USA",
      rating: 5,
      comment:
        "I had the pleasure of exploring Becodemy, a website that provides an extensive range of courses on various tech-related topics. I was thoroughly impressed with my experience, as the website offers a comprehensive selection of courses that cater to different skill levels and interests. If you're looking to enhance your knowledge and skills in the tech industry, I highly recommend checking out Becodemy!",
    },

    {
      name: "Ayat AlBqoor",
      image: "/image/rate3.jpg",
      job: "Web developer | Nafith Logistics International,Jordan",
      rating: 5,
      comment:
        "Thanks for your amazing programming tutorial channel! Your teaching style is outstanding, and the quality of your tutorials is top-notch. Your ability to break down complex topics into manageable parts, and cover diverse programming languages and topics is truly impressive. The practical applications and real-world examples you incorporate reinforce the theoretical knowledge and provide valuable insights. Your engagement with the audience fosters a supportive learning environment. Thank you for your dedication, expertise, and passion for teaching programming, and keep up the fantastic work!",
    },
    {
      name: "Imen Lakrib",
      image: "/image/rate5.jpg",
      job: "Full stack web developer | Algeria",
      rating: 5,
      comment:
        "Your content is very special. The thing I liked the most is that the videos are so long, which means they cover everything in details. for that any person had beginner-level can complete an integrated project when he watches the videos. Thank you very much. Im very excited for the next videos Keep doing this amazing work",
    },
    {
      name: "Joseph D. Cleek",
      image: "/image/rate2.jpg",
      job: "Freelancer | Upwork",
      rating: 5,
      comment:
        "I recently purchased a course from Becodemy, and I must say, it exceeded my expectations! The website offers a wide range of tech-related courses, and I was thoroughly impressed with the quality and affordability of the course I chose. The course provided a wealth of knowledge and insights that I found invaluable. I highly recommend this website to anyone looking to learn something new, regardless of their skill level. With its comprehensive selection of courses and excellent instructors, Becodemy is the perfect place to expand your knowledge and skills in the tech industry.",
    },
    {
      name: "Saidi Daudi",
      image: "/image/rate4.jpg",
      job: "computer systems engineering student | Zimbabwe",
      rating: 5,
      comment:
        "BECODEMY does a good job of explaining the concepts in a clear and concise way, and the examples are well-chosen. Overall, this is a valuable resource for anyone who is new to programming",
    },


    {
      name: "Achmad Syihabul Millah",
      image: "/image/rate6.jpg",
      job: "Junior Web Developer | Indonesia",
      rating: 5,
      comment:
        "Join Becodemy! Becodemy focuses on practical applications rather than just teaching the theory behind programming languages or frameworks. I took a lesson on creating a web marketplace using React JS, and it was very helpful in teaching me the different stages involved in creating a project from start to finish. Overall, I highly recommend Becodemy to anyone looking to improve their programming skills and build practical projects. Becodemy is a great resource that will help you take your skills to the next level.",
    },
  ];

  return (
    <div className="lg:py-[100px] bg-white py-5">
      <Container>
        <div>
          <div className="w-full flex items-center justify-center">
            <div className=" flex items-center justify-center flex-col max-w-[750px]">
              <h2 className=" text-[25px] lg:text-[35px] py-2 font-bold text-text">
                Student Reviews
              </h2>
              <p className=" hidden lg:block text-base text-center font-medium text-lightText">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget
                aenean accumsan bibendum gravida maecenas augue elementum et
                neque. Suspendisse imperdiet.
              </p>
            </div>
          </div>

          <div className=" mt-7">
            <div className=" flex items-start justify-between flex-col md:flex-row gap-5">
              <div className=" flex flex-col items-center gap-5">
                {students.slice(0,3).map((item, index) => (
                  <div
                    key={index}
                    className=" w-full bg-white shadow-lg rounded-xl border border-gray-300 p-5"
                  >
                    <div>
                      <div className=" flex items-start flex-col gap-3 md:flex-row justify-between">
                        <div className=" flex items-center gap-2">
                          <div className="w-[50px] h-[50px] border overflow-hidden rounded-full">
                            <Image
                              src={item?.image}
                              width={100}
                              height={100}
                              alt="logo"
                              className=" w-full h-full object-cover"
                            />
                          </div>
                          <div className="w-[90%]">
                            <h2 className=" text-[17px] font-semibold">
                              {item.name}
                            </h2>
                            <p className=" text-[14px] font-semibold text-lightText ">
                              {item.job}
                            </p>
                          </div>
                        </div>
                        <Rate disabled defaultValue={item.rating} />
                      </div>
                      <p className="mt-3 text-base font-medium text-lightText">
                        {item.comment}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col items-center gap-5">
                {students.slice(3,6).map((item, index) => (
                  <div
                    key={index}
                    className=" w-full bg-white shadow-lg rounded-xl border border-gray-300 p-5"
                  >
                    <div>
                      <div className=" flex items-start flex-col md:flex-row gap-3 justify-between">
                        <div className=" flex items-center  gap-2">
                          <div className="w-[50px] h-[50px] border overflow-hidden rounded-full">
                            <Image
                              src={item?.image}
                              width={100}
                              height={100}
                              alt="logo"
                              className=" w-full h-full object-cover"
                            />
                          </div>
                          <div>
                            <h2 className=" text-[17px] font-semibold">
                              {item.name}
                            </h2>
                            <p className=" text-[14px] font-semibold text-lightText ">
                              {item.job}
                            </p>
                          </div>
                        </div>
                        <Rate disabled defaultValue={item.rating} />
                      </div>
                      <p className=" text-base mt-3 font-medium text-lightText">
                        {item.comment}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default StudentReview;
