import Container from "../../utils/Container";
import React from "react";
import CategoryTop from "../HomePage/CategoryTop";

type Props = {};

function AboutUs({}: Props) {
  return (
    <div className="hero_background">
      <Container>
        <div className="lg:py-[130px] py-5">
          <CategoryTop />
        </div>
      </Container>
    </div>
  );
}

export default AboutUs;
