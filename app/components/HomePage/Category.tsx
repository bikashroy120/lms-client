import Container from "@/app/utils/Container";
import CoursesSvg from "@/app/utils/svg/CoursesSvg";
import React from "react";

type Props = {};

const Category = (props: Props) => {
  return (
    <div>
      <Container>
        <div>
          <div>
            <div>
                <CoursesSvg/>
            </div>
            <div>
              <h2 className="text-[25px] font-bold text-text">10K</h2>
              <p className=" text-[18px] font-medium text-lightText">
                Online Courses
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Category;
