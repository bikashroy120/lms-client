"use client"

import React from "react";
import CategoryTop from "./CategoryTop";
import Container from "@/app/utils/Container";
import TopHeading from "@/app/utils/TopHeading";
import CustomButton from "../ui/CustomButton";
import { useRouter } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination } from "swiper/modules";
import { useGetAllCategoryQuery } from "@/redux/features/category/categoryApi";
import CategoryCard from "./CategoryCard";


type Props = {};

const Category = (props: Props) => {
  const router = useRouter()
  const { data,isLoading, refetch } = useGetAllCategoryQuery(
    "",{refetchOnMountOrArgChange:true}
  );


  console.log("category========",data?.category)


  return (
    <div className="">
      <CategoryTop />
      <div className="lg:py-[100px] lg:pt-[130px] py-5">
        <Container>
          <div>
            <div className=" flex items-center justify-between">
              <TopHeading
                title="Top Category"
                topTitle="Favourite Course"
                sub="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean
                  accumsan bibendum gravida maecenas augue elementum et neque. Suspendisse
                 imperdiet."
              />
              <div className=" w-full flex items-center justify-end">
                  <CustomButton title="All Category" handelClick={()=>router.push("/admin")}/>
              </div>
            </div>

            <div className=" mt-5">
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
                slidesPerView: 5,
                spaceBetween: 30,
              },
              "@2.25": {
                slidesPerView: 5,
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
            {data?.category?.map((card:any, id:number) => (
              <div key={id}>
                <SwiperSlide>
                    <CategoryCard card={card}/>
                </SwiperSlide>
              </div>
            ))}
          </Swiper>
            </div>

          </div>
        </Container>
      </div>
    </div>
  );
};

export default Category;
