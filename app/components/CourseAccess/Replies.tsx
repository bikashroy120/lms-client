import Image from "next/image";
import React, { useEffect, useState } from "react";
import CustomButton from "../ui/CustomButton";
import { useAddAnswerMutation } from "../../../redux/features/courses/coursesApi";
import toast from "react-hot-toast";
import {format} from "timeago.js"
import { Icon } from '@iconify/react';

type Props = {
  user: any;
  courseId: any;
  contentId: any;
  question: any;
  refetch: any;
};

function Replies({ user, courseId, contentId, question, refetch }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [answer, setAnswer] = useState("");
  const [addQuestion, { isSuccess, isLoading, error }] = useAddAnswerMutation();

  useEffect(() => {
    if (isSuccess) {
      const message = "Answer add success";
      toast.success(message);
      refetch();
      setAnswer("");
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

  const addAnswerFun = async () => {
    const bodyData = {
      answer: answer,
      questionId: question?._id,
      couresId: courseId,
      contentId: contentId,
    };

    if (answer === "") {
      toast.error("Please add a answer");
    } else {
      await addQuestion(bodyData);
    }
  };

  console.log("=============", question);

  return (
    <div>
      <div className=" flex items-center gap-3">
      <button onClick={() => setIsOpen(!isOpen)}>
        {!isOpen ? "Replies" : "Hide Replies"}
      </button>
      <div className=" flex items-center gap-1">
        <Icon icon="bx:message" className=" text-[18px] text-text"/> {question?.questionReplay?.length}
      </div>
      </div>
      {isOpen && (
        <div className=" mt-3">
          <div className=" flex items-start flex-col gap-5 mb-4">
            {question?.questionReplay.map((replay: any, index: number) => (
              <div className=" w-full flex items-start gap-3">
                <div className=" w-[50px] flex bg-gray-300 items-center justify-center h-[50px] rounded-full overflow-hidden">
                  {replay?.user?.avater ? (
                    <Image
                      src={replay?.user?.avater}
                      width={50}
                      height={50}
                      alt="user"
                      className=" w-full h-full object-fill"
                    />
                  ) : (
                    <h2 className=" font-bold uppercase text-[20px] text-text">
                      {replay?.user?.name.slice(0, 2)} 
                    </h2>
                  )}
                </div>
                <div className=" w-[92%]">
                  <h2 className=" text-[18px] font-semibold text-text">{replay?.user?.name}</h2>
                  <p className=" text-base font-normal text-lightText">{replay?.answer}</p>
                  <span className=" text-[13px] text-lightText font-semibold">{format(replay?.createdAt)}</span>

              </div>
              </div>
            ))}
          </div>
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
                value={answer}
                onChange={(e: any) => setAnswer(e.target.value)}
                placeholder="Enter your answer ?"
                className=" px-3 py-3 w-full border-gray-400 outline-none focus:border-primary h-[80px] border rounded-lg"
              ></textarea>
              <CustomButton
                handelClick={() => addAnswerFun()}
                variant="fill"
                title={isLoading ? "loading..." : "submit"}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Replies;
