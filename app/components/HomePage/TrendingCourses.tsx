"use client";

import Container from "@/app/utils/Container";
import TopHeading from "@/app/utils/TopHeading";
import { useGetAllCourseQuery } from "@/redux/features/courses/coursesApi";
import { useRouter } from "next/navigation";
import React from "react";
import CustomButton from "../ui/CustomButton";
import ProductCard from "./product/ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination } from "swiper/modules";

type Props = {};

const TrendingCourses = (props: Props) => {
  const router = useRouter();

  const {
    data: courses,
    isError,
    isLoading,
    refetch,
  } = useGetAllCourseQuery("", { refetchOnMountOrArgChange: true });

  return (
    <div className="hero_background">
      <Container>
        <div className="lg:py-[100px] py-5">
          <div className=" flex items-center justify-between">
            <TopHeading
              title="Trending Courses"
              topTitle="What’s New"
              sub="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean
                  accumsan bibendum gravida maecenas augue elementum et neque. Suspendisse
                 imperdiet."
            />
            <div className=" w-full flex items-center justify-end">
              <CustomButton
                title="All Courses"
                handelClick={() => router.push("/admin")}
              />
            </div>
          </div>

          <div className="pt-10">
            {isLoading ? (
              <>
                <div>Loading.....</div>
              </>
            ) : (
              <>
                {/* <div className=' grid grid-cols-3 gap-5'>
                        {
                          courses?.course?.map((course:any,index:number)=>(
                            <div key={index}>
                              <ProductCard course={course}/>
                            </div>
                          ))
                        }
                    </div> */}
                <Swiper
                  slidesPerView={3}
                  spaceBetween={30}
                  breakpoints={{
                    "@.50": {
                      slidesPerView: 1,
                      spaceBetween: 30,
                    },
                    "@1.00": {
                      slidesPerView: 2,
                      spaceBetween: 30,
                    },
                    "@1.50": {
                      slidesPerView: 2,
                      spaceBetween: 30,
                    },
                    "@1.75": {
                      slidesPerView: 3,
                      spaceBetween: 30,
                    },
                    "@2.25": {
                      slidesPerView: 3,
                      spaceBetween: 30,
                    },
                  }}
                  autoplay={{
                    delay: 2500,
                  }}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Pagination, Autoplay]}
                  className="mySwiper"
                >
                  {courses?.course?.map((course: any, id: number) => (
                    <div key={id}>
                      <SwiperSlide>
                        <ProductCard course={course}/>
                      </SwiperSlide>
                    </div>
                  ))}
                </Swiper>
              </>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TrendingCourses;
