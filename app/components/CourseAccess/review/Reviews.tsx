import { Rate } from "antd";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CustomButton from "../../ui/CustomButton";
import toast from "react-hot-toast";
import { useAddReviewMutation } from "../../../../redux/features/courses/coursesApi";
import { format } from "timeago.js";
import ReviewReplies from "./ReviewReplies";

type Props = {
  couresId: any;
  refetch: any;
  data: any;
};

const Reviews = ({ couresId, refetch, data }: Props) => {
  const { user } = useSelector((state: any) => state.auth);
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(1);
  const [addReview, { isSuccess, isLoading, error }] = useAddReviewMutation();

  useEffect(() => {
    if (isSuccess) {
      const message = "Review add success";
      toast.success(message);
      refetch();
      setRating(1);
      setReview("");
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

  console.log("Review-------------------", data);

  const addReviewFun = async () => {
    const bodyData = {
      couresId,
      review,
      rating,
    };

    if (review === "") {
      toast.error("Please add a review");
    } else {
      await addReview(bodyData);
    }
  };

  return (
    <div className=" mt-4">
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
          <h2 className=" font-bold  text-[18px] text-text">{user?.name}</h2>
          <div className="py-2">
            <Rate
              defaultValue={rating}
              onChange={(value: number) => setRating(value)}
            />
          </div>
          <textarea
            value={review}
            onChange={(e: any) => setReview(e.target.value)}
            placeholder="Enter your question ?"
            className=" px-3 py-3 w-full border-gray-400 outline-none focus:border-primary h-[120px] border rounded-lg"
          ></textarea>
          <div className=" flex justify-end items-center">
            <CustomButton
              handelClick={() => addReviewFun()}
              variant="fill"
              title={isLoading ? "loading..." : "Add Review"}
            />
          </div>
        </div>
      </div>

      <div className="border-t border-t-gray-300  mt-5 ">
        <div className=" flex flex-col items-center gap-5 mt-5">
          {data?.map((item: any, index: number) => (
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
                  <div className="ml-14 lg:ml-0 ">
                  <Rate disabled defaultValue={item.rating} />
                  </div>
                </div>
                <div className=" ml-0 lg:ml-14">
                  <p className="mt-1 text-base font-medium text-lightText">
                    {item?.comment}
                  </p>
                  <div>
                    <ReviewReplies
                      user={user}
                      couresId={couresId}
                      review={item}
                      refetch={refetch}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
