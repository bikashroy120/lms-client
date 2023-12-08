import Container from "@/app/utils/Container";
import CeritifiedSvg from "@/app/utils/svg/CeritifiedSvg";
import CoursesSvg from "@/app/utils/svg/CoursesSvg";
import StudentsSvg from "@/app/utils/svg/StudentsSvg";
import TutorsSvg from "@/app/utils/svg/TutorsSvg";
import React from "react";
import AnimatedNumber from "../ui/AnimatedNumber";

type Props = {};

const CategoryTop = (props: Props) => {
  return (
    <Container>
      <div className=" relative w-full pt-7 lg:pt-0">
        <div className=" w-full grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 items-center justify-between gap-5 lg:absolute top-[-70px] left-0">
          <div className="p-4 py-7 w-full rounded-2xl border flex items-center justify-center gap-5 bg-white">
            <div>
              <CoursesSvg />
            </div>
            <div>
              <h2 className="text-[25px] font-bold text-text"><AnimatedNumber value={10}/>K</h2>
              <p className=" text-[18px] font-medium text-lightText">
                Online Courses
              </p>
            </div>
          </div>
          <div className="p-4 py-7 w-full rounded-2xl border flex items-center justify-center gap-5 bg-white">
            <div>
              <TutorsSvg />
            </div>
            <div>
              <h2 className="text-[25px] font-bold text-text"><AnimatedNumber value={186}/>+</h2>
              <p className=" text-[18px] font-medium text-lightText">
                Expert Tutors
              </p>
            </div>
          </div>
          <div className="p-4 py-7 w-full rounded-2xl border flex items-center justify-center gap-5 bg-white">
            <div>
              <CeritifiedSvg />
            </div>
            <div>
              <h2 className="text-[25px] font-bold text-text"><AnimatedNumber value={5}/>K</h2>
              <p className=" text-[18px] font-medium text-lightText">
                Ceritified Courses
              </p>
            </div>
          </div>
          <div className="p-4 py-7 w-full rounded-2xl border flex items-center justify-center gap-5 bg-white">
            <div>
              <StudentsSvg />
            </div>
            <div>
              <h2 className="text-[25px] font-bold text-text"><AnimatedNumber value={7}/>K</h2>
              <p className=" text-[18px] font-medium text-lightText">
                Online Students
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default CategoryTop;
