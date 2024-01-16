"use client";

import Container from "../../utils/Container";
import React from "react";
import CategoryTop from "../HomePage/CategoryTop";
import { useGetLayoutQuery } from "@/redux/features/layout/layoutApi";
import Loader from "../Loader/Loader";

type Props = {};

function AboutUs({}: Props) {
  const { isLoading, data } = useGetLayoutQuery("type=Home");

  return (
    <div className="hero_background">
      <Container>
        {isLoading ? (
          <>
            <Loader />
          </>
        ) : (
          <>
            <div className="lg:py-[130px] py-5">
              <CategoryTop home={data?.data?.home} />
            </div>
          </>
        )}
      </Container>
    </div>
  );
}

export default AboutUs;
