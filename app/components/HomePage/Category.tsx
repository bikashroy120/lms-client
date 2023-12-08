import React from "react";
import CategoryTop from "./CategoryTop";
import Container from "@/app/utils/Container";
import TopHeading from "@/app/utils/TopHeading";
import CustomButton from "../ui/CustomButton";
import { useRouter } from "next/navigation";

type Props = {};

const Category = (props: Props) => {
  const router = useRouter()

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
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Category;
