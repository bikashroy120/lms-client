import React from "react";
import ProductCard2 from "../HomePage/product/ProductCard2";
import Loader from "../Loader/Loader";

type Props = {
  courses: any;
  isLoading: boolean;
};

const CourseRight = ({ courses, isLoading }: Props) => {
  return (
    <div>
      <div className="">
        {isLoading ? (
          <>
           <Loader />
          </>
        ) : (
          <>
            {courses?.course?.length === 0 ? (
              <>
                <div>
                    <h2>Course Not Found </h2>
                </div>
              </>
            ) : (
              <div className=" grid 1200px:grid-cols-3 1000px:grid-cols-2 grid-cols-1 gap-5">
                {courses?.course?.map((course: any, index: number) => (
                  <div key={index}>
                    <ProductCard2 course={course} />
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default CourseRight;
