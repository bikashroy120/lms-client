import React from "react";
import CategoryTop from "./CategoryTop";
import Container from "@/app/utils/Container";
import TopHeading from "@/app/utils/TopHeading";

type Props = {};

const Category = (props: Props) => {
  return (
    <div className="">
      <CategoryTop />
      <div className="lg:py-[100px] lg:pt-[130px] py-5">
        <Container>
          <div>
            <div>
              <TopHeading
                title="Top Category"
                topTitle="Favourite Course"
                sub="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean
                  accumsan bibendum gravida maecenas augue elementum et neque. Suspendisse
                 imperdiet."
              />
              <div></div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Category;
