import Image from "next/image";
import React, { useEffect, useState } from "react";
import CustomButton from "../../ui/CustomButton";
import { useAnswerReviewMutation } from "../../../../redux/features/courses/coursesApi";
import toast from "react-hot-toast";
import { format } from "timeago.js";

type Props = {
  user: any;
  refetch: any;
  couresId: any;
  review: any;
};

const ReviewReplies = ({ user, refetch, couresId, review }: Props) => {
  const [answer, setAnswer] = useState("");
  const [answerReview, { isSuccess, isLoading, error }] =
    useAnswerReviewMutation();

  console.log("=========", review);

  useEffect(() => {
    if (isSuccess) {
      const message = "Review add success";
      toast.success(message);
      setAnswer("");
      refetch();
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
      couresId: couresId,
      reviewReplay: answer,
      reviewId: review?._id,
    };

    if (answer === "") {
      toast.error("Please add a review replies");
    } else {
      await answerReview(bodyData);
    }
  };
  return (
    <div>
      <div>
        <div className=" flex flex-col items-center gap-5 mt-5">
          {review?.reviewReplay?.map((item: any, index: number) => (
            <div key={index} className=" w-full">
              <div>
                <div className=" flex items-start flex-col gap-3 md:flex-row justify-between">
                  <div className=" flex items-center gap-2 w-[70%]">
                    <div className="w-[50px] h-[50px] border overflow-hidden rounded-full">
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
                    <div className="w-[70%]">
                      <h2 className=" text-[17px] font-semibold">
                        {item?.user?.name}
                      </h2>
                      <p className=" text-[14px] font-semibold text-lightText ">
                        {format(item?.createdAt)}
                      </p>
                    </div>
                  </div>
                </div>
                <p className="mt-1 ml-0 lg:ml-14 text-base font-medium text-lightText">
                  {item?.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {user?.role === "admin" && (
        <div className=" flex items-start gap-2 justify-between mt-3">
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
      )}
    </div>
  );
};

export default ReviewReplies;
