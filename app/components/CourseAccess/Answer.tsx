"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CustomButton from "../ui/CustomButton";
import { useAddQuestionMutation } from "../../../redux/features/courses/coursesApi";
import toast from "react-hot-toast";

type Props = {
  data: any;
  courseId: any;
};

const Answer = ({ data, courseId }: Props) => {
  const { user } = useSelector((state: any) => state.auth);
  const [question, setQuestion] = useState("");
  const [addQuestion, { isSuccess, isLoading, error }] =
    useAddQuestionMutation();
  console.log("question===========", data?.question);
  // console.log("question===========", courseId);

  useEffect(() => {
    if (isSuccess) {
      const message = data?.message || "Question add success";
      toast.success(message);
    }
    if (error) {
      if ("data" in error) {
        const errorData = error as any;
        toast.error(errorData.data.message);
      } else {
        console.log(error);
      }
    }
  }, [isSuccess, error]);

  const addQuestionFun = async () => {
    const postData = {
      question,
      couresId: courseId,
      contentId: data?._id,
    };
    if (question === "") {
      toast.error("Please add a question");
    } else {
      console.log(postData);
      await addQuestion(postData);
    }
  };

  return (
    <div className=" mt-5">
      <div>
        <div className=" flex items-start gap-2 justify-between">
          <div className=" w-[50px] flex bg-gray-300 items-center justify-center h-[50px] rounded-full overflow-hidden">
            {user?.avater ? (
              <Image
                src={user?.avater}
                width={50}
                height={50}
                alt="user"
                className=" w-full h-full object-fill"
              />
            ) : (
              <h2 className=" font-bold uppercase text-[20px] text-text">
                {user?.name.slice(0, 2)}
              </h2>
            )}
          </div>
          <div className=" w-[92%]">
            <textarea
              value={question}
              onChange={(e: any) => setQuestion(e.target.value)}
              placeholder="Enter your question ?"
              className=" px-3 py-3 w-full border-gray-400 outline-none focus:border-primary h-[120px] border rounded-lg"
            ></textarea>
          </div>
        </div>
        <div className=" flex justify-end items-center">
          <CustomButton
            handelClick={() => addQuestionFun()}
            variant="fill"
            title={isLoading ? "loading..." : "submit"}
          />
        </div>
      </div>

      <div className=" border-t border-t-gray-300 mt-5 pt-5">
        <div>
          {data?.question.map((item: any, index: number) => (
            <div key={index}>
              <div className=" w-[50px] flex bg-gray-300 items-center justify-center h-[50px] rounded-full overflow-hidden">
                {item?.user?.avater ? (
                  <Image
                    src={item?.user?.avater}
                    width={50}
                    height={50}
                    alt="user"
                    className=" w-full h-full object-fill"
                  />
                ) : (
                  <h2 className=" font-bold uppercase text-[20px] text-text">
                    {item?.user?.name.slice(0, 2)}
                  </h2>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Answer;
