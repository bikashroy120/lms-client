"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CustomButton from "../ui/CustomButton";
import { useAddQuestionMutation } from "../../../redux/features/courses/coursesApi";
import toast from "react-hot-toast";
import {format} from "timeago.js"
import Replies from "./Replies";

type Props = {
  data: any;
  courseId: any;
  refetch:any;
};

const Answer = ({ data, courseId,refetch }: Props) => {
  const { user } = useSelector((state: any) => state.auth);
  const [question, setQuestion] = useState("");
  const [addQuestion, { isSuccess, isLoading, error }] =
    useAddQuestionMutation();

  useEffect(() => {
    if (isSuccess) {
      const message = data?.message || "Question add success";
      toast.success(message);
      refetch()
      setQuestion("")
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
        <div className=" flex items-start flex-col gap-5">
          {data?.question?.map((item: any, index: number) => (
            <div key={index} className=" w-full flex items-start gap-3">
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
              <div className=" w-[92%]">
                  <h2 className=" text-[18px] font-semibold text-text">{item?.user?.name}</h2>
                  <p className=" text-base font-normal text-lightText">{item?.question}</p>
                  <span className=" text-[13px] text-lightText font-semibold">{format(item?.createdAt)}</span>

                  <div className=" mt-1">
                    <Replies user={user} courseId={courseId}  refetch={refetch} contentId={data?._id} question={item}/>
                  </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Answer;
